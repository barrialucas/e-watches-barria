import React from "react";
import {Link} from "react-router-dom";

const Item=({id,img,price,model,brand})=>{

    
    return(
        <div className="col-12 col-xxl-3 col-xl-4 col-lg-5 my-4 d-flex justify-content-center">
        <div className="card cardd d-flex justify-content-center" >
        <h3 className="card-title d-flex justify-content-center titulo__reloj">{brand.toUpperCase()}</h3>
        <Link to={`/detail/${id}`}><img src={img} className="card-img-top card__img" alt={brand}/></Link>
        <div className="card-body">
            <h4 className="d-flex justify-content-center modelo__reloj">{model}</h4>
            <hr></hr>
            <h4 className="card-text d-flex justify-content-center precio"><span className="precio__item">${price}</span></h4>         
        </div>
        </div>  
        </div>  
    )
    
}


export default Item;