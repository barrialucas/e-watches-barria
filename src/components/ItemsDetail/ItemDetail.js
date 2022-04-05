import {useContext,useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import {CartContext} from "../context/CartContext"
import ItemCount from "../Items/ItemCount";



const ItemDetail = ({id,img,brand,price,stock,model,desc}) => {
  
  const { addProduct, isInCart } = useContext(CartContext)

  const navigate = useNavigate()
  const navegacion = () => {
    navigate(-1)
  }

  const [cantidad, setCantidad]=useState(1)

  const onAdd = () => {
    const prodCarro={
        id,
        brand,
        model,
        img,
        price,
        cantidad,
        desc
    }

    addProduct(prodCarro)
  }

  return (
    <div className="container-fluid">
      <div className="row producto__detail">
        <div className="col-xxl-3"></div>
        <div className="col-xxl-3"><img className="card-img-top"src={img} alt={brand}/></div>
        <div className="col-xxl-3">
          <h2 className="d-flex justify-content-center ">{brand.toUpperCase()}</h2>
          <h4 className="d-flex justify-content-center ">{model}</h4>
          <p className="descripcion">{desc}</p>
          <p className="stock">Stock disponible: {stock}</p>
          <h5 className="d-flex justify-content-center precio">Precio: $ {price}</h5>

          { 
            !isInCart(id)
            ?<ItemCount stock={stock} onAdd={onAdd} cantidad={cantidad} setCantidad={setCantidad}></ItemCount>
            :<Link to="/cart" className="btn btn-success d-block my-3">Terminar mi compra</Link>
          }

        </div>
        
        <div className="col-xxl-3"></div>
        <hr/>
        
      </div>
      

      <div className="row boton__volver">
        <div className="d-flex justify-content-center">
          <button onClick={navegacion}><svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg><span>Volver</span></button>
        </div>
      </div>

    </div>
      
  );
};
export default ItemDetail;

/* { 
  !isInCart(id)
     ?<ItemCount stock={stock} onAdd={onAdd} cantidad={cantidad} setCantidad={setCantidad}></ItemCount>
     :<Link to="/cart" className="btn btn-success d-block my-3">Terminar mi compra</Link>
  }  */