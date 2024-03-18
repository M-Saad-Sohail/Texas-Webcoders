import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../Styling/Packages.css';
import Tag_White from '../Images/packages-logo/tag-01.png';
import Tag_Black from '../Images/packages-logo/tag icon black color.png';

const Packages = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const tagImage = isDarkMode ? Tag_White : Tag_Black; // Use white tag image for dark mode

  const cards = [
    {
      id: "website",
      title: "Basic Website Package",
      price: 145,
      xprice: "$799",
      features: [
        "3 Stock Photos",
        "3 Banner Design",
        "1 Page Static Website",
        "1 jQuery Slider Banner",
        "FREE Google Friendly Sitemap",
        "48 to 72 hours TAT",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee"
      ]
    },
    {
      id: "e-commerce",
      title: "Basic Ecommerce Package",
      price: 149,
      xprice: "$1649",
      features: [
        "Customized Design",
        "Up-to 10 Products",
        "Content Management System (CMS)",
        "Mini Shopping Cart Integration",
        "Payment Module Integration",
        "Easy Product Search",
        "Dedicated designer & developer",
        "Unlimited Revisions",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee *",
      ]
    },
    {
      id: "logo design",
      title: "Basic Logo Package",
      price: 19.99,
      xprice: "$79.00",
      features: [
        "2 Logo Concepts",
        "By 1 Designer",
        "3 Rounds Of Revisions",
        "Online Purpose Files (JPG, PNG)",
        "No Master Ai File of Logo",
        "No Printing Purpose Files",
        "100% Ownership Rights",
        "Money Back Guarantee",
      ]
    },
    {
      id: "smm",
      title: "Startup Social Package",
      price: 399,
      xprice: "$1330",
      features: [
        "Social Media Posts",
        "Total Post 12/3post a week",
        "3 Reels Per Month",
        "4 Graphic Posts",
        "5 Carousel",
        "4 Stories+Highlights (Complimentary)",
        "Social Platforms Supported",
        "Facebook",
        "Instagram",
        "Social Ads Management",
        "Facebook and Instagram Ads",
        "Total 1 Campaign Per Month",
        "05 Adsets Per Month",
        "Social Media Management",
        "Account Setup/Optimisation (Cover Photo, About Section, Display Picture and more)",
        "Monthly Social Posts Scheduling",
        "Meta Business Manager Setup",
        "CRM Integration (Database Management)",
        "Cross-Platform Integration (Facebook, Whatsapp, Instagram, Pixels)",
        "Total Designated Team Members",
        "01 Dedicated Social Media Copywriter",
        "01 Dedicated Graphic Designer",
        "01 Dedicated Ads Expert",
        "01 Dedicated Account Manager",
      ]
    },
    {
      id: "seo",
      title: "Simple Start Package",
      price: 350,
      xprice: "$700",
      features: [
        "Website Audit",
        "Pages Optimized (10 pages)",
        "15 Selected Keywords Targeting",
        "Keyword Research",
        "Keyword Grouping",
        "Keyword Mapping",
        "On-Page Optimization",
        "SEO Road Map",
        "Webpage Copywriting (3 pages, 350 words per page)",
        "Title Tag Optimization (10 titles)",
        "Meta Description Optimization (10 meta description)",
        "Meta Keyword Optimization (10 meta keywords)",
        "Domain Redirect Optimization (10 domain redirects)",
        "xml Sitemap Optimization",
        "Robots.txt Check",
        "URL Rewrites (10 URL rewrites)",
        "Broken Link Report",
        "Rich Snippet Recommendations",
        "Breadcrumbs",
        "Initial Off-Page SEO",
        "Social Bookmarking",
        "Slide Share Marketing",
        "Forums/FAQ’s",
        "Link Building",
        "Directory Submission",
        "Local Business Listings",
      ]
    },
    {
      id: "content writing",
      title: "Web Content Basic",
      price: 129,
      xprice: "$258",
      features: [
        "1 Page Professional Copywriting Service",
        "Creative & Well-Written by 1 Professional Copywriter",
        "Industry Specified Expert Copywriter",
        "300 Words Per Page",
        "5 Revisions",
        "3 to 4 Business Days Rotation",
        "According To Your Exact Requirements",
        "Proofing by our in-house experts",
        "100% Ownership Rights",
        "100% Original Content",
        "100% Approval Assurance",
        "30 Days Refund Warranty",
        "Order Now",

      ]
    },
    {
      id: "branding",
      title: "Startup Collateral Package",
      price: 99,
      xprice: "$198",
      features: [
        "2 Stationery Design Set",
        "FREE Fax Template",
        "Print Ready Formaats",
        "UNLIMITED Revisions",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee *",
      ]
    },
    {
      id: "illustration",
      title: "Basic Illustrative Package",
      price: 294,
      xprice: "$588",
      features: [
        "3 Custom Logo Design Concepts",
        "By 2 Designers",
        "UNLIMITED Revisions",
        "48 to 72 hours TAT",
        "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee *",
      ]
    },
    {
      id: "video",
      title: "Startup Video Package",
      price: 499,
      xprice: "$1598",
      features: [
        "30 Second Video",
        "Professional Script",
        "Storyboard",
        "Animation",
        "Voice - Over & Sound Effects",
        "4 weeks Delivery",
        "Unlimited Revisions",
      ]
    },
    // {
    //     title: "Standard Website Package",
    //     price: 599,
    //     xprice: "$1299",
    //     features: [
    //         "8 Unique Pages Website",
    //         "CMS / Admin Panel Support",
    //         "8 Stock images",
    //         "5 Banner Designs",
    //         "1 jQuery Slider Banner",
    //         "FREE Google Friendly Sitemap",
    //         "Complete W3C Certified HTML",
    //         "48 to 72 hours TAT",
    //         "Complete Deployment",
    //         "100% Satisfaction Guarantee",
    //         "100% Unique Design Guarantee",
    //         "Money Back Guarantee*",
    //         "Mobile Responsive will be Additional $99",
    //     ]
    // },
    // {
    //     title: "Premium Website Package",
    //     price: 999,
    //     xprice: "$1899",
    //     features: [
    //         "Conceptual and Dynamic Website",
    //         "Mobile Responsive",
    //         "Online Reservation/Appointment Tool (Optional)",
    //         "Online Payment Integration (Optional)",
    //         "Custom FormsCustom Forms",
    //         "Lead Capturing Forms (Optional)",
    //         "Striking Hover Effects",
    //         "Newsletter Subscription (Optional)",
    //         "Newsfeed Integration",
    //         "Social Media Integration",
    //         "Facebook Page Design",
    //         "Twitter Page Design",
    //         "YouTube Page Design",
    //         "Search Engine Submission/li>",
    //         "5 Stock Photos",
    //         "3 Unique Banner Design",
    //         "1 jQuery Slider Banner",
    //         "Complete W3C Certified HTML",
    //         "48 to 72 hours TAT",
    //         "Complete Deployment",
    //         "100% Satisfaction Guarantee",
    //         "100% Unique Design Guarantee",
    //         "Money Back Guarantee*",
    //     ]
    // },
    // {
    //     title: "Custom WordPress Package",
    //     price: 1599,
    //     xprice: "$3099",
    //     features: [
    //         "Custom Made, Interactive, Dynamic & High End Design",
    //         "Mobile Responsive Design",
    //         "Custom WordPress CMS",
    //         "Content Management System (CMS)",
    //         "Online Appointment/Scheduling/Online Ordering Integration (Optional)",
    //         "Online Payment Integration (Optional)",
    //         "Multi Lingual (Optional)",
    //         "Custom Dynamic Forms (Optional)",
    //         "Signup Area (For Newsletters, Offers etc.)",
    //         "Website Search Bar",
    //         "1 jQuery Slider Banner",
    //         "Up to 10 Custom Made Banner Designs",
    //         "10 Stock Images",
    //         "Unlimited Revisions",
    //         "Special Hoover Effects",
    //         "Live Feeds of Social Networks integration (Optional)",
    //         "Facebook Page Design",
    //         "Twitter Page Design",
    //         "YouTube Page Design",
    //         "48 to 72 Hours Initial TAT",
    //         "FREE 3 Years Domain Name",
    //         "Free Google Friendly Sitemap",
    //         "Search Engine Submission",
    //         "Complete W3C Certified HTML",
    //         "Industry Specified Team of Expert Designers and Developers",
    //         "Complete Deployment",
    //         "Dedicated Accounts Manager",
    //         "100% Ownership Rights",
    //         "100% Satisfaction Guarantee",
    //         "100% Unique Design Guarantee",
    //         "Money Back Guarantee*",
    //     ]
    // },
    // {
    //     title: "Custom PHP Website Package",
    //     price: 2499,
    //     xprice: "$3199",
    //     features: [
    //         "15 to 20 Pages Website",
    //         "Custom Made, Interactive, Dynamic & High End Design",
    //         "Custom WP (or) Custom PHP Development",
    //         "1 jQuery Slider Banner",
    //         "Up to 10 Custom Made Banner Designs",
    //         "10 Stock Images",
    //         "Unlimited Revisions",
    //         "Special Hoover Effects",
    //         "Content Management System (CMS)",
    //         "Online Appointment/Scheduling/Online Ordering Integration (Optional)",
    //         "Online Payment Integration (Optional)",
    //         "Multi Lingual (Optional)",
    //         "Custom Dynamic Forms (Optional)",
    //         "Signup Area (For Newsletters, Offers etc.)",
    //         "Search Bar",
    //         "Live Feeds of Social Networks integration (Optional)",
    //         "Mobile Responsive",
    //         "FREE 5 Years Domain Name",
    //         "Free Google Friendly Sitemap",
    //         "Search Engine Submission",
    //         "Social Media Integration",
    //         "Industry Specified Team of Expert Designers and Developers",
    //         "Complete Deployment",
    //         "Dedicated Accounts Manager",
    //         "100% Ownership Rights",
    //         "100% Satisfaction Guarantee",
    //         "100% Unique Design Guarantee",
    //         "100% Money Back Guarantee *",
    //     ]
    // },
    // {
    //     title: "Custom Automated Website Portal",
    //     price: 4999,
    //     xprice: "$8999",
    //     features: [
    //         "Custom Made, Interactive, Dynamic & High End Design",
    //         "Mobile Responsive Design/li>",
    //         "Unique Pages and UI Design",
    //         "Custom Content Management System (CMS)",
    //         "Complete Custom Development",
    //         "Key features",
    //         "Process Automation Tools",
    //         "SAutomated Course Creation",
    //         "Video Conferencing",
    //         "Skills/Certification Tracking",
    //         "Mobile Learning",
    //         "Asynchronous Learning",
    //         "CRM Features",
    //         "Gamification (Optional)",
    //         "Social Learning/Message Boards",
    //         "Motivational Triggers",
    //         "Forums And Webinars",
    //         "E-commerce And Subscriptions",
    //         "Online Course Booking",
    //         "Excellent Reporting",
    //         "Invoicing Integration",
    //         "Financial Integrations",
    //         "Student Information Management",
    //         "Automated communications",
    //         "Learning Management System",
    //         "Quick And Easy Course Schedulinge",
    //         "Reporting And Data Analysis",
    //         "Assessment Management & Live Feedback",
    //         "Quick User Integration",
    //         "Separate login/signup page",
    //         "Easy Payment Methods",
    //         "Online Communities & Social Engagement",
    //         "Curation of Resources And Adding Own Resources",
    //         "Value Added Services",
    //         "Newsfeed Integration",
    //         "Social Media Plugins Integration",
    //         "Social Media Page Designs (Facebook, Twitter, Instagram)",
    //         "Upto 40 Stock images",
    //         "10 Unique Banner Designs",
    //         "JQuery Slider",
    //         "Free Google Friendly Sitemap",
    //         "Complete W3C Certified HTML",
    //         "Industry Specified Team of Expert Designers and Developers",
    //         "Dedicated Accounts Manager",
    //         "Complete Deployment",
    //         "100% Ownership Rights",
    //         "100% Satisfaction Guarantee",
    //         "100% Unique Design Guarantee",
    //         "Money Back Guarantee*",
    //     ]
    // },
  ];

  return (
    <>
      <h1 className='text-4xl font-bold text-center mt-10'>Packages Starting From</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 px-4 gap-5'>
        {cards.map((card, index) => (
          <div  id={card.id} key={index} className="flex flex-col justify-between w-full max-w-sm mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div>
              <div className='flex items-center justify-between'>
                <h5 className="mb-4 text-2xl font-medium dark:text-white">{card.title}</h5>
                <img src={tagImage} alt="Tag" /> {/* Using the selected tag image */}
              </div>
              <div className="flex items-baseline text-white bg-[#0081d5] rounded-lg px-2 py-1">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">{card.price}</span>
                <span className="ms-1 text-xl font-normal">/Only</span>
                <span className="ms-1 text-lg font-normal line-through pl-3">{card.xprice}</span>
              </div>
              <ul className="feature-list">
                {card.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle color='#0081d5' size={15} style={{ minWidth: 15 }} />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Order Now</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Packages;
