import { Client } from "../core/interface/client";

export function DetailClientTable({ cliente }: { cliente: Client }) {
  return (
    <div className="p-4 font-poppins">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Detalles del Cliente
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 font-semibold">Nombre</p>
            <p className="text-gray-800">{cliente.nombre}</p>
          </div>

          <div>
            <p className="text-gray-600 font-semibold">NIT</p>
            <p className="text-gray-800">{cliente.nit}</p>
          </div>

          <div>
            <p className="text-gray-600 font-semibold">Correo Electrónico</p>
            <p className="text-gray-800">{cliente.correoElectronico}</p>
          </div>

          <div>
            <p className="text-gray-600 font-semibold">Correo Corporativo</p>
            <p className="text-gray-800">{cliente.correoCorporativo}</p>
          </div>

          <div>
            <p className="text-gray-600 font-semibold">Teléfono</p>
            <p className="text-gray-800">{cliente.telefono}</p>
          </div>

          <div>
            <p className="text-gray-600 font-semibold">Dirección</p>
            <p className="text-gray-800">{cliente.direccion}</p>
          </div>

          <div>
            <p className="text-gray-600 font-semibold">Ciudad</p>
            <p className="text-gray-800">{cliente.ciudad}</p>
          </div>

          <div>
            <p className="text-gray-600 font-semibold">País</p>
            <p className="text-gray-800">{cliente.pais}</p>
          </div>

          <div>
            <p className="text-gray-600 font-semibold">Fecha de Registro</p>
            <p className="text-gray-800">{cliente.fechaRegistro}</p>
          </div>

          <div>
            <p className="text-gray-600 font-semibold">Estado</p>
            <p
              className={`font-semibold ${
                cliente.activo ? "text-green-600" : "text-red-600"
              }`}
            >
              {cliente.activo ? "Activo" : "Inactivo"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
