
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';



const SRC_DIR = path.resolve(__dirname, './src');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(__dirname, './www',);

export default {
  plugins: [
    reactRefresh(),

  ],
  root: SRC_DIR,
  base: '',
  publicDir: PUBLIC_DIR,
  build: {
    outDir: BUILD_DIR,
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/csrf/': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,

      },
      '/api/login/': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },

      '/session/': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },

      '/alignerapi/patientapi/': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },

      '/alignerapi/treatmentapi/': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },

      '/alignerapi/lengthsapi/': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },

      '/alignerapi/alignerdateapi/': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },

      // ... any other proxy rules
    },
  },
  resolve: {
    alias: {
      '@': SRC_DIR,
    },
  },

};
