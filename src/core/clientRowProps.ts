import { Client } from "../core/interface/client";

export interface ClientRowProps {
  cliente: Client;
  onToggleActive: (clienteNit: string, clienteActivo: boolean) => void; 
  onUpdate: (clienteNit: string) => void;
}

