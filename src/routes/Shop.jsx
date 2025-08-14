import { useEffect, useState } from "react"
import getAllProducts from "../fakestoreAPI"

export default function Shop(){
    const [items, setItems] = useState([]);

    useEffect(()=>{
        getAllProducts().then(products => setItems(products));
    },[])

    if(items.length === 0) return (<p>Loading...</p>)

    return(
        <div>
        </div>
    )
}