import React from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";
import {relojesArr} from "./Modelos";

const ItemDetail = ({ name, price, stock, img }) => {
    
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
                <div className="col-xxl-6"><img src={img} className="card-img-top" /></div>
                <div className="col-xxl-6">
                    <div className="col-xxl-12 titulo__modal"><h3>{name}</h3></div>
                    <div className="col-xxl-12 parrafo__modal"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit, nobis neque sed placeat impedit, quae molestias, delectus dolore iste eum enim tempora! Molestias exercitationem voluptates consequuntur! Praesentium, omnis assumenda!</p></div>
                    <div className="col-xxl-12 d-flex justify-content-around precio__modal"><p>Stock: {stock}</p><h4>${price}</h4></div>
                    <div className="col-xxl-12 d-flex justify-content-center"><ItemCount stock={stock}/></div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
