import React from "react";

function CartWidget(){
    return(
        <div className="d-flex align-items-center">
            <i class="fas fa-shopping-bag cart"></i>
            <h4 className="cart-number">4</h4>
        </div>
    );
}
export default CartWidget;