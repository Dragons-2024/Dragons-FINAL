import { Main } from "../layout/Main";
import { OpportunityList } from "../components/OpportunityList";
import { useState } from "react";
import { WindowDialogue } from "../components/OpportunityWindowDialogue";
export function Opportunity() {
    const [Window, setWindow] = useState(false);

    function setclose() {
        setWindow(false);
    }
    return (

        <Main>
            <div className="flex justify-between p-10">
                <h2 className="text-2xl font-bold mb-4 text-[#1E2759]">Lista de Oportunidades</h2>
                <button  className="bg-[#4A5FD9] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block"
                    onClick={() => setWindow(true)}>Crear Oportunidad</button>
            </div>
            <WindowDialogue open={Window} setclose={setclose} />
            <OpportunityList />
        </Main>

    );
}