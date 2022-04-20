import React from "react"
import { useContext,useState} from "react"
import { CartContext } from "../context/CartContext"
import {Link,Navigate} from "react-router-dom"
import {db} from "../../firebase/config"
import {collection, addDoc, Timestamp,doc,updateDoc, getDoc} from "firebase/firestore"
import { Modal, Button } from 'react-bootstrap';

export const CheckOut=()=>{
    const {cart,cartTotal,cantProdCart, cartEmpty} = useContext(CartContext);

    const [ordenId, setOrdenId]=useState(null)
    const [value, setValue]=useState({
        nombre:"",
        email:"",
        tel:""
    })

    const InputCambio=(e)=>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }
    const Submit=(e)=>{
        e.preventDefault()

        const orden={
            items:cart,
            total:cartTotal(),//
            comprador:{...value},
            fecha: Timestamp.fromDate(new Date()),
            cantidad:cantProdCart(),//
        }

        cart.forEach((item)=>{
            const docRef=doc(db, "productos", item.id)

            getDoc(docRef)
                .then((doc)=>{
                    updateDoc(docRef,{
                        stock: doc.data().stock -item.cantidad  
                    })
                })
            
        })
        const ordenRef=collection(db, "ordenes")
        addDoc(ordenRef, orden)
            .then((doc)=>{
                setOrdenId(doc.id)
                const numeroOrden=doc.id
                cartEmpty()
                console.log(numeroOrden)//
            }
        )

        
    }
    
    const [show, setShow] = useState(true);
    if(ordenId){
    const handleClose = () => setShow(false);
    return (
                <>
                <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header>
                        <Modal.Title>Orden exitosa!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex justify-content-center flex-column"><i className="fas fa-check-circle circle"></i>
                        <h4 className="d-flex justify-content-center porfavor">Porfavor guardar su número de orden:</h4>
                        <h5 className="d-flex justify-content-center orden__texto">{ordenId}</h5>
                    </Modal.Body>
                    <Modal.Footer>
                    <Link to="/"><Button variant="secondary" onClick={handleClose}>
                        Volver al inicio
                    </Button></Link>
                    </Modal.Footer>
                </Modal>
                </>
            );
        }

    if(cart.length===0){
        return <Navigate to="/"></Navigate>
    }

    return(
        <div className="container">
            <div className="finalizar__texto">
                <h2 className="d-flex justify-content-center">Finalizar mi compra</h2>
                <div className="row">
                    <div className="col-xxl-3"></div>
                    <div className="col-xxl-6"><p className="d-flex justify-content-center">Al rellenar todos los campos requeridos, se le enviara un mail, con la confirmación de la compra y los medios de pago para efectuar el mismo.</p></div>
                    <div className="col-xxl-3"></div>
                </div>
            </div>

            <form className="needs-validation" novalidate onSubmit={Submit}>
                <div className="row">
                <div className="col-xxl-3"></div>
                    <div className="form-floating mb-3 col-xxl-6">
                        <input type={"text"} className="form-control" id="validationCustom01" placeholder="name" required name="nombre" onChange={InputCambio} value={value.nombre}></input>
                        <label className="label__nombre form-label" for="validationCustom01">Nombre y Apellido *</label>
                    </div>
                    <div className="col-xxl-3"></div>
                </div>
                <div className="row">
                <div className="col-xxl-3"></div>
                    <div className="form-floating mb-3 col-xxl-6 ">
                        <input type={"tel"} className="form-control" id="validationDefault03" placeholder="name" required name="tel" onChange={InputCambio} value={value.tel}></input>
                        <label className="label__nombre">Telefono *</label>
                    </div>
                    <div className="col-xxl-3"></div>
                </div>
                <div className="row">
                <div className="col-xxl-3"></div>
                    <div className="form-floating mb-3 col-xxl-6">
                        <input type={"email"} className="form-control" placeholder="name" required name="email" onChange={InputCambio} value={value.email}></input>
                        <label className="label__nombre">Email *</label>
                    </div>
                    <div className="col-xxl-3"></div>
                </div>
            
                <div className=" d-flex justify-content-center"><h3 className="total">Total: ${cartTotal()} por {cantProdCart()} productos. </h3></div>

                <div className="row">
                <div className="col-xxl-4"></div>
                    <div className="col-xxl-4 d-flex justify-content-center boton__terminar">
                        <button type="submit" className="custom-btn btn-1">Terminar mi compra</button>
                    </div>
                <div className="col-xxl-4"></div>
                </div>
            </form>
        </div>
    )
}
