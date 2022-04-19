import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import {CartHistory} from "./CartHistory"

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
                <div className="col-xxl-3">
                    <CartHistory/>
                </div>
                    <div className="col-xxl-6 d-flex justify-content-center">
                        <ul className="navbar-nav d-flex flex-row">
                        
                        <Link to="/brand/bulova" className="link"><li className="nav-item"><span className="nav-link">Bulova</span></li></Link>
                        <Link to="/brand/movado" className="link"><li className="nav-item"><span className="nav-link">Movado</span></li></Link>
                        <Link to="/brand/tag heuer" className="link"><li className="nav-item"><span className="nav-link">Tag Heuer</span></li></Link>
                        <Link to="/brand/tissot" className="link"><li className="nav-item"><span className="nav-link">Tissot</span></li></Link>
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