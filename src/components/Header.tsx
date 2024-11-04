import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-secondary text-light text-sm p-2 flex justify-between items-center font-poppins">
      <div className="flex items-center space-x-4">
        <nav className="flex space-x-4">
          <Link
            to="/configuracion"
            className="focus:bg-primary active:bg-primary text-light p-2 rounded"
          >
            Configuración
          </Link>
          <Link
            to="/clientes"
            className="focus:bg-primary active:bg-primary text-light p-2 rounded"
          >
            Clientes
          </Link>
          <Link
            to="/oportunidades"
            className="focus:bg-primary active:bg-primary text-light p-2 rounded"
          >
            Oportunidades
          </Link>
          <Link
            to="/seguimiento"
            className="focus:bg-primary active:bg-primary text-light p-2 rounded"
          >
            Seguimiento
          </Link>
          <Link
            to="/dashboard"
            className="focus:bg-primary active:bg-primary text-light p-2 rounded"
          >
            Dashboard
          </Link>
        </nav>
      </div>
      <div className="flex items-center justify-center flex-grow">
        <img
          src="https://res.cloudinary.com/dlrjuallw/image/upload/v1730684999/logodragons_r1ns4o.png"
          alt="Logo"
          className="h-20 w-auto"
        />
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-light" />
        <span className="ml-2 pr-2 font-bold">Dragon24</span>
      </div>
    </header>
  );
}
