import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Configurar nombres específicos para los archivos JS y CSS
        entryFileNames: 'assets/js/app.js',
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) {
            return 'assets/css/styles.css';
          }
          return 'assets/[name].[ext]';
        },
      },
    },
  },
});
