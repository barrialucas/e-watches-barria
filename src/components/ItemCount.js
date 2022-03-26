import React,{useState} from "react";

const ItemCount=({stock,onAdd})=>{
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

    return(
        <div className="botones row">
            <div className="col-xxl-3 d-flex justify-content-end"><a href="#" className="boton__sumarestar" onClick={()=>clickRestar()}>-</a></div>
            <div className="col-xxl-6 d-flex justify-content-center cantidad__reloj align-items-center">Cantidad:{cantidad}</div>
            <div className="col-xxl-3 d-flex justify-content-start"><a href="#" className="boton__sumarestar" onClick={()=>clickSumar()}>+</a></div>
            <div className="d-flex justify-content-center boton__carro">
                <button onClick={()=>addCart()} class="custom-btn btn-1">Agregar al Carro</button>
            </div>
        </div>
        
    )

};
export default ItemCount;
/* 
         /* const onAdd=(cantidad)=>{
        alert("Usted agregó "+cantidad+ " unidades"
        }
 */