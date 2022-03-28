import React from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";
import {relojesArr} from "./Modelos";

const ItemDetail = ({ productoSelecc}) => {
    
  return (
    <div className="modal " tabindex="-1" id="myModal">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">E-Watches</h5>
            <button type="button"className="btn-close"data-bs-dismiss="modal"aria-label="Close"></button>
          </div>
          <div className="modal-body">
              
            <div className="row">
                <div className="col-xxl-6"><img src={productoSelecc.img} className="card-img-top" /></div>
                <div className="col-xxl-6">
                    <div className="col-xxl-12 titulo__modal"><h3>{productoSelecc.name}</h3></div>
                    <div className="col-xxl-12 parrafo__modal"><p>{productoSelecc.desc}</p></div>
                    <div className="col-xxl-12 d-flex justify-content-around precio__modal"><p>Stock: {productoSelecc.stock}</p><h4>${productoSelecc.price}</h4></div>
                    <div className="col-xxl-12 d-flex justify-content-center"><ItemCount stock={productoSelecc.stock}/></div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
