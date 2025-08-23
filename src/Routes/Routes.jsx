import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home3";
import Main from "../Layout/Main";
import AboutPage from "../Pages/AboutPage";
import Home2 from "../Pages/Home2";
import Layout2 from "../Layout/Layout2";
import Home3 from "../Pages/Home3";
import TeamPage from "../Pages/TeamPage";
import TeamDetailsPage from "../Pages/TeamDetailsPage";
// import PricingPage from "../Pages/PricingPage";
import FaqPage from "../Pages/FaqPage";
import ContactPage from "../Pages/ContactPage";
import ServicesPage from "../Pages/ServicesPage";
import WebsiteDevelopment from "../Pages/WebsiteDevelopment";
import ContentMarketing from "../Pages/ContentMarketing";
 import GraphicDesignMarketing from "../Pages/GraphicDesignMarketing";
 import EmailMarketing from "../Pages/EmailMarketing";
 import PPC from "../Pages/PPC";
 import SEO from "../Pages/SEO";
 import ShopifyStoreDevelopment from "../Pages/ShopifyStoreDevelopment";
//  import GoogleMyBusinessOptimization from "../Pages/GoogleMyBussinessOptimization";




























import CaseStudyPage from "../Pages/CaseStudyPage";
import CaseStudyDetailsPage from "../Pages/CaseStudyDetailsPage";
import BlogRightSidebar from "../Pages/BlogRightSidebar";
import BlogPage from "../Pages/BlogPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout2></Layout2>,
    children: [
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/team",
        element: <TeamPage></TeamPage>,
      },
      {
        path: "/team/team-details",
        element: <TeamDetailsPage></TeamDetailsPage>,
      },
      // {
      //   path: "/pricing",
      //   element: <PricingPage></PricingPage>,
      // },
      {
        path: "/faq",
        element: <FaqPage></FaqPage>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/service",
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: "/service/website-development",
        element: <WebsiteDevelopment></WebsiteDevelopment>,
      },

 {
        path: "/service/Content-Marketing",
        element: <ContentMarketing></ContentMarketing>,
      },

 {
        path: "/service/Graphic-Design",
        element: <GraphicDesignMarketing></GraphicDesignMarketing>,
      },


 {
        path: "/service/Email-Marketing",
        element: <EmailMarketing></EmailMarketing>,
      },

//  {
//         path: "/service/Google-My-Business-Optimization",
//         element: <GoogleMyBusinessOptimization></GoogleMyBusinessOptimization>,
//       },

//  {
//         path: "/service/Landing-Page-Development",
//         element: <LandingPageDevelopment></LandingPageDevelopment>,
//       },


//  {
//         path: "/service/PPC",
//         element: <PPC></PPC>,
//       },

//  {
//         path: "/service/SEO",
//         element: <SEO></SEO>,
//       },


//  {
//         path: "/service/ShopifyStoreDevelopment",
//         element: <ShopifyStoreDevelopment></ShopifyStoreDevelopment>,
//       },
























      {
        path: "/project",
        element: <CaseStudyPage></CaseStudyPage>,
      },
      {
        path: "/project/project-details",
        element: <CaseStudyDetailsPage></CaseStudyDetailsPage>,
      },
      {
        path: "/blog-sidebar",
        element: <BlogRightSidebar></BlogRightSidebar>,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/blog/blog-details",
        element: <BlogDetailsPage></BlogDetailsPage>,
      },
    ],
  },
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  // {
  //   path: 'home2',
  //   element: <Main></Main>,
  //   children: [
  //     {
  //       index: true,
  //       element: <Home2></Home2>,
  //     },
  //   ],
  // },
  // {
  //   path: 'home3',
  //   element: <Layout2></Layout2>,
  //   children: [
  //     {
  //       index: true,
  //       element: <Home3></Home3>,
  //     },
  //   ],
  // },



]);