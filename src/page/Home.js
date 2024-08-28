// Filename: Pages/Home.js
import logo1 from '../img/logo1.png';
import img1 from '../img/img1.jpeg';
import React from "react";

const Home = () => {
	return (
		<div className="page container">
			<div className="row my-4 gap-lg-0 gap-4 py-4">
				<div className="col-lg-6">
					<img src={logo1} className='img-fluid' />
					<div className='text-lg-start text-center'>
						<h1 className='fs-2 fw-bold'>“The Common Vendor”</h1>
						<p>a one-stop shop for onboarding with a new vendor or onboarding a new client.</p>
					</div>
				</div>
				<div className="col-lg-6  py-4 d-flex justify-content-center">
					<div className='img1-container position-relative'>
					<img src={img1} className="img-fluid shadow h-100" />
					</div>
					


				</div>
			</div>
		</div>
	);
};

export default Home;
