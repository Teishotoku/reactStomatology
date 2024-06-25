import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MAIN from "../main/page";
import ABOUT from "../about/page";
import CONTACT from "../contact/page";
import PAY from "../pay/page";
import REGISTER from "../register/page";


import './style/styling.scss';
import log from "./style/img/logo-black.png";

const HEADER = () => {
    return(
        <header>

            <div className="header-block">
                <div className="logo">
                    <img src={log} alt=''/>
                    <p>STARTIST</p>
                </div>

                <div className="pages">
                    <Link to="/">main</Link>
                    <Link to="/about">about</Link>
                    <Link to="/contact">contact</Link>
                    <Link to="/pay">pay</Link>
                    <Link to="/register" className="regBlock">sign in</Link>
                </div>

            </div>

        </header>
    )
}

export default HEADER;
