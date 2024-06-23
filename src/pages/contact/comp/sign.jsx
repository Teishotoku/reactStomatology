import React, {useState} from "react";

const SignContact = () => {
	const[job, setJob] = useState();

    return (
        <section className="SignContact">
					<div className="begin">

						<p>LET'S BEGIN</p>

						<div className="inputsContact">
							<div className="lineInputs">
								<input placeholder="time"/>
								<input placeholder="place"/>
							</div>
							<input placeholder="email"/>
						</div>

						<div className="radioBox">
							<div className="box">
								<input type="radio" name="job" value="job" onChange={e=>setJob(e.target.value)}/>
								<p>job</p>
							</div>
							<div className="box">
								<input type="radio" name="job" value="client" onChange={e=>setJob(e.target.value)}/>
								<p>clients</p>
							</div>
						</div>
						
						<button>SIGN A SESSION</button>

					</div>

					<div className="skewedSign">
					<div className="seansSign">
						<div className="centerSign">
							<h1>SIGN ON</h1>
							<h2>OUR SEANS</h2>
						</div>
					</div>
			</div>
				</section>
    );
}

export default SignContact;
