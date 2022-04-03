import React from "react";

const CartWidget=()=>{
    return(
        <div className="d-flex align-items-center">
            <i class="fas cart fa-cart-plus"></i>
            <h4 className="cart-number">.</h4>
        </div>
    );
}
export default CartWidget;
