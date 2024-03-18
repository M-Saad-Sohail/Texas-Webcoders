// // import React from 'react';
// // import { TbDeviceMobileCode } from "react-icons/tb";

// // const Services = () => {
// //     const boxes = [
// //         { logo: <TbDeviceMobileCode size={50} />, title: "Web Development", para: "Our custom web solutions are designed to offer highly attractive websites, with visuals and features designed to make your business processes simpler and efficient." },
// //         { logo: <TbDeviceMobileCode size={50} />, title: "App Development", para: "Baritechsol's app developers are expert in developing feature-rich apps for the desktop, mobile, and web environment, with highly intuitive and easily scalable design." },
// //         { logo: <TbDeviceMobileCode size={50} />, title: "LOGO DESIGN", para: "Baritechsol's app developers are expert in developing feature-rich apps for the desktop, mobile, and web environment, with highly intuitive and easily scalable design." },
// //         { logo: <TbDeviceMobileCode size={50} />, title: "LOGO DESIGN", para: "Baritechsol's app developers are expert in developing feature-rich apps for the desktop, mobile, and web environment, with highly intuitive and easily scalable design." },
// //     ];

// //     return (
// //         <>
// //             <h1 className='text-4xl font-bold text-center'>SERVICES</h1>
// //             <div className="flex justify-evenly items-center mt-8">
// //                 {boxes.map((elem, index) => (
// //                     <div key={index} className="flex flex-col justify-evenly rounded-xl px-4 border border-gray-400 w-64 h-64 relative overflow-hidden group hover:text-white hover:bg-[#0086dd]">
// //                         {elem.logo}
// //                         <h1 className='text-2xl font-bold text-gray-800 group-hover:text-white'>{elem.title}</h1>
// //                         <p className='text-sm text-gray-600 group-hover:text-white'>{elem.para}</p>
// //                     </div>
// //                 ))}
// //             </div>
// //         </>
// //     );
// // };

// // export default Services;

// // import React, { useState } from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import Img1 from '../Images/Logos2/logo-img-01.png';
// // import Img2 from '../Images/Logos2/logo-img-02.png';
// // import Img3 from '../Images/Logos2/logo-img-03.png';
// // import Img4 from '../Images/Logos2/logo-img-04.png';
// // import Img5 from '../Images/Logos2/logo-img-05.png';
// // import Img6 from '../Images/Logos2/logo-img-06.png';
// // import Img7 from '../Images/Logos2/logo-img-07.png';
// // import Img8 from '../Images/Logos2/logo-img-08.png';
// // import Img9 from '../Images/Logos2/logo-img-09.png';
// // import Img10 from '../Images/Logos2/logo-img-10.png';
// // import Img11 from '../Images/Logos2/logo-img-11.png';
// // import Img12 from '../Images/Logos2/logo-img-12.png';
// // import Img13 from '../Images/Logos2/logo-img-13.png';
// // import Img14 from '../Images/Logos2/logo-img-14.png';
// // import Img15 from '../Images/Logos2/logo-img-15.png';
// // import Img16 from '../Images/Logos2/logo-img-16.png';
// // import Img17 from '../Images/Logos2/logo-img-17.png';
// // import Img18 from '../Images/Logos2/logo-img-18.png';
// // // import shell from '../assets/images/logos/shell.svg';
// // // import total from '../assets/images/logos/total.svg'
// // const Services = () => {
// //     const [settings] = useState({
// //         dots: true,
// //         infinite: true,
// //         slidesToShow: 3,
// //         slidesToScroll: 1,
// //         autoplay: true,
// //         speed: 2000,
// //         autoplaySpeed: 2000,
// //         cssEase: 'linear',
// //     });
// //     const logos = [
// //         Img1,
// //         Img2,
// //         Img3,
// //         Img4,
// //         Img5,
// //         Img6,
// //         Img7,
// //         Img8,
// //         Img9,
// //         Img10,
// //         Img11,
// //         Img12,
// //         Img13,
// //         Img14,
// //         Img15,
// //         Img16,
// //         Img17,
// //         Img18,
// //     ];

// //     // Your component logic
// //     return (
// //         <div>
// //             <h2>Proudly Supported by</h2>
// //             <Slider {...settings}>
// //                 {logos.map((logo, index) => (
// //                     <div key={index} className="container">
// //                         <img src={logo} alt='logo' className="h-32 w-32" />
// //                     </div>
// //                 ))}
// //             </Slider>
// //         </div>
// //     );
// // };
// // export default Services;



// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Img1 from '../Images/Logos2/logo-img-01.png';
// import Img2 from '../Images/Logos2/logo-img-02.png';
// import Img3 from '../Images/Logos2/logo-img-03.png';
// import Img4 from '../Images/Logos2/logo-img-04.png';
// import Img5 from '../Images/Logos2/logo-img-05.png';
// import Img6 from '../Images/Logos2/logo-img-06.png';
// import Img7 from '../Images/Logos2/logo-img-07.png';
// import Img8 from '../Images/Logos2/logo-img-08.png';
// import Img9 from '../Images/Logos2/logo-img-09.png';
// import Img10 from '../Images/Logos2/logo-img-10.png';
// import Img11 from '../Images/Logos2/logo-img-11.png';
// import Img12 from '../Images/Logos2/logo-img-12.png';
// import Img13 from '../Images/Logos2/logo-img-13.png';
// import Img14 from '../Images/Logos2/logo-img-14.png';
// import Img15 from '../Images/Logos2/logo-img-15.png';
// import Img16 from '../Images/Logos2/logo-img-16.png';
// import Img17 from '../Images/Logos2/logo-img-17.png';
// import Img18 from '../Images/Logos2/logo-img-18.png';

// function Services() {
//     var settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         initialSlide: 0,
//         autoplay: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };
//     const logos = [
//         Img1,
//         Img2,
//         Img3,
//         Img4,
//         Img5,
//         Img6,
//         Img7,
//         Img8,
//         Img9,
//         Img10,
//         Img11,
//         Img12,
//         Img13,
//         Img14,
//         Img15,
//         Img16,
//         Img17,
//         Img18,
//     ];
//     return (
//         // <div className="slider-container">
//         <div className="max-w-full">
//             <Slider {...settings}>
//                 {logos.map((elem, index) => (
//                     <div key={index} className="container">
//                         <img src={elem} alt='logo' className="h-32 w-32" />
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// }

// export default Services;