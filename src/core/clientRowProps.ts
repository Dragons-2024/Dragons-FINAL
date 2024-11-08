// ClientRowProps.ts
import { Cliente } from "../core/interface/client";

export interface ClientRowProps {
  cliente: Cliente;
  onToggleActive: (clienteNit: string, clienteActivo: boolean) => void; 
  onUpdate: (clienteNit: string) => void;
}

