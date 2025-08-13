import { Outlet, redirect, useParams } from "react-router-dom";
import Header from "./Header";
import Homepage from "./routes/Homepage";
import { useEffect } from "react";

export default function App(){

  return(
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}