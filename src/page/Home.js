// Filename: Pages/Home.js
import logo1 from '../img/logo1.png';
import img1 from '../img/img1.jpeg';
import img2 from '../img/img2.png';
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
			<div className='row my-4 gap-lg-0 gap-4 py-4'>
				<div className='text-center my-4'>
					<h1 className='fs-1 fw-bold text-dark'>LET’S GET <span className='text-custom'>STARTED</span></h1>
				</div>
				<div className='d-flex justify-content-center gap-lg-4 gap-0 my-4 '>

					<button className="btn fw-bold p-4 mx-4 btn-lg col-lg-3 btn-custom rounded-pill">RETAILERS</button>
					<button className="btn fw-bold p-4 mx-4 btn-lg col-lg-3 btn-outline-custom rounded-pill">SUPLIERS</button>

				</div>
			</div>
			<div className='row my-4 gap-lg-0 gap-4 py-4'>
				<div className='col-lg-6'>
					<div className='img2-container position-relative'>
						<img src={img2} className="img-fluid" />
					</div>

				</div>
				<div className='col-lg-6 text-center text-lg-start'>
					<h1 className='fw-bold fs-1'>ABOUT <spna className='text-custom'>US</spna></h1>
					<p className='my-4 fs-5'>The restaurant/retailer and distributor relationship is critical and invaluable - once you’ve jumped over the hurdles to become a client. We believe there is a need and an opportunity to streamline the onboarding process.</p>
					<button className="btn fw-semi-bold my-4 btn-lg  btn-custom rounded-pill">LEARN MORE</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
