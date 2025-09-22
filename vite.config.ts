import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";
import { imagetools } from "vite-imagetools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    tailwindcss(),
    // Gzip compression for broad compatibility
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
      compressionOptions: { level: 9 },
      deleteOriginFile: false,
      filter: (file) => /\.(js|css|html|svg|json|xml|txt|ico|webp|avif)$/.test(file),
    }),
    // Brotli compression for modern browsers
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
      deleteOriginFile: false,
      filter: (file) => /\.(js|css|html|svg|json|xml|txt|ico|webp|avif)$/.test(file),
    }),
  ],
  build: {
    // Enable minification
    minify: "terser",
    // Code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          motion: ["framer-motion"],
          icons: ["lucide-react"],
        },
      },
    },
    // Asset optimization
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
  },
  // Performance optimizations
  server: {
    hmr: {
      overlay: false,
    },
  },
  // Preload critical resources
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion", "lucide-react"],
  },
});