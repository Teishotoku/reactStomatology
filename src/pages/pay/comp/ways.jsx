import dollar from "../style/img/dollar.png";
import euro from "../style/img/euro.png";
import bitcoin from "../style/img/bitcoin.png";
import usdt from "../style/img/usdt.png";
import monero from "../style/img/monero.png";
import etherium from "../style/img/ethereum.png";

const WaysPay = () => {

    return (
        <section className="WaysPay">
					<div className="canPay">
						<h1>WAYS TO PAY</h1>

						<div className="hrPay">
							<hr className="hrWhite"/>
							<hr className="hrBlue"/>
						</div>

						<p>you can pay for it:</p>

						<div className="valutes">
							<div className="valuteStroke">
								<div className="rounder"/>
								<p>DOLLARS</p>
							</div>
							<div className="valuteStroke">
								<div className="rounder"/>
								<p>EURO</p>
							</div>
							<div className="valuteStroke">
								<div className="rounder"/>
								<p>USDT</p>
							</div>
							<div className="valuteStroke">
								<div className="rounder"/>
								<p>BITCOIN</p>
							</div>
							<div className="valuteStroke">
								<div className="rounder"/>
								<p>MONERO</p>
							</div>
							<div className="valuteStroke">
								<div className="rounder"/>
								<p>ETHERIUM</p>
							</div>

						</div>
					</div>

					<div className="skewedPay">
						<div className="blocksPay">

							<div className="LinePay">
								<div className="blockPay"><img src={dollar} alt=""/></div>
							</div>

							<div className="LinePay">
								<div className="blockPay"><img src={monero} alt=""/></div>
								<div className="blockPay"><img src={euro} alt=""/></div>
							</div>

							<div className="LinePay">
								<div className="blockPay"><img src={bitcoin} alt=""/></div>
								<div className="blockPay"><img src={usdt} alt=""/></div>
								<div className="blockPay"><img src={etherium} alt=""/></div>
							</div>

						</div>
					</div>

		</section>
    );

}

export default WaysPay;
