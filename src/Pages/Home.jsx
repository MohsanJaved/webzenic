import About1 from "../Components/About/About1";
import Blog1 from "../Components/Blog/Blog1";
import ContactInfo1 from "../Components/ContactInfo/ContactInfo1";
import HeroBanner3 from "../Components/HeroBanner/HeroBanner3";
import Pricing1 from "../Components/Pricing/Pricing1";
import SuccessStories from "../Components/SuccessStories/SuccessStories";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import WhyChoose1 from "../Components/WhyChoose/WhyChoose1";

const Home = () => {
    return (
        <div>
            <HeroBanner3></HeroBanner3>
           
            <About1></About1>
            <SuccessStories></SuccessStories>
            <WhyChoose1></WhyChoose1>
            <Pricing1 CoulmnClass="pricing-section fix section-padding section-bg"></Pricing1>
            
            <Testimonial1></Testimonial1>
            <ContactInfo1></ContactInfo1>
            <Blog1></Blog1>
        </div>
    );
};

export default Home;