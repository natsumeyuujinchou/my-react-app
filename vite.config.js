// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,  // Enable global testing functions like 'describe' and 'it'
        environment: 'jsdom',  // Use jsdom for React component testing
    },
});