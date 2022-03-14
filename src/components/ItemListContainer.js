import React from "react";

const ItemList=(props)=>{
    return(
        <div className="Fondo">
            <h2>Estado del sitio: {props.titulo}.</h2>
        </div>
    );
}

export default ItemList;