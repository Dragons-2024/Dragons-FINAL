import { Cliente } from "../core/interface/client";

export interface ClientRowProps {
  cliente: Cliente;
  onToggleActive: (clienteNit: string) => void;
  onUpdate: (clienteNit: string) => void;
}
