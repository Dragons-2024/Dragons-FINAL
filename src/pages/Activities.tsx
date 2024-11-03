import { useState } from "react";
import {WindowDialogue} from "../components/WindowDialogue";

export function Activities(){
    const [Window,setWindow]=useState(false);

    function setclose(){
      setWindow(false);
    }
    return(
        <div>
        
        <h1 className="text-center py-10 text-5xl">Modulo de Seguimiento</h1>
        <button className="ml-10 p-2 bg-blue-500 rounded-md text-white hover:bg-blue-600"
        onClick={()=>setWindow(true)}>Crear Seguimiento</button>
        <WindowDialogue open={Window} setclose={setclose}/>
        
        </div>
    );
}