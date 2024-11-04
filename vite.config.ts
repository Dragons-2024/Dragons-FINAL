import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0', // Vincula el servidor de previsualización a 0.0.0.0
    port: Number(process.env.PORT) || 3000, // Usa el puerto de entorno o el 3000 por defecto
  },
});
