import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import {Promesa} from "../Promesa"
import ItemList from "./ItemList"
import Spinner from 'react-bootstrap/Spinner'

const ItemListContainer=()=>{
    
    const [listaRelojes, setListaRelojes] = useState([])
    const [cargando, setCargando]=useState(false)

    const { brandId } = useParams()

    useEffect(()=>{
        setCargando(true)

        Promesa()
        .then((resultado)=>{
            if (brandId){
                setListaRelojes(resultado.filter((item)=>item.brand === brandId))
            }else{
                setListaRelojes(resultado)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setCargando(false)
        })
        
    },[brandId])
    
    return(
        <>
        {
            cargando
            ? <Spinner className="spinner" animation="border" variant="info" size="xxl"/>
            : <ItemList listaRelojes={listaRelojes}/> 
        }
        </>  
    )
}

export default ItemListContainer;