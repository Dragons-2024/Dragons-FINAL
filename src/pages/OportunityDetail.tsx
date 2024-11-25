import { useLocation } from "react-router-dom";
import { DetailOportunityTable } from "../components/DetailOportunityTable";
import { Oportunidad } from "../core/interface/opportunity";
import { Main } from "../layout/Main";
import { useState } from "react";
import { ActivityTable } from "../components/ActivityTable";
import { ActivityWindowDialogue } from "../components/ActivityWindowDialogue";

export function OportunityDetail(){
    const location=useLocation();
    const oportunity=location.state as Oportunidad;
    const [Window,setWindow]=useState(false);
    

    function setclose(){
      setWindow(false);
    }

    return(
       <Main>
         <DetailOportunityTable oportunity={oportunity}/>
         <div className="flex justify-between items-center p-4">
        <h2 className="text-base md:text-2xl font-bold  text-[#1E2759] py-auto">Lista de Seguimientos</h2>
        <button className="ml-10 p-1 md:p-2 bg-[#4A5FD9] rounded-md text-white hover:bg-blue-700 text-xs md:text-base"
        onClick={()=>setWindow(true)}>Crear Seguimiento</button>
        </div>
        
        <ActivityWindowDialogue oportunity={oportunity} setclose={setclose} open={Window}/>
        <ActivityTable oportunity={oportunity}/>
       </Main>
    );
}