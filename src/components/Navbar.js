import React from "react";
import CartWidget from "./CartWidget";


function Navbar(){
    return(
        <header>
        <nav className="navbar">
            <div className="row container-fluid">
                <div className="col-xxl-4"></div>
                <div className="col-xxl-4 d-flex justify-content-center">
                    <a className="navbar-brand marca">E-Watches</a>
                </div>
                <div className="col-xxl-4"></div>
            </div>
            
            <div className="row container-fluid">
                <div className="col-xxl-3"></div>
                    <div className="col-xxl-6 d-flex justify-content-center">
                        <ul className="navbar-nav d-flex flex-row">
                            <li className="nav-item"><a className="nav-link">Productos</a></li>
                            <li className="nav-item"><a className="nav-link">Quienes somos?</a></li>
                            <li className="nav-item"><a className="nav-link">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="col-xxl-3 d-flex justify-content-end">
                            <CartWidget />
                    </div>
            </div>
        </nav>
        </header>
    );
};

export default Navbar;