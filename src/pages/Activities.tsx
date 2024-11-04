import { useState } from "react";
import {WindowDialogue} from "../components/WindowDialogue";
import { Main } from "../layout/Main";
import { ActivityTable } from "../components/ActivityTable";

export function Activities(){
    const [Window,setWindow]=useState(false);

    function setclose(){
      setWindow(false);
    }
    return(
       <Main>
        <section className="font-poppins p-10">
        <h1 className="text-center text-5xl mb-5 text-[#1E2759]">Seguimientos</h1>
        <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4 text-[#1E2759]">Lista de Seguimientos</h2>
        <button className="ml-10 p-2 bg-[#4A5FD9] rounded-md text-white hover:bg-blue-700"
        onClick={()=>setWindow(true)}>Crear Seguimiento</button>
        </div>
        
        <WindowDialogue open={Window} setclose={setclose}/>
        <ActivityTable/>
        </section>
        </Main>
        
        
    );
}