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
					<div className="skewedPay"></div>
		</section>
    );

}

export default WaysPay;
