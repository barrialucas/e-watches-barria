import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import {collection,getDocs,query,where} from "firebase/firestore"
import {db} from "../../firebase/config"
import ItemList from "./ItemList"
import Spinner from 'react-bootstrap/Spinner'

const ItemListContainer=()=>{
    
    const [listaRelojes, setListaRelojes] = useState([])
    const [cargando, setCargando]=useState(false)

    const { brandId } = useParams()

    useEffect(()=>{
        setCargando(true)

        const productosRef=collection(db, "productos")
        const qBusq= brandId? query(productosRef, where("brand","==",brandId)) :productosRef

        getDocs(qBusq)
            .then(resp=>{
                const item=resp.docs.map((doc)=>({id: doc.id, ...doc.data()}))
                setListaRelojes(item)
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