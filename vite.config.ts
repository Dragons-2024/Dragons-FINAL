import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  preview: {
    port: Number(process.env.PORT!) || 4173, 
    host: true 
  }
});
