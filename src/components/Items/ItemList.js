import React from "react";
import Item from "./Item";

const ItemList=({listaRelojes})=>{
    
    return(
        <div className="container-fluid items__altura">
            <div className="row d-flex justify-content-center">
            {listaRelojes.map((producto)=> <Item {...producto}/>)}
            </div>
        </div>
    )
}

export default ItemList;
