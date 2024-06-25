
// --- STYLE --- 
import './style/desktop.scss';
import './style/pad.scss';
import './style/phone.scss';


const REGISTER = () => {
    return (
			<section className="REGISTER">

				<div className="nothReg"/>
				
				<p>REGISTRATION</p>

				<div className="twinInputsReg">
					<input placeholder="Username"/>
					<input placeholder="Email"/>
				</div>

				<div className="checkboxs">
					<div className="checkCont cont1">
						<input type="checkbox"/>
						<p>Remember me</p>
					</div>

					<div className="checkCont cont2">
						<input type="checkbox"/>
						<p>double authentication</p>
					</div>
				</div>
				
				<input className="inputPas" placeholder="password" type="password"></input>
				<input className="inputPas" placeholder="repeat password" type="password"></input>

				<button>Sign up</button>

			</section>
    );
}

export default REGISTER;
