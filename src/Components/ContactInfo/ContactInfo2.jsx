
const ContactInfo2 = () => {
    return (
        <div>
            <section className="contact-info-section fix section-padding">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="contact-info-items text-center active">
                                <div className="icon">
                                    <i className="bi bi-geo-alt-fill"></i>
                                </div>
                                <div className="content">
                                    <h3>Our Address</h3>
                                    <p>
                                        lahore <br />54000
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="contact-info-items text-center">
                                <div className="icon">
                                    <i className="bi bi-envelope-fill"></i>
                                </div>
                                <div className="content">
                                    <h3><a href="mailto:info@example.com">infowebzenic@gmail.com</a></h3>
                                    <p>
                                      Email us anytime for any kind <br></br>of query.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="contact-info-items text-center">
                                <div className="icon">
                                    <i className="bi bi-telephone-fill"></i>
                                </div>
                                <div className="content">
                                    <h3>Hot:<a href="tel:+2086660112">+923184835783</a></h3>
                                    <p>
                                        Call us any kind suppor,we <br />
                                        will wait for it.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section-33 fix section-padding pt-0">
                <div className="container">
                    <div className="contact-wrapper-2">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6">
                                <div className="map-items">
                                    <div className="googpemap">
                                        <iframe
                                            src="https://www.google.com/maps?q=DHA%20Phase%203%2C%20Lahore%2C%20Punjab%2C%20Pakistan&output=embed"
                                            loading="lazy"
                                            width="600"
                                            height="450"
                                        ></iframe>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-content">
                                    <h2>Contact Webzenic Now – Let’s Talk About Your Next Project</h2>
                                    <p>
                                        At Webzenic, we believe every successful project starts with a conversation. Whether you need impactful digital marketing or a custom website, our UK experts deliver results.
                                        Tell us about your goals, challenges, and ideas — we’ll listen, understand, and provide solutions that deliver real results.

                                    </p>
                                    <form id="contact-form" className="contact-form-items">
                                        <div className="row g-4">
                                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                                <div className="form-clt">
                                                    <span>Your name*</span>
                                                    <input type="text" name="name" id="name" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                                <div className="form-clt">
                                                    <span>Your Email*</span>
                                                    <input type="text" name="email" id="email" placeholder="Your Email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                                                <div className="form-clt">
                                                    <span>Write Message*</span>
                                                    <textarea name="message" id="message" placeholder="Write Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                                                <button type="submit" className="theme-btn">
                                                    Send Message <i className="bi bi-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactInfo2;