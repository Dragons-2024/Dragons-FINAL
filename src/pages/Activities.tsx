import { useState } from "react";
import {WindowDialogue} from "../components/WindowDialogue";
import { Main } from "../layout/Main";

export function Activities(){
    const [Window,setWindow]=useState(false);

    function setclose(){
      setWindow(false);
    }
    return(
       <Main>
        
        <h1 className="text-center py-10 text-5xl text-[#1E2759]">Modulo de Seguimiento</h1>
        <button className="ml-10 p-2 bg-[#4A5FD9] rounded-md text-white hover:bg-blue-700"
        onClick={()=>setWindow(true)}>Crear Seguimiento</button>
        <WindowDialogue open={Window} setclose={setclose}/>
        
        </Main>
        
    );
}