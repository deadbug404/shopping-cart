import { Outlet, Link, useParams } from "react-router-dom";
import { useState } from "react";

export default function App(){
  const [cart,addItem] = useState([]);
  const {name} = useParams();

  return(
    <div>
      <div>
          <h1><Link to="/homepage">Evil Corp</Link></h1>
          <div>
              <Link to="/shop">Shop</Link>
              <a href="">Profile</a>
              <a href="">Settings</a>
              {name === "shop" ? (<div id="cart-items">{cart.length}</div>) : null}
          </div>
      </div>
      <Outlet/>
    </div>
  )
}