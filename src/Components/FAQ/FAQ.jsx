import React from 'react'

const FAQ = () => {
    return (
        <div className='flex flex-col gap-2'>

            <h3 className='text-red-500 text-3xl font-bold text-center'>اشهر الأسئة</h3>


            <div className='flex flex-col gap-10 mt-5 w-full max-w-[700px] mx-auto text-center'>
                {Array.from({ length: 4 }).map((_, i) => (
                    <div className='flex flex-col p-3 gap-3'>
                        <div onClick={() => {
                            const answer = document.getElementById(`ans-${i}`)
                            if (answer.className.includes('p-2')) {
                                answer.classList.remove('p-2', 'h-[100px]')
                                answer.classList.add('p-0', 'h-[0px]')
                            } else {
                                answer.classList.remove('p-0', 'h-[0px]')
                                answer.classList.add('p-2', 'h-[100px]')
                            }
                        }} className='cursor-pointer flex gap-3 justify-between'>
                            <strong>اسم السؤال من هنا</strong>
                            <p>arrow</p>
                        </div>
                        <div id={`ans-${i}`} className='flex transition-all overflow-hidden h-[0px] text-center items-center flex-col justify-center p-0 duration-700 bg-gray-100'>
                            <p className='text-gray-800'>الاجابة المختصرة هنا</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FAQ
