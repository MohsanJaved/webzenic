 import { useEffect, useRef, useState } from "react";

const Faq1 = ({addclass}) => {

    const faqContent = [
        {title:' Why should I choose you over other agencies?', content:'Because we deliver measurable results—like 200% more traffic or 40% lower ad costs—with transparent reporting, custom strategies, and a dedicated team. No empty promises. Let’s prove it with a free 30-minute audit.'},
        {title:' What is the starting price of your services?', content:'Our services start at just £99. This allows you to test our work, and once you’re satisfied with the results, we can build a long-term partnership.'},
        {title:' What makes your agency different from others?', content:'We focus on ROI-driven strategies, not vanity metrics. For example, we helped Chandler Cosmetic increase revenue by 150% in 6 months through targeted campaigns. Additionally, you,ll have a dedicated account manager - not a junior team.'},
        {title:' Who will actually work on my account?', content:' You,ll have a senior strategist leading your account, supported by our in-house experts in SEO, PPC, and design.'},
      ]; 

      const accordionContentRef = useRef(null);
      const [openItemIndex, setOpenItemIndex] = useState(-1);
      const [firstItemOpen, setFirstItemOpen] = useState(true);
    
      const handleItemClick = index => {
        if (index === openItemIndex) {
          setOpenItemIndex(-1);
        } else {
          setOpenItemIndex(index);
        }
      };
      useEffect(() => {
        if (firstItemOpen) {
          setOpenItemIndex(0);
          setFirstItemOpen(false);
        }
      }, [firstItemOpen]);

    return (
        <section className={addclass}>
            <div className="faq-overlay">
                <img src="/assets/img/faq-overlay.png" alt="img" />
            </div>
            <div className="faq-shape">
                <img src="/assets/img/faq-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="faq-wrapper">
                    <div className="row g-4 justify-content-between">
                        <div className="col-xl-5 col-lg-6">
                            <div className="faq-content">
                                <div className="section-title">
                                    <div className="sub-title bg-color-2 wow fadeInUp">
                                        <span>FAQs</span>
                                    </div>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Let’s make something awesome together
                                    </h2>
                                </div>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
                                    We are not just another agency - we are your digital growth partners. With
                                    years of industry experience and a passion for innovation, our team is
                                    dedicated to delivering measurable results propel your business forward.
                                </p>
                                <ul className="faq-list">
                                    <li className="wow fadeInUp" data-wow-delay=".3s">
                                    <i className="bi bi-check-circle"></i>
                                        Top quality service
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay=".5s">
                                    <i className="bi bi-check-circle"></i>
                                        Intermodal Shipping
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-accordion-items">
                                <div className="faq-accordion">
                                    <div className="accordion" id="accordion">
                                    {faqContent.map((item, index) => (
                                        <div key={index} className={`accordion-item mb-3 ${index === openItemIndex ? "active" : "" }`}  data-wow-delay=".3s">
                                            <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                {item.title}
                                                </button>
                                            </h5>
                                            <div ref={accordionContentRef} id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                <div className="accordion-body">
                                                {item.content}
                                                </div>
                                            </div>
                                        </div>
                                         ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq1;
