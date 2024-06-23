import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MAIN } from "../main/page";

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
                    <a href="/">main</a>
                    <a>about</a>
                    <a>contact</a>
                    <a>pay</a>
                    <button>sign in</button>
                </div>

            </div>

        </header>
    )
}

export default HEADER;
