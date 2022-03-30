import React from "react";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";

const onAdd = (cantidad) => {
    alert("Usted agregó "+ cantidad+ " producto al carrito")
}

const Item=({id,name,img,stock,price,model,brand})=>{
    return(
        <div className="card cardd m-5 d-flex justify-content-center">
        <h3 className="card-title d-flex justify-content-center titulo__reloj">{brand.toUpperCase()}</h3>
        <h4 className="d-flex justify-content-center">{model}</h4>
        <Link to={`/detail/${id}`}><img src={img} className="card-img-top" alt={brand}/></Link>
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