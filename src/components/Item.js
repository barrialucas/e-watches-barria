import React,{useState} from "react";
import ItemCount from "./ItemCount";

const onAdd = (cantidad) => {
    alert("Usted agregó " + cantidad + " productos al carrito");
    }

const Item=({name, price,stock,img,id})=>{
    return(
        <div className="card cardd m-5 d-flex justify-content-center">
        <h3 className="card-title d-flex justify-content-center titulo__reloj">{name}</h3>
        <img src={img} className="card-img-top" alt="casio1" data-bs-toggle="modal" data-bs-target="#myModal"/>
        <div className="card-body">              
            <h4 className="card-text d-flex justify-content-center">Precio: ${price}</h4>
            <p>Stock: {stock} </p>
            <div>
                <ItemCount stock={stock} onAdd={onAdd}/>
            </div>           
        </div>
    </div>    
    )
    
}


export default Item;