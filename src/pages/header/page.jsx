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
                    <p>main</p>
                    <p>about</p>
                    <p>contact</p>
                    <p>pay</p>
                    <button>sign in</button>
                </div>

            </div>
        </header>
    )
}

export default HEADER;