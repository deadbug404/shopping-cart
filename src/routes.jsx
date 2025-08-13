import App from "./App";
import Homepage from "./routes/Homepage";
import Shop from "./routes/Shop";
import { Navigate } from "react-router-dom";

const routes = [
    {path: "/", element: <App/>, children: [
        {index: true, element: <Navigate to="/homepage"/>},
        {path: "homepage", element: <Homepage />},
        {path: "shop", element: <Shop />}
    ]}
]

export default routes