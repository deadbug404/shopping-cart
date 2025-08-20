import { Link, useParams } from "react-router-dom";
import Homepage from "./routes/Homepage"
import Shop from "./routes/Shop"
import "./App.css";
import { useEffect, useState } from "react";

export default function App(){
  const [cart,addItem] = useState([]);
  const [transactionVisibility, setTransactionVisibility] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState("");
  const {name} = useParams();

  function addItemFunc(item){
    addItem(prev => [...prev,{productName: item.name, productPrice: item.price}]);  
  }

  function checkout(){
    setTransactionVisibility(true);
  }

  function pay(){
    setTransactionStatus("Waiting for confirmation");
  }

  useEffect(()=>{
    if(transactionStatus!==""){
      setTimeout(() => {
        setTransactionStatus("Payment confirmed, Thank you!");
        addItem([]);
        setTimeout(()=>{setTransactionVisibility(false);setTransactionStatus("")},5000);
      }, 3000);
    }
  },[transactionStatus])

  return(
    <div id="app">
      <div id="header">
          <h1 className="companyName"><Link to="/homepage">E CORP</Link></h1>
          <div id="headerLinks">
              <Link to="/shop">Shop</Link>
              {name === "shop" ? (
                <button onClick={checkout}><span style={{color:"red"}}>{cart.length}</span> | Checkout</button>
              ) : null}
          </div>
      </div>
      <div id="body">
        {name === "homepage" ? (<Homepage />) : (<Shop addItemFunc={addItemFunc} />)}
      </div>
      {transactionVisibility ? (
        <div id="transaction">
          <div className="header">
            <p>CART ITEMS</p>
            <button onClick={()=>{setTransactionVisibility(false);setTransactionStatus("")}}>X</button>
          </div>
          <div >
            {
              transactionStatus != "" ? (<p style={{textAlign:"center"}}>{transactionStatus}</p>) :
              cart.map((item,index) =>(<p>{index+1}.{item.productName} - ${item.productPrice}</p>))
            }
          </div>
          <button onClick={pay}>PAY   |   ${cart.reduce((total,item)=>total+parseFloat(item.productPrice),0).toFixed(2)}</button>
        </div>
        ) : null}
    </div>
  )
}