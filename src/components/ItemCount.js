import React,{useState} from "react";

const ItemCount=({stock,initial,onAdd})=>{
    const [cantidad, setCantidad]=useState(0)
    const clickSumar=()=>{
        if (cantidad===stock){
            return;
        }
        setCantidad(cantidad +1);
        
    }
    const clickRestar=()=>{
        if(cantidad===0){
            return;
        }
        setCantidad(cantidad -1);
    }

    const addCart=()=>{
        onAdd(cantidad)
    }


};
export default ItemCount;
/* 

         /* const onAdd=(cantidad)=>{
        alert("Usted agregó "+cantidad+ " unidades")
    }
 */