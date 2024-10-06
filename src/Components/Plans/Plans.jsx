import React, { useEffect } from 'react'


import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


const Plans = () => {

    const plans = [
        {
            title: 'خطة 1',
            price: '1000 EGP',
            duration: "3 شهور",
            features: [
                {
                    title: "اسم الميزة",
                    exist: true
                },
                {
                    title: "اسم الميزة",
                    exist: true
                },
                {
                    title: "اسم الميزة",
                    exist: false
                },
                {
                    title: "اسم الميزة",
                    exist: true
                },
                {
                    title: "اسم الميزة",
                    exist: true
                },
                {
                    title: "اسم الميزة",
                    exist: false
                },
                {
                    title: "اسم الميزة",
                    exist: false
                },
            ],
        },
        {
            title: 'خطة 2',
            price: '2500 EGP',
            duration: "3 شهور",
            features: [
                {
                    title: "اسم الميزة",
                    exist: true
                },
                {
                    title: "اسم الميزة",
                    exist: true
                },
                {
                    title: "اسم الميزة",
                    exist: true
                },
                {
                    title: "اسم الميزة",
                    exist: true
                },
                {
                    title: "اسم الميزة",
                    exist: false
                },
                {
                    title: "اسم الميزة",
                    exist: false
                },
                {
                    title: "اسم الميزة",
                    exist: true
                },
            ],
        },
        {
            title: 'خطة 3',
            price: '3000 EGP',
            duration: "3 شهور",
            features: [
                {
                    title: "اسم الميزة",
                    exist: true
                },
                {
                    title: "اسم الميزة",
                    exist: true
                },
                {
                    title: "اسم الميزة",
                    exist: true
                },
                {
                    title: "اسم الميزة",
                    exist: true
                },
                {
                    title: "اسم الميزة",
                    exist: true
                },
                {
                    title: "اسم الميزة",
                    exist: false
                },
                {
                    title: "اسم الميزة",
                    exist: false
                },
            ],
        }
    ]


    useEffect(() => {
        gsap.fromTo(`#text-plans`, {
            filter: 'blur(15px)',
        }, {
            filter: 'blur(0px)',
            duration: 0.5,
            scrollTrigger: {
                trigger: `#text-plans`,
                start: 'top 80%',
                end: 'bottom 40%',
                scrub: 1
            }
        })
    }, [])

    return (
        <div className='mt-20 min-h-screen flex flex-col'>
            <h3 id='text-plans' style={{
                textShadow: "-1px -1px 12px rgba(77,248,229,0.1)"
            }} className='text-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-green-500'>اختر ما يناسبك في تغيير حياتك</h3>

            <div className='mt-10 flex flex-col gap-5'>
                <div className='flex flex-row gap-4 p-5'>
                    {plans?.map((p, i) => (
                        <div key={i} className={`flex flex-col gap-10 mx-2 w-1/3 p-4 border ${i == 1 && "scale-110"}`}>
                            <div className='flex gap-3 justify-between items-end'>
                                <strong className='text-3xl'>{p?.title}</strong>
                                <div className='flex gap-2 items-end'>
                                    <p className='text-2xl font-bold bg-clip-text from-yellow-500 via-yellow-300 to-yellow-400 bg-gradient-to-tr text-transparent'>{p?.price}</p> / <small>{p?.duration}</small>
                                </div>
                            </div>
                            <ul className='mt-4 flex text-gray-500 font-bold gap-3 flex-col p-3 bg-gray-100'>
                                {p?.features?.map((f, i) => (
                                    <li style={{
                                        textShadow: "0px 0px 6px rgba(0,0,0,0.2)"
                                    }} key={i} className='flex items-end justify-between'>
                                        <p>{f?.title}</p>
                                        {f?.exist ? (
                                            <p>exist</p>
                                        ) : (
                                            <p>not exist</p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <div className='flex gap-3'>
                                <button className='p-3 text-sm px-5 transition-all hover:bg-orange-400 active:bg-orange-500 text-white bg-orange-500 shadow-xl w-fit mx-auto'>اشتراك</button>
                                <button className='p-3 text-sm px-5 transition-all border border-orange-500 text-black hover:bg-orange-500 hover:text-white w-fit mx-auto'>تفاصيل اكثر</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Plans
