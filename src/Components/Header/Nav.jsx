import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return ( 
    <ul className="cs_nav_list fw-medium">
     
       <li>
               <Link to="/">Home</Link>

      </li>
      {/* <li className="menu-item-has-children">
        <Link to="/">Home</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
              Home Version 1
              </Link>
            </li>
            <li>
              <Link to="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>
            <li>
              <Link to="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>            
          </ul>
        </DropDown>
      </li> */}
    

      <li className="menu-item-has-children">
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
          
            <li>
              <Link to="/service/website-development" onClick={() => setMobileToggle(false)}>
                Website Development
              </Link>
            </li>
             <li>
              <Link to="/service/content-marketing" onClick={() => setMobileToggle(false)}>
                Content Marketing
              </Link>
            </li>
             <li>
              <Link to="/service/graphic-design" onClick={() => setMobileToggle(false)}>
                Graphic Design
              </Link>
            </li>
             <li>
              <Link to="/service/video-marketing-production" onClick={() => setMobileToggle(false)}>
                Video Marketing & Production
              </Link>
            </li>
             <li>
              <Link to="/service/email-marketing" onClick={() => setMobileToggle(false)}>
                Email Marketing
              </Link>
            </li>
             <li>
              <Link to="/service/ppc" onClick={() => setMobileToggle(false)}>
                PPC
              </Link>
            </li>
             <li>
              <Link to="/service/website-development" onClick={() => setMobileToggle(false)}>
                Website Development
              </Link>
            </li>
          
             <li>
              <Link to="/service/seo" onClick={() => setMobileToggle(false)}>
                SEO
              </Link>
            </li>
             <li>
              <Link to="/service/wordpress-website-development" onClick={() => setMobileToggle(false)}>
                Wordpress Website Development
              </Link>
            </li>
             <li>
              <Link to="/service/shopify-store-development" onClick={() => setMobileToggle(false)}>
                Shopify Store Development
              </Link>
            </li>
              <li>
              <Link to="/service/landing-page-development" onClick={() => setMobileToggle(false)}>
                Landing page Development
              </Link>
            </li>
              <li>
              <Link to="/service/social-media-marketing" onClick={() => setMobileToggle(false)}>
                Social Media Marketing
              </Link>
            </li>
              <li>
              <Link to="/service/google-my-business-optimization" onClick={() => setMobileToggle(false)}>
                Google My Business Optimization
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link to="/project" onClick={() => setMobileToggle(false)}>
        Project
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/project" onClick={() => setMobileToggle(false)}>
              Project
              </Link>
            </li>          
            <li>
              <Link to="/project/project-details" onClick={() => setMobileToggle(false)}>
              Project Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> 
{/*       
      <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog With Sidebar
              </Link>
            </li>                         
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li> */}
        <li className="menu-item-has-children">
        <Link to="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
           
           
            <li>
              <Link to="/faq" onClick={() => setMobileToggle(false)}>
              Faq
              </Link>
            </li> 
            <li>
              <Link to="/contact" onClick={() => setMobileToggle(false)}>
              Contact
              </Link>
            </li>                         
          </ul>
        </DropDown>
      </li>  
    </ul>
  );
}
