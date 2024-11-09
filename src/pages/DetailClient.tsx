import { ClientOportunityList } from "../components/ClientOportunityList";
import { Cliente } from "../core/interface/client";
import { Main } from "../layout/Main";


    
export function DetailClient(){
    const cliente:Cliente = 
        {
            id: 1,
            nit: "123456789",
            nombre: "Empresa XYZ S.A.",
            direccion: "Calle Falsa 123",
            ciudad: "Ciudad Falsa",
            pais: "Falsolandia",
            telefono: "123-456-7890",
            correoCorporativo: "contacto@empresaxyz.com",
            activo: true
          }
    
    const name=cliente.nombre;

    return(
      <Main>
        <ClientOportunityList ClientName={name}/>
      </Main>
    );
}