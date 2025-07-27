import Blog2 from "../Components/Blog/Blog2";
import CaseStudy3 from "../Components/CaseStudy/CaseStudy3";
import Counter2 from "../Components/Counter/Counter2";
import HeroBanner3 from "../Components/HeroBanner/HeroBanner3";
import Marquee2 from "../Components/Marquee/Marquee2";
import Marquee3 from "../Components/Marquee/Marquee3";
import Services2 from "../Components/Services/Services2";
import About2 from "../Components/About/About2";
import Blog1 from "../Components/Blog/Blog1";

import Team1 from "../Components/Team/Team1";
import Testimonial3 from "../Components/Testimonial/Testimonial3";
import WhyChoose2 from "../Components/WhyChoose/WhyChoose2";
import WhyChoose3 from "../Components/WhyChoose/WhyChoose3";
import Marquee1 from "../Components/Marquee/Marquee1";
import WhatWeDo from "../Components/WhatWeDo/WhatWeDo";
import CaseStudy1 from "../Components/CaseStudy/CaseStudy1";

const Home3 = () => {
    return (
        <div>
            <HeroBanner3></HeroBanner3>

            <Marquee2></Marquee2>


            <WhatWeDo></WhatWeDo>
            <CaseStudy1></CaseStudy1>


            {/* <Services2></Services2> */}
            <WhyChoose2></WhyChoose2>
            <div className="pt-50"></div>
           

            <CaseStudy3></CaseStudy3>
             <Marquee1></Marquee1>
            {/* <Team1></Team1> */}
                        <About2 addclass="about-section-2 fix section-padding pt-150"></About2>

            <Marquee3></Marquee3>
            <WhyChoose3></WhyChoose3>
            <Testimonial3></Testimonial3>
            <Counter2></Counter2>
            <Blog1></Blog1>
        </div>
    );
};

export default Home3;