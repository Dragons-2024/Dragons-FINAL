import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cliente } from "../pages/Client";
import { NewClient } from "../pages/NewClient";
import { Opportunity } from "../pages/Opportunity";
import { OportunityDetail } from "../pages/OportunityDetail";
import ClientDetail from "../pages/ClientDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <div>404 Not Found</div>
    },
    {
        path: "/clientes",
        element: <Cliente />,
        errorElement: <div>404 Not Found</div>
    },
    {
        path: "/crear-cliente",
        element: <NewClient />,
        errorElement: <div>404 Not Found</div>
    },
    {
        path: "/detalle-cliente",
        element: <ClientDetail/>,
        errorElement: <div>404 Not Found</div>
    }
    ,
    {
        path: "/oportunidades",
        element: <Opportunity />,
        errorElement: <div>404 Not Found</div>
    },
    {
        path: "/detalles-clientes/:nit",
        element: <ClientDetail />,
        errorElement: <div>404 Not Found</div>
    },
    {
        path:"/detalles-oportunidad/:nombre",
        element: <OportunityDetail />,
        errorElement: <div>404 Not Found</div>
    }
]);