import React,{useEffect,useState} from "react";
import ItemDetail from "./ItemDetail"
import ItemList from "./ItemList";
import {relojesArr} from "./Modelos";

const ItemDetailContainer=()=>{
    const [productoSelecc, setProductoSelecc] = useState([])
    const getItem= new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                resolve(
                    relojesArr
                    )
            },5000);
        }else {
            reject(`hay un error`)
        }
    })
    useEffect(()=>{
        getItem
        .then((resultado)=>setProductoSelecc(resultado.find((item)=>item.id===2)))
        .catch((error)=>console.log(error))
    },[])

    return(
        <div>
            <ItemDetail productoSelecc={productoSelecc}/>
        </div>
    )
}

export default ItemDetailContainer;