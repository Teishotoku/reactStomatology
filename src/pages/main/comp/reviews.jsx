import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

import photo1 from "../style/img/man-slider1.jpg";
import photo2 from "../style/img/man-slider2.jpg";
import photo3 from "../style/img/man-slider3.jpg";
import photo4 from "../style/img/man-slider4.jpg";

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

					<div className="Slider">

     <Swiper
        direction={'vertical'}
				slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className="slide">
					<div className="infoSlide">
						<div className="upInfoSlide">
							<p>startist make my smile really white and beutiful</p>
						</div>

						<div className="downInfoSlide">
							<div className="ratingSlide"><p>5</p></div>
							<div className="nameSlide">
								<p>Jack R.</p>
								<div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
								</div>
						</div>

					</div>
					<div className="imgSlide"><img src={photo1} alt=""/></div>
				</div></SwiperSlide>

        <SwiperSlide><div className="slide">
					<div className="infoSlide">
						<div className="upInfoSlide">
							<p>Now it's not a shame to show your teeth in public</p>
						</div>

						<div className="downInfoSlide">
							<div className="ratingSlide"><p>5</p></div>
							<div className="nameSlide">
								<p>Nikolas F.</p>
								<div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
								</div>
						</div>

					</div>
					<div className="imgSlide"><img src={photo2} alt=""/></div>
				</div></SwiperSlide>

        <SwiperSlide><div className="slide">
					<div className="infoSlide">
						<div className="upInfoSlide">
							<p>The pain no longer haunts me during a snack</p>
						</div>

						<div className="downInfoSlide">
							<div className="ratingSlide"><p>5</p></div>
							<div className="nameSlide">
								<p>Steve L.</p>
								<div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
								</div>
						</div>

					</div>
					<div className="imgSlide"><img src={photo3} alt=""/></div>
				</div></SwiperSlide>

        <SwiperSlide><div className="slide">
					<div className="infoSlide">
						<div className="upInfoSlide">
							<p>The wisdom tooth has finally bee removed and doesn't bother me anymore</p>
						</div>

						<div className="downInfoSlide">
							<div className="ratingSlide"><p>5</p></div>
							<div className="nameSlide">
								<p>Klaine A.</p>
								<div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
								</div>
						</div>

					</div>
					<div className="imgSlide"><img src={photo4} alt=""/></div>
				</div></SwiperSlide>

      </Swiper>
			</div>

				</section>
    );

}

export default ReviewsMain;
