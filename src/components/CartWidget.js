import React from "react";
import ItemCount from "react";



const CartWidget=()=>{
    return(
        <div className="d-flex align-items-center">
            <i className="fas fa-shopping-bag cart"></i>
            <h4 className="cart-number"></h4>
        </div>
    );
}
export default CartWidget;
