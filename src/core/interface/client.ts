export interface Client {
  id: number;
  nit: string;
  nombre: string;
  direccion: string;
  ciudad: string;
  pais: string;
  telefono: string;
  correoCorporativo: string;
  activo: boolean;
  contactos?: Contacto[];
}
export interface Contacto {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
}