import React, {useState} from "react";
import casio1 from "../img/casio1.jpg"

const ItemListContainer=(props)=>{
    return(
        <div className="Fondo">
            <h2>Estado del sitio: {props.titulo}.</h2>
        </div>
    );
}


function ItemCount(){
    const [cantidad, setCantidad]=useState(0)
    const casio={
        name:"Casio A168wg Retro Vintage Gold",
        precio:200,
        img:casio1,
        stock:7,
    }
    const clickCantidad=(signo)=>{
        if(signo==="sumar"){
            if(cantidad==casio.stock){
                setCantidad=casio.stock
            }
            setCantidad(cantidad +1);
        }else if(signo==="restar"){
            if(cantidad===0){
                setCantidad=0
            }
            setCantidad(cantidad -1);
        }
    }

    
        
    return(
        <div className="container-fluid">
            <div className="row productos">
                <div className="col-xxl-2"></div>
                <div className="col-xxl-8">
                    <div className="row">
                        <div className="col-xxl-5 card cardd">
                            <h3 class="card-title d-flex justify-content-center titulo__reloj">{casio.name}</h3>
                            <img src={casio.img} class="card-img-top" alt="casio1"/>
                            <div class="card-body">
                                
                                <h4 class="card-text d-flex justify-content-center">Precio: ${casio.precio}  </h4>
                                <p>Stock: {casio.stock}</p>
                                <div className="botones row">
                                    <div className="col-xxl-3 d-flex justify-content-end"><a className="boton__sumarestar" onClick={()=>clickCantidad("restar")}>-</a></div>
                                    <div className="col-xxl-6 d-flex justify-content-center cantidad__reloj align-items-center">Cantidad: {cantidad}</div>
                                    <div className="col-xxl-3 d-flex justify-content-start"><a className="boton__sumarestar" onClick={()=>clickCantidad("sumar")}>+</a></div>
                                </div>
                                <div className="d-flex justify-content-center boton__carro">
                                    <button class="custom-btn btn-1">Agregar al Carrito</button>
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
