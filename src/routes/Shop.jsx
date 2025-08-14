import { useEffect, useState } from "react"
import getAllProducts from "../fakestoreAPI"

export default function Shop({addItemFunc}){
    const [items, setItems] = useState([]);

    useEffect(()=>{
        getAllProducts().then(products => setItems(products));
    },[])

    if(items.length === 0) return (<p>Loading...</p>)

    return(
        <div>
            {
                items.map(item => (
                    <div key={item.title}>
                        <p>{item.title}</p>
                        <button onClick={()=>{addItemFunc(item.title)}}>ADD</button>
                    </div>
                ))
            }
        </div>
    )
}