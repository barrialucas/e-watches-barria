import React,{useEffect,useState} from "react";
import Item from "./Item";


const ItemList=({listaRelojes})=>{
    return(
        <div className="d-flex">
            {listaRelojes.map((producto)=><Item producto={producto}/>)}
        </div>
    )
}

export default ItemList;
