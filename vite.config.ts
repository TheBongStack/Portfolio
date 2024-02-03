import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    plugins: [react()],
    optimizeDeps: {
        esbuildOptions: {
            target: 'esnext',
            charset: 'utf8'
        },
        disabled: false
    },
    build: {
        minify: 'esbuild',
        cssMinify: 'lightningcss',
        sourcemap: true,
        cssCodeSplit: true
    }
});
