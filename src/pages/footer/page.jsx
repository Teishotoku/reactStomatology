import "./style/style.scss";
import logo from "./style/img/logo-black.png";

const FOOTER = () => {
    return(
        <footer>
					<div className="footer-left"></div>
					<div className="footer-center">
						<img src={logo} alt=""/>	
						<p>STARTIST</p>
					</div>
					<div className="footer-right"></div>
				</footer>
    );
}

export default FOOTER;
