import React, { useEffect } from 'react';
import { TbDeviceMobileCode } from 'react-icons/tb';
import '../Styling/Slider.css';
import Logo1 from '../Images/service-logos/1.png'
import Logo2 from '../Images/service-logos/2.png'
import Logo3 from '../Images/service-logos/3.png'
import Logo4 from '../Images/service-logos/4.png'
import Logo5 from '../Images/service-logos/5.png'
import Logo6 from '../Images/service-logos/6.png'
import Img1 from '../Images/service-img/service-img-01.png'
import Img2 from '../Images/service-img/service-img-02.png'
import Img3 from '../Images/service-img/service-img-03.png'
import Img4 from '../Images/service-img/service-img-04.png'
import Img5 from '../Images/service-img/service-img-05.png'
import Img6 from '../Images/service-img/service-img-06.png'

const Slider = () => {
    const boxes = [
        { logo: Logo1, img: Img1, title: "Social Media Marketing ", },
        { logo: Logo2, img: Img2, title: "Web Design & Development", },
        { logo: Logo3, img: Img3, title: "Mobile App Design & Development", },
        { logo: Logo4, img: Img4, title: "Logo & Graphic Design ", },
        { logo: Logo5, img: Img5, title: "Corparate Branding ", },
        { logo: Logo6, img: Img6, title: "Video Animation & Production", },
    ];
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

        // If a user hasn't opted in for reduced motion, then we add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach((scroller) => {
                // add data-animated="true" to every `.scroller` on the page
                scroller.setAttribute("data-animated", true);

                // Make an array from the elements within `.scroller-inner`
                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                // For each item in the array, clone it
                // add aria-hidden to it
                // add it into the `.scroller-inner`
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []); // Empty dependency array to run only once on mount

    return (
        <div className='body'>
            <h1 className='text-4xl font-bold text-center text-white bg-[#0070b8] px-4 py-2 rounded-xl'>Our Services</h1>
            <div className="scroller" data-direction="left" data-speed="slow">
                <div className="scroller__inner">
                    {boxes.map((elem, index) => (
                        <div key={index} class="relative bg-black">
                            <img src={elem.img} alt="" className='w-[33rem] h-72' />
                            <div class="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full">
                                <img src={elem.logo} alt="" />
                                <h1 class="text-white font-semibold text-3xl">{elem.title}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slider;
