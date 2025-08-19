 import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";

const WhyChoose3 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="about-section-2 fix section-padding bg-cover" data-background="/assets/img/team/team-bg.jpg" >
            <div className="bg-shape">
                <img src="/assets/img/about/bg-shape-2.png" alt="img" />
            </div>
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image-2 wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                <img src="/assets/img/choose-us.png" alt="img" className="w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <div className="sub-title bg-color-2 wow fadeInUp">
                                        <span>Your vision our mission</span>
                                    </div>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                     Let’s bring your vision to life.
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    Whether you’re a startup ready to launch or an established company looking to grow, Webzenic has the tools, skills, and strategies to make it happen.
                                    Call us today or fill out our contact form to book your free strategy consultation. Let’s discuss how we can take your business to the next level.

                                </p>
                                <div className="icon-items-area">
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                                        <div className="content mt-0">
                                            <h3>Performance Insights</h3>
                                            <p>Turn data into decisions with clear, actionable analytics. </p>
                                        </div>
                                    </div>
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                                        <div className="content mt-0">
                                            <h3>Secure Data Solutions</h3>
                                            <p>Protect what matters with reliable, end-to-end data security. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                                    <Link to="/about"> <span className="theme-btn">EXPLORE MORE </span><span className="arrow-btn"> <i className="bi bi-arrow-up-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default WhyChoose3;
