import React,{useState} from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";

import {relojesArr} from "./Modelos";

const ItemList=()=>{
    const [mostrar, setMostrar] = useState(null)
    const promesa= new Promise((resolve, reject)=>{
        setTimeout(function(){  
            if (true){
                resolve(
                <div className="row container-fluid justify-content-center">
            {
            relojesArr.map((item)=>(
            <Item name={item.name} price={item.price} stock={item.stock} img={item.img} initial={item.initial} id={item.id}/>
            ))}
        </div>)
            }else {
                reject(`hay un error`)
            }
        },2000);
    })
    promesa.then(
        (resolve=>{
           setMostrar(resolve)
        })
    )
    return(mostrar)
    
}

export default ItemList;