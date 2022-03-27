import React,{useState} from "react";
import ItemDetail from "./ItemDetail"
import ItemList from "./ItemList";
import {relojesArr} from "./Modelos";

const ItemDetailContainer=()=>{
    
    return(
        <div>
            {
            relojesArr.map((item)=>(
            <ItemDetail name={item.name} price={item.price} stock={item.stock} img={item.img} initial={item.initial} />
            ))}
        </div>
    )
}

export default ItemDetailContainer;