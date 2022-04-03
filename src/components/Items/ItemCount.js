import React,{useState} from "react";
import {Link} from "react-router-dom"


const ItemCount=({stock,onAdd,cantidad,setCantidad})=>{
    
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
    
    return(
        <div className="botones row">
            <div className="col-xxl-3 d-flex justify-content-end"><span className="boton__sumarestar" onClick={()=>clickRestar()}>-</span></div>
            <div className="col-xxl-6 d-flex justify-content-center cantidad__reloj align-items-center">Cantidad:{cantidad}</div>
            <div className="col-xxl-3 d-flex justify-content-start"><span className="boton__sumarestar" onClick={()=>clickSumar()}>+</span></div>
            <div className="d-flex align-items-center justify-content-center  boton__carro">
                <Link to="/cart"><button  onClick={()=>onAdd()} className="custom-btn btn-1">Agregar al Carro</button></Link>
            </div>
        </div>   
    )

};

export default ItemCount;