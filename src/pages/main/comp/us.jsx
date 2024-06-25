import React, {useState, useEffect } from 'react';
//icons
import heart from '../style/icon/heart.svg';
import hospital from '../style/icon/hospital.svg';
import pills from '../style/icon/pills.svg';
import clipboard from '../style/icon/clipboard.svg';

const UsMain = () => {
		const [offsetY, setOffsetY] = useState(0);
		const handleScroll = () => setOffsetY(window.pageYOffset);

		useEffect(() => {
			window.addEventListener("scroll", handleScroll);
			
			return () => window.removeEventListener("scroll", handleScroll);
		}, []);

    return (
        <section className="UsMain">

						<div id = "box1"/>
						<div id = "box2"/>
						<div id = "box3"/>

					<div id = "we-block">

						<h1 className="mainText blues">why us?</h1>

						<div className="blocks">

						<div className="block">
							<img src={heart} alt=""/>
							<h2>2.400</h2>
							<p>successful operations</p>
							<div/>
						</div>

						<div className="block">
							<img src={hospital} alt=""/>
							<h2>24/7</h2>
							<p>hospitals with personal</p>
							<div/>
						</div>

						<div className="block blockNone">
							<img src={pills} alt=""/>
							<h2>68</h2>
							<p>pills and preporats</p>
							<div/>
						</div>

						<div className="block blockNone">
							<img src={clipboard} alt=""/>
							<h2>17</h2>
							<p>professional medics in every clinic</p>
							<div/>
						</div>

						</div>

					</div>

				</section>
    );

}

export default UsMain;
