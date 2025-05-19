import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/nattmartinez10.github.io",
  css:{
    modules: {
      localsConvention: "camelCase"
    }
  }
})
