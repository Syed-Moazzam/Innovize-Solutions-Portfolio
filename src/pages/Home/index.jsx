import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaArrowRight } from 'react-icons/fa';
import allImages from '../../constants/imagePath';
import { servicesArr } from '../../config/data';
import ServiceCard from '../../components/ServiceCard';

const Home = () => {
    return (
        <>
            <Header />
            <section id="home" className="intro-section">
                <div className="container">
                    <div className="row align-items-center text-white">
                        <div className="col-md-7 intros text-start">
                            <h1 className="display-2">
                                <span className='display-2-intro-first-heading text-uppercase'>Elevate your Digital Presence With Innovize Solutions</span>
                                <span className="display-2--intro">Forging Digital Pathways to a Limitless Tomorrow</span>
                                <span className="display-2--description lh-base">
                                    Innovize Solutions excels in crafting disruptive digital products and elevating brands through innovative online strategies. Renowned for exceptional user experiences.
                                </span>
                            </h1>
                            <button type="button" className="rounded-pill btn-rounded text-uppercase">Talk to Our Experts
                                <span><FaArrowRight /></span>
                            </button>
                        </div>
                        <div className="col-md-5 intros text-end">
                            <div className="video-box">
                                <img src={allImages.introSectionImg} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fillOpacity="1"
                        d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    </path>
                </svg>
            </section>

            <section id="campanies" className="campanies">
                <div className="container">
                    <div className="row text-center">
                        <h4 className="fw-bold lead mb-3 text-uppercase">Trusted By The Best</h4>
                        <div className="heading-line mb-5"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-2">
                            <div className="campanies__logo-box shadow-sm">
                                <img src={allImages.companyLogo1} alt="Campany 1 logo" title="Campany 1 Logo" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2">
                            <div className="campanies__logo-box shadow-sm">
                                <img src={allImages.companyLogo2} alt="Campany 2 logo" title="Campany 2 Logo" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2">
                            <div className="campanies__logo-box shadow-sm">
                                <img src={allImages.companyLogo3} alt="Campany 3 logo" title="Campany 3 Logo" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2">
                            <div className="campanies__logo-box shadow-sm">
                                <img src={allImages.companyLogo4} alt="Campany 4 logo" title="Campany 4 Logo" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2">
                            <div className="campanies__logo-box shadow-sm">
                                <img src={allImages.companyLogo5} alt="Campany 5 logo" title="Campany 5 Logo" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2">
                            <div className="campanies__logo-box shadow-sm">
                                <img src={allImages.companyLogo6} alt="Campany 6 logo" title="Campany 6 Logo" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="services">
                <div className="container">
                    <div className="row text-center">
                        <h1 className="display-3 fw-bold class-white">Our Top - <span style={{ color: '#AD30EE' }}>Notch Development Services</span></h1>
                        <h4 className="fw-bold lead mb-3 class-white text-uppercase">One Stop Solution</h4>
                        <div className="heading-line mb-1"></div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center gap-4 mt-4 mb-4">
                        {servicesArr?.map((service) => {
                            return <ServiceCard img={service?.serviceImg} title={service?.serviceTitle} description={service?.serviceDescription} size="5" />
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;