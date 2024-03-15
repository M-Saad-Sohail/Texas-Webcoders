// import React from "react";
// import styled, { keyframes, css } from "styled-components";

// function Logo() {
//   const row1 = [
//     "https://www.designcraftic.com/images/logo-img-01.png",
//     "https://www.designcraftic.com/images/logo-img-02.png",
//     "https://www.designcraftic.com/images/logo-img-03.png",
//     "https://www.designcraftic.com/images/logo-img-04.png",
//     "https://www.designcraftic.com/images/logo-img-05.png",
//     "https://www.designcraftic.com/images/logo-img-06.png",
//   ];

//   const row2 = [
//     "https://www.designcraftic.com/images/logo-img-07.png",
//     "https://www.designcraftic.com/images/logo-img-08.png",
//     "https://www.designcraftic.com/images/logo-img-09.png",
//     "https://www.designcraftic.com/images/logo-img-10.png",
//     "https://www.designcraftic.com/images/logo-img-11.png",
//     "https://www.designcraftic.com/images/logo-img-12.png",
//   ];

//   const row3 = [
//     "https://www.designcraftic.com/images/logo-img-13.png",
//     "https://www.designcraftic.com/images/logo-img-14.png",
//     "https://www.designcraftic.com/images/logo-img-15.png",
//     "https://www.designcraftic.com/images/logo-img-16.png",
//     "https://www.designcraftic.com/images/logo-img-17.png",
//     "https://www.designcraftic.com/images/logo-img-18.png",
//   ];

//   return (
//     <AppContainer>
//       <Wrapper>
//         <Marquee>
//           {row1.map((elem, index) => (
//             <ImageGroup key={index}>
//               <Image src={elem} />
//             </ImageGroup>
//           ))}
//           {row2.map((elem, index) => (
//             <ImageGroup key={index}>
//               <Image src={elem} />
//             </ImageGroup>
//           ))}
//           {row3.map((elem, index) => (
//             <ImageGroup key={index}>
//               <Image src={elem} />
//             </ImageGroup>
//           ))}
//         </Marquee>
//       </Wrapper>
//     </AppContainer>
//   );
// }

// export default Logo;

// const AppContainer = styled.div`
//   width: 100%;
//   height: 20vh;
//   color: #000000;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 100%;
//   height: fit-content;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;

// const Marquee = styled.div`
//   display: flex;
//   overflow: hidden;
//   width: 100%;
// `;

// const scrollX = keyframes`
//   0% {
//     transform: translateX(0%);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// `;

// const common = css`
//   flex-shrink: 0;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   white-space: nowrap;
//   animation: ${scrollX} 10s linear infinite;
// `;

// const ImageGroup = styled.div`
//   ${common}
//   width: 20vw; /* Adjust width as needed */
//   padding: 0 1rem; /* Adjust padding as needed */
// `;

// const Image = styled.img`
//   object-fit: contain;
//   max-width: 100%;
//   height: auto;
//   border-radius: 0.5rem;
//   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
// `;


// import React, { useEffect } from 'react';
// import Img1 from '../Images/Logos2/logo-img-01.png'
// import Img2 from '../Images/Logos2/logo-img-02.png'
// import Img3 from '../Images/Logos2/logo-img-03.png'
// import Img4 from '../Images/Logos2/logo-img-04.png'
// import Img5 from '../Images/Logos2/logo-img-05.png'
// import Img6 from '../Images/Logos2/logo-img-06.png'
// import Img7 from '../Images/Logos2/logo-img-07.png'
// import Img8 from '../Images/Logos2/logo-img-08.png'
// import Img9 from '../Images/Logos2/logo-img-09.png'
// import Img10 from '../Images/Logos2/logo-img-10.png'
// import Img11 from '../Images/Logos2/logo-img-11.png'
// import Img12 from '../Images/Logos2/logo-img-12.png'
// import Img13 from '../Images/Logos2/logo-img-13.png'
// import Img14 from '../Images/Logos2/logo-img-14.png'
// import Img15 from '../Images/Logos2/logo-img-15.png'
// import Img16 from '../Images/Logos2/logo-img-16.png'
// import Img17 from '../Images/Logos2/logo-img-17.png'
// import Img18 from '../Images/Logos2/logo-img-18.png'
// import '../Styling/Logo.css';

// const Logo = () => {

//   const logos = [
//     { logo: Img1 },
//     { logo: Img2 },
//     { logo: Img3 },
//     { logo: Img4 },
//     { logo: Img5 },
//     { logo: Img6 },
//     { logo: Img7 },
//     { logo: Img8 },
//     { logo: Img9 },
//     { logo: Img10 },
//     { logo: Img11 },
//     { logo: Img12 },
//     { logo: Img13 },
//     { logo: Img14 },
//     { logo: Img15 },
//     { logo: Img16 },
//     { logo: Img17 },
//     { logo: Img18 },
//   ];
//   useEffect(() => {
//     const scrollers = document.querySelectorAll(".scroller");

//     // If a user hasn't opted in for reduced motion, then we add the animation
//     if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       addAnimation();
//     }

//     function addAnimation() {
//       scrollers.forEach((scroller) => {
//         // add data-animated="true" to every `.scroller` on the page
//         scroller.setAttribute("data-animated", true);

//         // Make an array from the elements within `.scroller-inner`
//         const scrollerInner = scroller.querySelector(".scroller__inner");
//         const scrollerContent = Array.from(scrollerInner.children);

//         // For each item in the array, clone it
//         // add aria-hidden to it
//         // add it into the `.scroller-inner`
//         scrollerContent.forEach((item) => {
//           const duplicatedItem = item.cloneNode(true);
//           duplicatedItem.setAttribute("aria-hidden", true);
//           scrollerInner.appendChild(duplicatedItem);
//         });
//       });
//     }
//   }, []); // Empty dependency array to run only once on mount

//   return (
//     <div className='body'>
//       <div className="scroller" data-direction="left" data-speed="slow">
//         <div className="scroller__inner space-x-3">
//           {logos.map((elem, index) => (
//             <img key={index} src={elem.logo} className='w-52 h-16' />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Logo;
import React from 'react';
import '../Styling/Demo.css';
import Img1 from '../Images/Logos2/logo-img-01.png';
import Img2 from '../Images/Logos2/logo-img-02.png';
import Img3 from '../Images/Logos2/logo-img-03.png';
import Img4 from '../Images/Logos2/logo-img-04.png';
import Img5 from '../Images/Logos2/logo-img-05.png';
import Img6 from '../Images/Logos2/logo-img-06.png';
import Img7 from '../Images/Logos2/logo-img-07.png';
import Img8 from '../Images/Logos2/logo-img-08.png';
import Img9 from '../Images/Logos2/logo-img-09.png';
import Img10 from '../Images/Logos2/logo-img-10.png';
import Img11 from '../Images/Logos2/logo-img-11.png';
import Img12 from '../Images/Logos2/logo-img-12.png';
import Img13 from '../Images/Logos2/logo-img-13.png';
import Img14 from '../Images/Logos2/logo-img-14.png';
import Img15 from '../Images/Logos2/logo-img-15.png';
import Img16 from '../Images/Logos2/logo-img-16.png';
import Img17 from '../Images/Logos2/logo-img-17.png';
import Img18 from '../Images/Logos2/logo-img-18.png';

const Logo = () => {
  const logos = [
    { logo: Img1 },
    { logo: Img2 },
    { logo: Img3 },
    { logo: "https://yt3.googleusercontent.com/ytc/AIdro_kYSm84Jgd1kdrLEVP2NKQWyib0WqPjwOhfnATfFiM=s900-c-k-c0x00ffffff-no-rj" },
    { logo: Img4 },
    { logo: Img5 },
    { logo: Img6 },
    { logo: Img7 },
    { logo: Img8 },
    { logo: Img9 },
    { logo: Img10 },
    { logo: Img11 },
    { logo: Img12 },
    { logo: Img13 },
    { logo: Img14 },
    { logo: Img15 },
    { logo: Img16 },
    { logo: Img17 },
    { logo: Img18 },
  ];

  // Duplicate the logos array to make it infinite
  const infiniteLogos = [...logos, ...logos];

  return (
    <div className='body'>
      <div className="image-slider">
        <div className="image-slider-track space-x-4">
          {infiniteLogos.map((elem, index) => (
            <div key={index} className="slide border-l border-gray-600 rounded p-4">
              <img className='img' src={elem.logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Logo;



