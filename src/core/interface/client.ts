// src/core/interface/client.ts
export interface Client {
  id?: number;  // Se ha hecho opcional
  nombre: string;
  correoElectronico: string;
  telefono: string;
  direccion: string;
  fechaRegistro: string;
  estado: string;
  nit: string;
  ciudad: string;
  pais: string;
  correoCorporativo: string;
  activo: boolean;
}
