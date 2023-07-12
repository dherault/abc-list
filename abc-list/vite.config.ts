import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'abc-list',
    },
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
  },
})
