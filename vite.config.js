import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()]
})


