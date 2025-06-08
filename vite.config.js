import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://github.com/JayKumar-00/EMS.git',
  plugins: [react()],
})
