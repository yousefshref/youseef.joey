import React, { useEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const About = () => {

    useEffect(() => {
        gsap.fromTo(`#text-about`, {
            opacity: 0,
            y: -100
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: `#text-about`,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: 1
            }
        })



        const images = document.querySelectorAll('#image')

        images.forEach(image => {
            gsap.fromTo(image, {
                filter: 'blur(10px) grayscale(100%)',
            }, {
                filter: 'blur(0px) grayscale(0%)',
                duration: 0.5,
                scrollTrigger: {
                    trigger: image,
                    start: 'top 100%',
                    end: 'bottom 70%',
                    scrub: 1
                }
            })
        })


    }, [])



    return (
        <div className='mt-28'>
            <h3 id='text-about' className='text-red-500 text-4xl font-bold text-center'>
                ماذا تعرف عني ؟
            </h3>

            <div className='mt-10 flex flex-col gap-4 w-full'>
                <div
                    className="flex no-scrollbar gap-5 overflow-x-scroll p-5 max-w-full w-full"
                >
                    <img
                        id='image'
                        className="w-[30vw]"
                        src="https://i.pinimg.com/564x/ae/f3/6d/aef36d77a991a888097558305d4925a3.jpg"
                        alt=""
                    />
                    <img
                        id='image'
                        className="min-w-[30vw]"
                        src="https://i.pinimg.com/564x/ed/8f/92/ed8f92e21d164b2c0979228740c164d4.jpg"
                        alt=""
                    />
                    <img
                        id='image'
                        className="min-w-[30vw]"
                        src="https://i.pinimg.com/564x/ae/f3/6d/aef36d77a991a888097558305d4925a3.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default About
