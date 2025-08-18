import { Outlet, Link, useParams } from "react-router-dom";
import Homepage from "./routes/Homepage"
import Shop from "./routes/Shop"
import { useEffect, useState } from "react";

export default function App(){
  const [cart,addItem] = useState([]);
  const [transactionVisibility, setTransactionVisibility] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState("Waiting for confirmation...");
  const {name} = useParams();

  function addItemFunc(name){
    addItem(prev => [...prev,name]);
  }

  function pay(){
    setTransactionVisibility(true);
  }

  useEffect(()=>{
    if(transactionVisibility){
      setTimeout(() => {
        setTransactionStatus("Payment confirmed, thank you!");
      }, 3000);
    }

  },[transactionVisibility])

  return(
    <div>
      <div>
          <h1><Link to="/homepage">Evil Corp</Link></h1>
          <div>
              <Link to="/shop">Shop</Link>
              <a href="">Profile</a>
              <a href="">Settings</a>
              {name === "shop" ? (
                <div>
                  <div id="cart-items">{cart.length}</div>
                  <button onClick={pay}>Pay Now</button>
                </div>
              ) : null}
          </div>
      </div>
      {name === "homepage" ? (<Homepage />) : (<Shop addItemFunc={addItemFunc} />)}
      {transactionVisibility ? (<div>{transactionStatus}</div>) : null}
    </div>
  )
}