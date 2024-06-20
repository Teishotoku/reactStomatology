import pills from "../style/img/Pills-background.png";

const LinksMain = () => {
    return (
        <section className="LinksMain">
            <div className="centering">
							<img src={pills} alt=""/>		
							<div className="layer">
								<div className="upper">

									<div className="paragraph">
										<div className="round"><div className="inside"/></div>
										<p>500 <span>400</span> dollars of operation in this 5 days</p>
								  </div>

								</div>

								<div className="downer">
									<div className="downer-l">

										<div className="paragraph">
											<div className="round"><div className="inside"/></div>		
											<p>new our clinic implants from Germany</p>
										</div>

										<div className="paragraph">
											<div className="round"><div className="inside"/></div>		
											<p>Warranty and service <span>on 1 year</span></p>
										</div>

								</div>

									<div className="downer-r">
										<button>SIGN RIGHT NOW</button>
									</div>
								</div>

						  </div>
						</div>
        </section>
    );

}

export default LinksMain;
