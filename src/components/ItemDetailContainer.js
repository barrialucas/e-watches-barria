import React,{useState} from "react";
import ItemDetail from "./ItemDetail"
import ItemList from "./ItemList";
import {relojesArr} from "./Modelos";

const ItemDetailContainer=()=>{
    const [mostrar2, setMostrar2] = useState(null)
    const getItem= new Promise((resolve, reject)=>{
        setTimeout(function(){
            if (true){
                resolve(
                <div>
                    {
                    relojesArr.map((item)=>(
                    <ItemDetail name={item.name} price={item.price} stock={item.stock} img={item.img} initial={item.initial} />
                    ))}
                </div>
                )
            }else {
                reject(`hay un error`)
            }
        },2000);
    })
        getItem.then(
            (resolve=>{
               setMostrar2(resolve)
            })
        )
        return(mostrar2)
}

export default ItemDetailContainer;