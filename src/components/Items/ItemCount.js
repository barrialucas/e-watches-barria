import React from "react";


const ItemCount=({stock,onAdd,cantidad,setCantidad})=>{
    
    const clickSumar=()=>{
        if (cantidad===stock){
            return;
        }
        setCantidad(cantidad +1);
        
    }
    const clickRestar=()=>{
        if(cantidad===1){
            return;
        }
        setCantidad(cantidad -1);
    }
    
    return(
    <div>
        {stock===0
        ?<div></div>
        :<div className="botones row">
        <div className="col-xxl-3 d-flex justify-content-end"><span className={`boton__sumarestar ${cantidad === 1 ? 'hiden' : 'show'}`} onClick={clickRestar}>-</span></div>
        <div className="col-xxl-6 d-flex justify-content-center cantidad__reloj align-items-center">Cantidad:{cantidad}</div>
        <div className="col-xxl-3 d-flex justify-content-start"><span className={`boton__sumarestar ${cantidad === stock ? 'hiden' : 'show'}`} onClick={clickSumar} >+</span></div>
        <div className="d-flex align-items-center justify-content-center  boton__carro">
            <button  onClick={()=>onAdd()} className="custom-btn btn-1">Agregar al Carro</button>
        </div>
        </div>
        }
        
        </div>
    )

};

export default ItemCount;