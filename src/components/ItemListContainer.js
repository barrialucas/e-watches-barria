import React,{useEffect,useState} from "react";
import ItemList from "./ItemList"
import {relojesArr} from "./Modelos";

const ItemListContainer=()=>{
    const [listaRelojes, setlistaRelojes] = useState([])
    const promesa= new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                resolve(
                    relojesArr
                    )
            },2000);
        }else {
            reject(`hay un error`)
        }
    })
    useEffect(()=>{
        promesa
        .then((resultado)=>setlistaRelojes(resultado))
        .catch((error)=>console.log(error))
    },[])
    return(
        <div>
            <ItemList listaRelojes={listaRelojes}/>
        </div>
    )
}

export default ItemListContainer;