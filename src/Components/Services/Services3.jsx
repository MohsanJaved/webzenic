import { Link } from "react-router-dom";

const Services3 = () => {

    const chooseContent = [
       [
  {
    img: '/assets/img/service/icon-1.png',
    title: 'WordPress Website Development',
    content: 'Design and develop responsive WordPress websites tailored to your business goals.',
  },
  {
    img: '/assets/img/service/icon-2.png',
    title: 'SEO Optimization',
    content: 'Improve your website’s visibility on search engines to drive organic traffic and growth.',
  },
  {
    img: '/assets/img/service/icon-3.png',
    title: 'Shopify Website Development',
    content: 'Build and optimize scalable Shopify stores with custom design and performance in mind.',
  },
  {
    img: '/assets/img/service/icon-4.png',
    title: 'Custom Website Development',
    content: 'Develop bespoke websites with unique functionality tailored to specific business needs.',
  },
  {
    img: '/assets/img/service/icon-5.png',
    title: 'Graphic Design',
    content: 'Create stunning visuals and brand assets that enhance your business identity.',
  },
  {
    img: '/assets/img/service/icon-6.png',
    title: 'Social Media Management',
    content: 'Manage and grow your social media presence with engaging content and strategies.',
  }
]

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
