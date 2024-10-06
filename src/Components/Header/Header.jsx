import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './Header.css'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
    const [scrollY, setScrollY] = React.useState(0)
    const [width, setWidth] = React.useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        function handleScroll() {
            setScrollY(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const text1 = "صمم برنامجًا تدريبيًا مخصصًا لك لمساعدتك على تحقيق أهدافك."

    useEffect(() => {
        const tl = gsap.timeline()
        if (text1) {
            text1?.split(' ').map((t, i) => {
                tl.to(`#text-${i}`, {
                    opacity: 1,
                    marginBottom: '1px',
                    duration: 0.2,
                })
            })
        }
        tl.fromTo(`#btn-contact`, {
            opacity: 0,
            y: 30,
            duration: 1,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
        })

        tl.fromTo(`#images-container`, {
            opacity: 0,
            y: 30,
            duration: 1,
        }, {
            opacity: 0.9,
            y: 0,
            duration: 1,
        })

        tl.to('#header h1', {
            textShadow: '2px 2px 14px rgba(236,236,236,0.49)',
            duration: 1,
        })
    }, [])



    useEffect(() => {
        const images1 = document.querySelector('#images1');
        const images2 = document.querySelector('#images2');
        const images3 = document.querySelector('#images3');
        const images4 = document.querySelector('#images4');

        // ScrollTrigger animation for images1
        const scrollAnimation1 = gsap.to(images1, {
            scrollTop: images1.scrollHeight, // Scroll to the bottom of the div
            ease: 'none',
            scrollTrigger: {
                trigger: '#header',
                start: 'top 0%',
                end: 'bottom 0%',
                scrub: 3, // Smooth scrolling effect
            },
        });

        // ScrollTrigger animation for images2
        const scrollAnimation2 = gsap.to(images2, {
            scrollTop: images2.scrollHeight, // Scroll to the bottom of the div
            ease: 'none',
            scrollTrigger: {
                trigger: '#header',
                start: 'top 0%',
                end: 'bottom 0%',
                scrub: 3, // Smooth scrolling effect
            },
        });

        const scrollAnimation3 = gsap.to(images3, {
            scrollTop: images3.scrollHeight, // Scroll to the bottom of the div
            ease: 'none',
            scrollTrigger: {
                trigger: '#header',
                start: 'top 0%',
                end: 'bottom 0%',
                scrub: 2, // Smooth scrolling effect
            },
        });

        const scrollAnimation4 = gsap.to(images4, {
            scrollTop: images4.scrollHeight, // Scroll to the bottom of the div
            ease: 'none',
            scrollTrigger: {
                trigger: '#header',
                start: 'top 0%',
                end: 'bottom 0%',
                scrub: 4, // Smooth scrolling effect
            },
        });

        return () => {
            // Clean up both animations
            if (scrollAnimation1) scrollAnimation1.kill();
            if (scrollAnimation2) scrollAnimation2.kill();
            if (scrollAnimation3) scrollAnimation3.kill();
            if (scrollAnimation4) scrollAnimation3.kill();
        };
    }, []);

    return (
        <header id='header' className='relative flex flex-col justify-center items-center h-screen'>
            <div className='z-10 flex flex-col w-full max-w-[750px] text-center p-2'>
                <h1 style={{ lineHeight: 1.2 }} className='font-bold text-gray-400 lg:text-5xl md:text-4xl text-2xl text-center'>
                    {text1?.split(" ").map((word, index) => (
                        <p style={{ marginBottom: '-30px', display: 'inline-block' }} className='opacity-0 md"p-2 p-1' id={`text-${index}`} key={index}>{word} {" "}</p>
                    ))}
                </h1>
                <button id='btn-contact' className='p-3 px-5 md:text-base text-sm transition-all hover:bg-red-400 active:bg-red-500 text-white mt-10 bg-red-500 shadow-xl w-fit mx-auto'>تواصل معي</button>
            </div>


            <div id='images-container' className='absolute opacity-90 flex flex-row gap-5 justify-between p-3 bottom-0 left-0 w-full h-full'>
                <div id='images1' className='flex flex-col gap-3 max-h-full overflow-y-hidden'>
                    {Array.from({ length: window.innerWidth > 768 ? 3 : 6 }).map((_, i) => (
                        <img className='w-[200px] shadow-2xl' src="/images/image1.jpeg" alt="" key={i} />
                    ))}
                </div>
                <div id='images2' className='flex flex-col gap-3 max-h-full overflow-y-hidden'>
                    {Array.from({ length: 4 }).map((_, i) => (
                        <img className='w-[400px] shadow-2xl' src="/images/image1.jpeg" alt="" key={i} />
                    ))}
                </div>
                <div id='images3' className='md:flex hidden flex-col gap-3 max-h-full overflow-y-hidden'>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <img className='w-[270px] shadow-2xl' src="/images/image1.jpeg" alt="" key={i} />
                    ))}
                </div>
                <div id='images4' className='lg:flex hidden flex-col gap-3 max-h-full overflow-y-hidden'>
                    {Array.from({ length: 2 }).map((_, i) => (
                        <img className='w-[330px] shadow-2xl' src="/images/image1.jpeg" alt="" key={i} />
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header
