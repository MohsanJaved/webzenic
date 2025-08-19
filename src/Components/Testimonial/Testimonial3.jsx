import Slider from "react-slick";

const Testimonial3 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

    const testimonialContent = [
        {img:'/assets/img/testimonial/05.png', subtitle:'CEO, USA', title:'Michael Davis', content:' Working with this team was a great experience. They really listened to what we needed and helped us build a digital presence that works. We’ve seen more traffic and better engagement. Highly recommend them!'},
        {img:'/assets/img/testimonial/05.png', subtitle:'Marketing Director, USA', title:'Ryan', content:' I’ve worked with many digital agencies, but [Your Company Name] stands out for their creativity and attention to detail. They helped us create a digital strategy that truly resonated with our target audience. Thanks to their hard work, we’ve seen impressive growth in our online traffic and sales.'},
      ]; 

    return (
        <section className="testimonial-section-3 section-padding pt-0">
            <div className="overlay-shape">
                <img src="/assets/img/testimonial/overlay-shape.png" alt="img" />
            </div>
            <div className="overlay-shape-2">
                <img src="/assets/img/testimonial/overlay-shape-2.png" alt="img" />
            </div>
            <div className="left-shape">
                <img src="/assets/img/testimonial/left-shape.png" alt="img" />
            </div>
            <div className="right-shape">
                <img src="/assets/img/testimonial/right-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="testimonial-wrapper-3">
                    <div className="client-1">
                        <img src="/assets/img/testimonial/06.png" alt="img" />
                    </div>
                    <div className="client-2">
                        <img src="/assets/img/testimonial/07.png" alt="img" />
                    </div>
                    <div className="client-3">
                        <img src="/assets/img/testimonial/08.png" alt="img" />
                    </div>
                    <div className="client-4">
                        <img src="/assets/img/testimonial/09.png" alt="img" />
                    </div>
                    <div className="swiper testimonial-slider-2">
                        <div className="swiper-wrapper">
                            
                        <Slider {...settings}>
                        {testimonialContent.map((item, i) => (                            
                            <div key={i} className="swiper-slide">
                                <div className="testimonial-content">
                                    <div className="icon">
                                        <img src="/assets/img/testimonial/quote.png" alt="img" />
                                    </div>
                                    <p>
                                    {item.content}
                                    </p>
                                    <div className="client-info">
                                        <div className="client-img">
                                            <img src={item.img} alt="img" />
                                        </div>
                                        <div className="content">
                                            <h6>{item.title}</h6>
                                            <span>{item.subtitle}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                            </Slider>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial3;
