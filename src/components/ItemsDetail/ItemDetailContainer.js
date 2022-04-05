import React,{useEffect,useState} from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import {Promesa} from "../Promesa"
import Spinner from 'react-bootstrap/Spinner'

export const ItemDetailContainer=()=>{
    const [productoSelecc, setProductoSelecc] = useState(null)
    const [cargando, setCargando]=useState(true)

    const { itemId } = useParams()

    useEffect(()=>{
        setCargando(true)

        Promesa()
        .then((resultado)=>{
            setProductoSelecc(resultado.find((item)=>item.id===Number(itemId)) )
        })
        .finally(()=>{
            setCargando(false)
        })
    },[itemId])

    return(
        <div>
        {   
            cargando
            ? <Spinner className="spinner"animation="border" variant="info"/>
            : <ItemDetail {...productoSelecc}/>
        }
        </div>
    )
}