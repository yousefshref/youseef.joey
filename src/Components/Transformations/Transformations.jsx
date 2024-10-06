import React, { useEffect } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Scrollbar } from 'swiper/modules';
import "swiper/css"


gsap.registerPlugin(ScrollTrigger)

const Transformations = () => {

    const transformatinos1 = [
        "https://i.pinimg.com/564x/36/1b/49/361b497b4384c63f308f12cd298fa9b7.jpg",
        "https://i.pinimg.com/564x/c2/e0/bc/c2e0bcce8fdd3dbb48f0632c6c72319f.jpg",
        "https://i.pinimg.com/564x/36/1b/49/361b497b4384c63f308f12cd298fa9b7.jpg",
        "https://i.pinimg.com/564x/c2/e0/bc/c2e0bcce8fdd3dbb48f0632c6c72319f.jpg",
    ]

    const transformatinos2 = [
        "https://i.pinimg.com/564x/36/1b/49/361b497b4384c63f308f12cd298fa9b7.jpg",
        "https://i.pinimg.com/564x/c2/e0/bc/c2e0bcce8fdd3dbb48f0632c6c72319f.jpg",
        "https://i.pinimg.com/564x/36/1b/49/361b497b4384c63f308f12cd298fa9b7.jpg",
        "https://i.pinimg.com/564x/c2/e0/bc/c2e0bcce8fdd3dbb48f0632c6c72319f.jpg",
    ]




    useEffect(() => {
        gsap.fromTo(`#text-transformations`, {
            opacity: 0,
            y: -100,
            filter: "blur(10px)",
        }, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.5,
            scrollTrigger: {
                trigger: `#text-transformations`,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: 1
            }
        })
    }, [])


    return (
        <div className='min-h-screen mt-20 p-4 flex flex-col gap-3'>
            <div className='flex flex-col'>
                <h3 className='text-center text-4xl font-bold text-red-500' id='text-transformations'>انظر للتحديات المختلفة</h3>
            </div>


            <Swiper modules={[Autoplay]} autoplay={{ delay: 1000 }} speed={1000} loop scrollbar={{ draggable: true }} slidesPerView={"auto"} className="mySwiper mt-10" spaceBetween={50}>
                {transformatinos1.map((url, index) => (
                    <SwiperSlide key={index} className='w-fit my-auto'>
                        <img
                            src={url}
                            alt={`Transformation ${index}`}
                            className="w-[500px] my-auto"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper dir='ltr' modules={[Autoplay]} autoplay={{ delay: 1000 }} speed={1500} loop scrollbar={{ draggable: true }} slidesPerView={"auto"} className="mySwiper mt-5" spaceBetween={50}>
                {transformatinos2.map((url, index) => (
                    <SwiperSlide key={index} className='w-fit my-auto'>
                        <img
                            src={url}
                            alt={`Transformation ${index}`}
                            className="w-[500px] my-auto"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Transformations
