import React from "react";
import ItemCount from "./ItemCount";
import casio1 from "../img/casio1.jpg";

export default function ItemListContainer(){
    const onAdd=(cantidad)=>{
        alert("Usted agregó "+cantidad+ " unidades")
    }

    return(
        <div> 
            {relojes.map(producto=>
                <ItemCount
                stock={producto.stock}
                initial={producto.initial}
                onAdd={onAdd}
                />
            )}  
        </div>
    )
}

let relojes=[{
    name:"Casio A168wg Retro Vintage Gold",
    precio:200,
    img:casio1,
    stock:7,
    initial:0,
}];



