import React,{useEffect,useState} from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'

import {db} from "../../firebase/config"
import {doc, getDoc} from "firebase/firestore"


export const ItemDetailContainer=()=>{
    const [productoSelecc, setProductoSelecc] = useState(null)
    const [cargando, setCargando]=useState(true)

    const { itemId } = useParams()

    useEffect(()=>{
        setCargando(true)

        const itemRef= doc(db, "productos",itemId)
        getDoc(itemRef)
            .then (doc=>{
                const product= {id: doc.id, ...doc.data()}
                setProductoSelecc(product)
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