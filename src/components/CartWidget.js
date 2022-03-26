import React from "react";
import ItemCount from "./ItemCount";

export default function CartWidget(){
    return(
        <div className="d-flex align-items-center">
            <i class="fas fa-shopping-bag cart"></i>
            <h4 className="cart-number"></h4>
        </div>
    );
}
