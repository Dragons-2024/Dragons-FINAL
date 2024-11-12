import { toggleClientStatus } from '../services/ClienteServices';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useToggleClientStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, activo }: { id: number, activo: boolean }) => toggleClientStatus(id, activo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clientes'] });
    },
    onError: (error) => {
      console.error('Error al cambiar el estado del cliente:', error);
    },
  });
};