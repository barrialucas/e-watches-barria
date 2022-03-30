import React from "react";
import Item from "./Item";

const ItemList=({listaRelojes})=>{
    return(
        <div className="d-flex justify-content-center">
            {listaRelojes.map((producto)=> <Item {...producto}/>)}
        </div>
    )
}

export default ItemList;
