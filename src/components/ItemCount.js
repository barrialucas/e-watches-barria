import React, {useState} from "react";
import ItemListContainer from "./ItemListContainer";

const ItemCount=({stock,initial,onAdd})=>{
    const [cantidad, setCantidad]=useState(initial)
    const clickSumar=()=>{
        if (cantidad===stock){
            return;
        }
        setCantidad(cantidad +1);
        
    }
    const clickRestar=()=>{
        if(cantidad===initial){
            return;
        }
        setCantidad(cantidad -1);
    }

    const addCart=()=>{
        onAdd(cantidad)
    }

    return(
        <div className="container-fluid">
            <div className="row productos">
                <div className="col-xxl-2"></div>
                <div className="col-xxl-8">
                    <div className="row">
                        <div className="col-xxl-5 card cardd">
                            <h3 class="card-title d-flex justify-content-center titulo__reloj"></h3>
                            <img src="" class="card-img-top" alt="casio1"/>
                            <div class="card-body">
                                
                                <h4 className="card-text d-flex justify-content-center">Precio: $ </h4>
                                <p>Stock: </p>
                                <div className="botones row">
                                    <div className="col-xxl-3 d-flex justify-content-end"><a className="boton__sumarestar" onClick={()=>clickRestar()}>-</a></div>
                                    <div className="col-xxl-6 d-flex justify-content-center cantidad__reloj align-items-center">Cantidad:{cantidad} </div>
                                    <div className="col-xxl-3 d-flex justify-content-start"><a className="boton__sumarestar" onClick={()=>clickSumar()}>+</a></div>
                                </div>
                                <div className="d-flex justify-content-center boton__carro">
                                    <button onClick={()=>addCart()} class="custom-btn btn-1">Agregar al Carrito</button>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xxl-2"></div>
                        <div className="col-xxl-5"></div>
                    </div>
                </div>
                <div className="col-xxl-2"></div>
            </div>
        </div>
    )
}

export default ItemCount;