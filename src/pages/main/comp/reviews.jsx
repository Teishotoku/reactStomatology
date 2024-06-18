const ReviewsMain = () => {
    return (
        <section className="ReviewsMain">

					<div className="Reviews">
						<div className="transcription">
							<h1>REVIEWS</h1>
							<p>1.374 positive</p>
						</div>

						<div className="rating">
							<div className="rate">
								<div className="rate-block">
									<p>4.6</p>			
									<div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
								</div>
							</div>

							<div className="rides">
								<div className="ride">
									<p>5</p>
									<div className="stroke"><span className="st1"/></div>
								</div>	

								<div className="ride">
									<p>4</p>
									<div className="stroke"><span className="st2"/></div>
								</div>	

								<div className="ride">
									<p>3</p>
									<div className="stroke"><span className="st3"/></div>
								</div>	

								<div className="ride">
									<p>2</p>
									<div className="stroke"><span className="st4"/></div>
								</div>	

								<div className="ride">
									<p>1</p>
									<div className="stroke"><span className="st5"/></div>
								</div>	

							</div>
						</div>

						<button>LEAVE A REVIEW</button>
					</div>

					<div className="Slider"></div>

				</section>
    );

}

export default ReviewsMain;
