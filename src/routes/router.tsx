import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Activities } from "../pages/Activities";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <div>404 Not Found</div>
    },
    {
        path:"/activities",
        element:<Activities/>,
        errorElement: <div>404 Not Found</div>
    }
]);