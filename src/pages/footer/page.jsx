import "./style/style.scss";

import logo from "./style/img/logo-black.png";
import phone from "./style/icon/telephone.svg";
import mail from "./style/icon/mail.svg";
import facebook from "./style/icon/facebook.svg";
import instagram from "./style/icon/instagram.svg";
import telegram from "./style/icon/telegram.svg";
import house from "./style/icon/house.svg";

const FOOTER = () => {
    return(
        <footer>
					<div className="footer-block">
						<div className="leftBlock">
							<img src={phone}/>
							<p>34-234-982</p>
						</div>
						<hr/>
						<div className="leftBlock">
							<img src={mail}/>
							<p>starTist@gmail.com</p>
						</div>
			</div>

					<div className="footer-center">
						<img src={logo} alt=""/>	
						<p>STARTIST</p>
					</div>

					<div className="footer-block">
						<div className="footerSocial">
							<img src={instagram}/>
							<img src={facebook}/>
							<img src={telegram}/>
						</div>
						<hr/>
						<div className="footerAdress">
							<p>leak street 23b</p>
							<img src={house}/>
						</div>
					</div>

				</footer>
    );
}

export default FOOTER;
