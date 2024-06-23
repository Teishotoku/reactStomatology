import diagrama from "../style/img/diagrama.png";

const DiagramaPay = () => {

    return (
        <section className="DiagramaPay">
					<div className="inputsPay">

						<div className="nothPay"/>

						<div className="headersPay">
							<h1>PAY YOUR</h1>
							<h2>SESSION</h2>
						</div>

						<div className="inputPay">
							<input placeholder="valute"/>
							<input placeholder="sum"/>
						</div>
						
						<button>PAY</button>

						<div className="nothPay"/>

					</div>

					<div className="roundPay">
						<div></div>
					</div>

				</section>
    );

}

export default DiagramaPay;
