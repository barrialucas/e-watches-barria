import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { BsTrash } from "react-icons/bs";
import { useNavigate,Link} from "react-router-dom";


const Cart =()=>{

    const navigate = useNavigate()
    const navegacion = () => {
    navigate("/")
    }
    const { cart, cartTotal, cartEmpty, removeItem,cantProdCart} = useContext(CartContext)

    
    return(
        <div className="container my-5 card-body">
            <div className="card-body"> 
            <h2>Tu carrito (<span>{cantProdCart()}</span>)</h2>
            {
                cart.map((item) => (
                    <div key={item.id} className="card row d-flex flex-row p-3 my-4">
                        <img src={item.img} alt={item.model} className="col-xxl-3" />
                        <div className="col-xxl-3 d-flex justify-content-center align-items-center flex-column">
                            <h3>{item.brand.toUpperCase()}</h3>
                            <h5>{item.model.toUpperCase()}</h5>
                            <p>{item.desc}</p>
                        </div>
                        <div className="col-xxl-2 d-flex justify-content-center align-items-center"> 
                            <p>Cantidad: {item.cantidad}</p>
                        </div>
                        
                        <div className="col-xxl-3 d-flex justify-content-center align-items-center flex-column">
                            <p>Precio por unidad: ${item.price}</p>
                            <h5 className="precio__porunidades">Precio x{item.cantidad} unidades: ${item.price * item.cantidad}</h5>
                        </div>
                        <button className="col-xxl-1 boton borrar__producto" onClick={() => removeItem(item.id)}><BsTrash/></button>
                    </div>
                ))
            }
            
            {cart.length===0 
            ?<div className="carro__vacio">
                <h4  className="d-flex justify-content-center carro__vacio__texto">Su carrito esta vacio</h4>
                <div className="row boton__volver btn-volver2">
                    <div className="d-flex justify-content-center">
                        <button onClick={navegacion}><svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg><span>Volver para comprar</span></button>
                    </div>
                </div>
            </div>
            

            :<div className="d-flex justify-content-center flex-column">
                <h3 className="d-flex justify-content-end">Usted lleva {cantProdCart()} productos con un TOTAL: ${cartTotal()}</h3>
                <hr/>
                <div className="row">
                    <div className="col-xxl-6 d-flex justify-content-start">
                        <button className="btn btn-danger" onClick={cartEmpty}>Vaciar carrito</button>
                    </div>
                    <div className="col-xxl-6 d-flex justify-content-end">
                        <Link to="/checkOut" className="btn btn-success">Terminar mi compra</Link>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-xxl-6 d-flex justify-content-end">
                    </div>
                    <div className="col-xxl-6 d-flex justify-content-end">
                        <button className="btn__seguir" onClick={navegacion}>Ver más productos</button>
                    </div>
                </div>
            </div>
            }
            
            </div>
        </div>
    )
}


export default Cart;