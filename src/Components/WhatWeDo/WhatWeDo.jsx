import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const WhatWeDo = () => {

    const heading = { 
        subtitle:"WHY services uS",
        title:'Your growth is our mission ',
        content:'let’s build your digital success together',  
      }

    const whyContent = [
        {img:'/assets/img/service/icon-1.png', title:'web development ', content:'Powerful web solutions combining creativity with technical expertise.'},
        {img:'/assets/img/service/icon-2.png', title:'SEO Analytics', content:'Increase rankings and traffic with proven SEO strategies.'},
        {img:'/assets/img/service/icon-3.png', title:'Social Media Marketing', content:'Build brand awareness and trust on leading platforms.'},
      ];  

    return (
        <section className="service-section fix section-padding">
            <div className="left-shape float-bob-y">
                <img src="/assets/img/service/left-shape.png" alt="img" />
            </div>
            <div className="right-shape">
                <img src="/assets/img/service/right-shape.png" alt="img" />
            </div>
            <div className="bg-shape">
                <img src="/assets/img/service/bg-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <div className="sub-title wow fadeInUp">
                            <span>{heading.subtitle}</span>
                        </div>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        {parse(heading.title)}
                        </h2>
                    </div>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                    {parse(heading.content)}
                    </p>
                </div>
                <div className="row">
                {whyContent.map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-box-items">
                            <div className="icon">
                                <img src={item.img} alt="img" />
                            </div>
                            <div className="content"> 
                                <h4><Link to="/service/service-details">{item.title}</Link></h4>
                                <p>{item.content}</p>
                                <Link to="/service/service-details" className="link-btn">Read More <i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    ))}


                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;