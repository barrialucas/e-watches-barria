import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar=()=>{
    return(
        <header>
        <nav className="navbar">
            <div className="row container-fluid">
                <div className="col-xxl-4"></div>
                <div className="col-xxl-4 d-flex justify-content-center">
                    <Link to="/" className="link"><span className="navbar-brand marca">E-Watches</span></Link>
                </div>
                <div className="col-xxl-4"></div>
            </div>
            
            <div className="row container-fluid">
                <div className="col-xxl-3"></div>
                    <div className="col-xxl-6 d-flex justify-content-center">
                        <ul className="navbar-nav d-flex flex-row">
                        
                        <Link to="/brand/casio" className="link"><li className="nav-item"><span className="nav-link">Casio</span></li></Link>
                        <Link to="/brand/citizen" className="link"><li className="nav-item"><span className="nav-link">Citizen</span></li></Link>
                        <Link to="/brand/edox" className="link"><li className="nav-item"><span className="nav-link">Edox</span></li></Link>
                        <Link to="/brand/swatch" className="link"><li className="nav-item"><span className="nav-link">Swatch</span></li></Link>
                        </ul>
                    </div>
                    <div className="col-xxl-3 d-flex justify-content-end">
                            <CartWidget/>
                    </div>
            </div>
        </nav>
        </header>
    )
}

export default Navbar;