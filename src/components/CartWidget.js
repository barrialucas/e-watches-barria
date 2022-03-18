import React from "react";

export default function CartWidget(){
    return(
        <div className="d-flex align-items-center">
            <i class="fas fa-shopping-bag cart"></i>
            <h4 className="cart-number">4</h4>
        </div>
    );
}
