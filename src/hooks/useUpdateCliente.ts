import {patchClient} from '../services/ClienteServices';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {Client} from '../core/interface/client';


export const useUpdateCliente = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, cliente }: { id: number, cliente: Client }) => patchClient(id, cliente),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['clientes']});
    },
    onError: (error) => {
      console.error('Error al actualizar el cliente:', error);
    }
  });
};