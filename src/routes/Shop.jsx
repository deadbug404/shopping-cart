import { useEffect, useState } from "react"
import getAllProducts from "../fakestoreAPI"
import "./Shop.css"

export default function Shop({addItemFunc}){
    const [items, setItems] = useState([]);

    useEffect(()=>{
        getAllProducts().then(products => setItems(products));
    },[])

    if(items.length === 0) return (<div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}><p className="loading">Loading...</p></div>)

    return(
        <div id="productList">
            {
                items.map(item => (
                    <div className="card" key={item.title}>
                        <img src={item.image} alt={item.title} />
                        <div className="productInfo">
                            <div>
                                <p>{item.title}</p>
                            </div>
                            <div>
                                <button onClick={()=>addItemFunc({name: item.title,price: item.price})}>Add to cart     |       ${item.price}</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}