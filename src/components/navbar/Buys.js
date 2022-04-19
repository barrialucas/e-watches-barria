import {Card,Col,Row} from "react-bootstrap"
import {useContext} from "react"
import {BuyContext} from "../cart/CheckOut"

export const Buys=()=>{
    const{orden,numeroOrden}=useContext(BuyContext)
    return(
        <div className="container d-flex justify-content-center">
        <Card style={{ width: '60rem' }} >
            <Row>
                <Col xxl={3}>{numeroOrden}</Col>
                <Col xxl={3}>{orden.cantidad}</Col>
                <Col xxl={3}><h1>total</h1></Col>
                <Col xxl={3}><h1>ver detalle</h1></Col>
            </Row>
        </Card>
        </div>
    )
}