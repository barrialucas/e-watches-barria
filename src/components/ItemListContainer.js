import React,{useState} from "react";
import ItemList from "./ItemList"

const ItemListContainer=()=>{
    const [mostrar2, setMostrar2] = useState(null)



    
    return(
        <div> 
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;