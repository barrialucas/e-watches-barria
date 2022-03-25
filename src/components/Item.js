import React,{useState} from "react";

const Item=({name, price,stock,img,initial})=>{

    const [cantidad, setCantidad]=useState(initial)
    const clickSumar=()=>{
        if (cantidad===stock){
            return;
        }
        setCantidad(cantidad +1)
        
    }
    const clickRestar=()=>{
        if(cantidad===0){
            return;
            console.log("salto");
        }
        setCantidad(cantidad -1);
    }
    
    return(
        
        <div className="card cardd m-5 d-flex justify-content-center">
        <h3 className="card-title d-flex justify-content-center titulo__reloj">{name}</h3>
        <img src={img} className="card-img-top" alt="casio1"/>
        <div className="card-body">              
            <h4 className="card-text d-flex justify-content-center">Precio: ${price}</h4>
            <p>Stock: {stock} </p>
            <div className="botones row">
                <div className="col-xxl-3 d-flex justify-content-end"><a href="asd"className="boton__sumarestar" onClick={()=>clickRestar()}>-</a></div>
                <div className="col-xxl-6 d-flex justify-content-center cantidad__reloj align-items-center">Cantidad:{cantidad}</div>
                <div className="col-xxl-3 d-flex justify-content-start"><a href="asd" className="boton__sumarestar" onClick={()=>clickSumar()}>+</a></div>
            </div>
            <div className="d-flex justify-content-center boton__carro">
                <button /* onClick={()=>addCart()} */ class="custom-btn btn-1">Mas información</button>
            </div>
                                
        </div>
    </div>    
    )
    
}

export default Item;