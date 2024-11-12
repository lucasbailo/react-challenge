import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import envCompatible from 'vite-plugin-env-compatible'
import vitePluginRequire from 'vite-plugin-require'

// https://vite.dev/config/
export default defineConfig({
  plugins:
    [react(),
    envCompatible(),
    vitePluginRequire.default()
    ]
})
