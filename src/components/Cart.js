import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { BsTrash } from "react-icons/bs";


const Cart =()=>{
    const { cart, cartTotal, cartEmpty, removeItem,cantProdCart } = useContext(CartContext)

    
    return(
        <div className="container my-5 card-body">
            <div className="card-body"> 
            <h2>Tu carrito (<span>{cantProdCart()}</span>)</h2>
            {
                cart.map((item) => (
                    <div key={item.id} className="card row d-flex flex-row p-3 my-4">
                        <img src={item.img} className="col-xxl-3" />
                        <div className="col-xxl-3 d-flex justify-content-center align-items-center flex-column">
                            <h3>{item.brand.toUpperCase()}</h3>
                            <h5>{item.model.toUpperCase()}</h5>
                            <p>{item.desc}</p>
                        </div>
                        <p className="col-xxl-2 d-flex justify-content-center align-items-center">Cantidad: {item.cantidad}</p>
                        <div className="col-xxl-3 d-flex justify-content-center align-items-center flex-column">
                            <p>Precio por unidad: ${item.price}</p>
                            <h5 className="precio__porunidades">Precio x{item.cantidad} unidades: ${item.price * item.cantidad}</h5>
                        </div>
                        <button className="col-xxl-1 boton borrar__producto" onClick={() => removeItem(item.id)}><BsTrash/></button>
                    </div>
                ))
            }
            <div className="d-flex justify-content-center flex-column">
                <h3 className="d-flex justify-content-end">TOTAL: ${cartTotal()}</h3>
                <hr/>
                <div className="row">
                    <div className="col-xxl-6 d-flex justify-content-start">
                        <button className="btn btn-danger" onClick={cartEmpty}>Vaciar carrito</button>
                    </div>
                    <div className="col-xxl-6 d-flex justify-content-end">
                        <button className="btn btn-success">Seguir con la compra</button>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    )
}

//item sin stock no sumar, agregar condicional -clase 9

export default Cart;