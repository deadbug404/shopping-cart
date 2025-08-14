import App from "./App";
import { Navigate } from "react-router-dom";

const routes = [
    {path: "/", element: "", children: [
        {index: true, element: <Navigate to="/homepage"/>},
        {path: ":name", element: <App/>}
    ]}
]

export default routes