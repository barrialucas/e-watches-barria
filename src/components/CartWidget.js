import React, { useState } from "react";
import ItemCount from "./ItemCount";

const onAdd=(cantidad)=>{
    console.log("click")
}

export default function CartWidget(){
    return(
        <div className="d-flex align-items-center">
            <i className="fas fa-shopping-bag cart"></i>
            <h4 className="cart-number"></h4>
        </div>
    );
}
