import { Link } from "react-router-dom";

const Services3 = () => {

    const chooseContent = [
        {img:'/assets/img/service/icon-1.png', title:'Website design and development', content:'Design tailored websites offering unique functionality to match business needs.'},
        {img:'/assets/img/service/icon-2.png', title:' Custom website development', content:'Design bespoke websites offering unique functionality to match business needs.'},
        {img:'/assets/img/service/icon-3.png', title:' E-commerce website development', content:'Build powerful online stores that drive sales, conversions, and customer satisfaction.'},
        {img:'/assets/img/service/icon-4.png', title:' Shopify website development', content:'Create scalable Shopify stores with seamless design and optimized performance.'},
        {img:'/assets/img/service/icon-5.png', title:' WordPress website development', content:'Lorem dolor amet consectetur read adipiscing any more elit.'},
        {img:'/assets/img/service/icon-6.png', title:'Better audiences', content:'Lorem dolor amet consectetur read adipiscing any more elit.'},
      ]; 

    return (
        <section className="service-section fix section-padding">
            <div className="container">
                <div className="row g-4">

                {chooseContent.map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-box-items mt-0">
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

export default Services3;
