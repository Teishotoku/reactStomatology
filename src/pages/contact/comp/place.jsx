import hor1 from "../style/img/hospHor1.png";
import hor2 from "../style/img/hospHor2.png";
import ver1 from "../style/img/hospVert1.png";
import ver2 from "../style/img/hospVert2.png";

const PlaceContact = () => {
    return (
        <section className="PlaceContact">

					<div className="headPlace">
						<h1>HOSPITALS</h1>
					</div>

					<div className="places">

						<div className="leftPlace">
							<div className="leftUpPlace">

								<div className="leftUpPlaceOne">
									<div className="vertHover">
										<p>Oregon mush street 39a</p>
										<button>SIGN</button>
									</div>
								</div>

								<div className="leftUpPlaceTwo">
									<div className="horHover">
										<p>Oregon mush street 39a</p>
										<button>SIGN</button>
									</div>
								</div>
							</div>
						
							<div className="leftDownPlace">
								<div className="leftDownPlaceOne">
									<div className="horHover">
										<p>Oregon mush street 39a</p>
										<button>SIGN</button>
									</div>
								</div>

								<div className="leftDownPlaceNoth">
									<div className="leftDownPlaceNothOne"/>
									<div className="leftDownPlaceNothTwo"/>
								</div>
							</div>

						</div>

						<div className="rightPlace">

							<div className="rightPlaceNoth">
								<div className="rightPlaceNothOne"/>
								<div className="rightPlaceNothTwo"/>
							</div>

							<div className="rightPlaceDown">
								<div className="vertHover">
										<p>Oregon mush street 39a</p>
										<button>SIGN</button>
								</div>
							</div>

						</div>
				
					</div>

				</section>
    );
}

export default PlaceContact;
