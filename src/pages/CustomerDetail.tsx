import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Cliente {
  nit: string;
  nombre: string;
  direccion: string;
  ciudad: string;
  pais: string;
  telefono: string;
  correoCorporativo: string;
  activo: boolean;
}

// Datos ficticios para simular la API
const mockCustomerData: Cliente[] = [
  {
    nit: "123456789",
    nombre: "Empresa XYZ S.A.",
    direccion: "Calle Falsa 123",
    ciudad: "Ciudad Falsa",
    pais: "Falsolandia",
    telefono: "123-456-7890",
    correoCorporativo: "contacto@empresaxyz.com",
    activo: true,
  },
  {
    nit: "987654321",
    nombre: "Compañía ABC Ltda.",
    direccion: "Avenida Siempre Viva 742",
    ciudad: "Springfield",
    pais: "EE.UU.",
    telefono: "098-765-4321",
    correoCorporativo: "info@companiaabc.com",
    activo: false,
  },
];

const CustomerDetail: React.FC = () => {
  const { customerId } = useParams<{ customerId: string }>();
  const [customer, setCustomer] = useState<Cliente | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulación de una llamada a la API
    const fetchCustomer = async () => {
      try {
        // Simulación de una llamada a la API
        const customer = mockCustomerData.find(c => c.nit === customerId);
        if (!customer) {
          throw new Error("Customer not found");
        }
        setCustomer(customer);
        setLoading(false);
      } catch (error) {
        setError(`Error loading customer information: ${error.message}`);
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [customerId]);

  if (loading) {
    return (
      <div className="loader">
        <div className="skeleton h-6 w-1/2 mb-4"></div>
        <div className="skeleton h-4 w-1/3 mb-2"></div>
        <div className="skeleton h-4 w-1/4 mb-2"></div>
        <div className="skeleton h-4 w-1/4 mb-2"></div>
        <div className="skeleton h-4 w-1/4 mb-2"></div>
        <div className="skeleton h-4 w-1/4 mb-2"></div>
        <div className="skeleton h-4 w-1/4 mb-2"></div>
      </div>
    );
  }

  if (error) {
    return <div className="error-message text-red-500">{error}</div>;
  }

  return (
    <div className="p-4 font-poppins">
      <h2 className="text-2xl font-bold mb-4 text-[#1E2759]">{customer?.nombre}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg">
          <tbody className="text-gray-700 text-sm font-light">
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <td className="py-3 px-6 font-bold text-[#1E2759]">NIT</td>
              <td className="py-3 px-6">{customer?.nit}</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 font-bold text-[#1E2759]">Dirección</td>
              <td className="py-3 px-6">{customer?.direccion}</td>
            </tr>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <td className="py-3 px-6 font-bold text-[#1E2759]">Ciudad</td>
              <td className="py-3 px-6">{customer?.ciudad}</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 font-bold text-[#1E2759]">País</td>
              <td className="py-3 px-6">{customer?.pais}</td>
            </tr>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <td className="py-3 px-6 font-bold text-[#1E2759]">Teléfono</td>
              <td className="py-3 px-6">{customer?.telefono}</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 font-bold text-[#1E2759]">Correo</td>
              <td className="py-3 px-6">{customer?.correoCorporativo}</td>
            </tr>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <td className="py-3 px-6 font-bold text-[#1E2759]">Estado</td>
              <td className="py-3 px-6">{customer?.activo ? 'Activo' : 'Inactivo'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerDetail;