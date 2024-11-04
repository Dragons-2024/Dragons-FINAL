import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cliente } from "../pages/Client";
import { NewClient } from "../pages/NewClient";

import { Activities } from "../pages/Activities";
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
        path:"/seguimiento",
        element:<Activities/>,
        errorElement: <div>404 Not Found</div>
    }
]);