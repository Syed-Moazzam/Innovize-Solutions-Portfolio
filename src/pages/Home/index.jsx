import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaArrowRight } from 'react-icons/fa';
import allImages from '../../constants/imagePath';
import { accomplishmentsArr, chooseUsArr, customAccordionArr, servicesArr } from '../../config/data';
import ServiceCard from '../../components/ServiceCard';
import ChooseUsCard from '../../components/ChooseUsCard';
import { Col, Row } from 'react-bootstrap';
import AccomplishmentCard from '../../components/AccomplishmentCard';
import CustomAccordion from '../../components/CustomAccordion';

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
                        <h1 className="display-4 fw-bold class-white mb-3">Our Top - <span style={{ color: '#AD30EE' }}>Notch Development Services</span></h1>
                        <h4 className="fw-bold lead mb-3 class-white text-uppercase">One Stop Solution</h4>
                        <div className="heading-line mb-1"></div>
                    </div>
                </div>

                <div className="container">
                    <Row className="justify-content-center mt-4 mb-4">
                        {servicesArr?.map((service, index) => {
                            return (
                                <Col lg={4} style={{ marginBottom: '1.8rem' }} key={index}>
                                    <ServiceCard icon={service?.icon} title={service?.title} description={service?.description} />
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </section>

            <section id="why-choose-us" className="why-choose-us">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <h4 className='fw-bold lead text-uppercase'>Why Choose Us?</h4>
                        <h1 className='display-4 fw-bold position-relative mb-3'>Choose Innovize Solutions: <br />Your Journey to Exceptional Results</h1>
                        <div className="heading-line"></div>
                        <div className='col-lg-6 contents-of-why-choose-us position-relative'>At Innovize Solutions, We go beyond what's expected to provide unmatched solutions. Our dedication to innovation, excellence, and ensuring client satisfaction distinguishes us. Opt for a joint venture where your ideas blend with our proficiency, leading to revolutionary digital solutions that set new standards. With a team committed to innovation, we guarantee that your projects surpass industry benchmarks. Whether it's advanced technology or tailored assistance, Innovize Solutions is your reliable ally in attaining digital triumph. Embark on a path where your dreams align with our drive to create remarkable digital encounters.</div>
                        <div className="col-lg-6">
                            <img src={allImages?.whyChooseUsImg} alt="" className='why-choose-us-right-image' />
                        </div>
                    </div>

                    <Row className='mt-5'>
                        {chooseUsArr?.map((item, index) => {
                            return (
                                <Col lg={4} style={{ marginBottom: '1.8rem' }} key={index}>
                                    <ChooseUsCard icon={item?.icon} title={item?.title} description={item?.description} />
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </section>

            <section id="accomplishments" className="accomplishments">
                <div className="container text-center">
                    <h4 className='fw-bold lead text-uppercase'>Our Accomplishments In Numbers</h4>
                    <h1 className='display-4 fw-bold position-relative mb-3'>By the Numbers, A Glimpse of Our Successful Journey <span style={{ color: '#AD30EE' }}>Through Completed Projects</span></h1>
                    <div className="heading-line"></div>
                    <p className='accomplishments-detail-paragraph'>Innovize Solutions takes immense pride in delivering innovative and high-quality mobile and web applications. Our portfolio displays the diverse range of projects we have completed for clients across various industries. Each project is a testament to our commitment to excellence, cutting-edge technology, and a passion for exceeding our clients' expectations. Our team of experienced developers, designers, and project managers brings expertise to every project.</p>

                    <Row>
                        {accomplishmentsArr?.map((accomplishment, index) => {
                            return (
                                <Col lg={4} style={{ marginBottom: '1.8rem' }} key={index}
                                >
                                    <AccomplishmentCard numberVal={accomplishment?.numberVal} title={accomplishment?.title} />
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </section>

            <section id="faq" className="faq">
                <div className="container">
                    <div className="row text-center">
                        <p className="fw-bold lead text-uppercase">Frequently Asked Questions, Get Knowledge Before Hand!</p>
                        <h1 className="display-3 fw-bold text-uppercase mb-3">Faq<span style={{ textTransform: 'lowercase' }}>s</span></h1>
                        <div className="heading-line"></div>
                    </div>
                    <Row className='mt-4'>
                        {customAccordionArr?.map((accordion, index) => {
                            return (
                                <Col lg={12} key={index}>
                                    <CustomAccordion header={accordion?.accordionHeader} body={accordion?.accordionBody} index={index} />
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;