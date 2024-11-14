import { useLocation } from "react-router-dom";
import { DetailOportunityTable } from "../components/DetailOportunityTable";
import { Oportunidad } from "../core/interface/opportunity";
import { Main } from "../layout/Main";

export function OportunityDetail(){
    const location=useLocation();
    const oportunity=location.state as Oportunidad;
    return(
       <Main>
         <DetailOportunityTable oportunity={oportunity}/>
       </Main>
    );
}