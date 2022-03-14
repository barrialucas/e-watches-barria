import React from "react";
import CartWidget from "./CartWidget";


function CompNav(){
    return(
        <header>
        <nav className="navbar container-fluid">
            <div className="row container-fluid">
                <div className="col-xl-4 col-xxl-4 nav__izq d-flex justify-content-center align-items-end">
                    <a className="navbar-brand marca">E-Glasses</a>
                </div>

                <div className="col-xl-4 col-xxl-4 d-flex justify-content-center">
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item"><a className="nav-link">Productos</a></li>
                        <li className="nav-item"><a className="nav-link">Quienes somos?</a></li>
                        <li className="nav-item"><a className="nav-link">Contacto</a></li>
                    </ul>
                </div>

                <div className="col-xl-4 col-xxl-4 d-flex justify-content-end">
                        <CartWidget />
                </div>
            </div>
        </nav>
        </header>
    );
};

export default CompNav;