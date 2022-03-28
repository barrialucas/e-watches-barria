import React from "react";
import ItemCount from "./ItemCount";

const onAdd = (cantidad) => {
    alert("Usted agregó "+ cantidad+ " producto al carrito")
}

const Item=({producto})=>{
    return(
        <div className="card cardd m-5 d-flex justify-content-center">
        <h3 className="card-title d-flex justify-content-center titulo__reloj">{producto.name}</h3>
        <img src={producto.img} className="card-img-top" alt={producto.name} data-bs-toggle="modal" data-bs-target="#myModal"/>
        <div className="card-body">              
            <h4 className="card-text d-flex justify-content-center">Precio: ${producto.price}</h4>
            <p>Stock: {producto.stock} </p>
            <div>
                <ItemCount stock={producto.stock} onAdd={onAdd}/>
            </div>           
        </div>
    </div>    
    )
    
}


export default Item;