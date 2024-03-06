import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark menu shadow sticky-top">
            <div className="container">
                <a className="navbar-brand" href="">
                    <p style={{ marginBottom: '0px' }}><span>Innovize </span>Solutions</p>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" style={{ margin: 'auto' }}>
                        <li className="nav-item"><a className="nav-link active text-uppercase" aria-current="page" href="index.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link text-uppercase" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link text-uppercase" href="#testimonials">Solutions</a></li>
                        <li className="nav-item"><a className="nav-link text-uppercase" href="#faq">Technologies</a></li>
                        <li className="nav-item"><a className="nav-link text-uppercase" href="#portfolio">Insights</a></li>
                    </ul>
                    <button type="button" className="rounded-pill btn-rounded" style={{ padding: '8px 60px 8px 8px' }}>
                        +1 728365413
                        <span style={{ width: '2rem', height: '2rem' }}>
                            <FaPhoneAlt />
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header;