import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  base: '/portfolio/', // use your repo name with slashes

  plugins: [react()],
})
