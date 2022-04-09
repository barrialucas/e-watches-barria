import React from "react";
import {Link} from "react-router-dom"
import { BsCartCheck } from "react-icons/bs";
import { useContext } from "react"
import { CartContext } from "../context/CartContext"


const CartWidget=()=>{
    const {cartCant,cart} = useContext(CartContext)
    return(
        
        <div className="d-flex align-items-center">

            {cart.length ===0 
            ?<></>
            :<div className="d-flex">
            <Link to="/Cart" className="cart d-flex align-items-center"> <BsCartCheck/> </Link>
            <h4 className="cart-number d-flex align-items-center">{cartCant()}</h4>
            </div>
            }
            
            
            
        </div>
    );
}
export default CartWidget;
