import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
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