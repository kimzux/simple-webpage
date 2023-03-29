import React from 'react';
import MapImg1 from '../assets/img1.svg'
import MapImg2 from '../assets/img2.svg'
import MapImg3 from '../assets/img3.svg'
import MapImg4 from '../assets/img4.svg'
import MapImg5 from '../assets/img5.svg'
import MapImg6 from '../assets/img6.svg'
import MapImg7 from '../assets/img7.svg'
import MapImg8 from '../assets/img8.svg'

function Fact() {
    return (
        <div name="fact" className='w-screen flex  flex-col justify-center'>
           <h1 className='text-2xl font-giz text-red-700 text-start mx-10 mt-10 md:mx-20'>Our Success Stories</h1>
           <div class="mx-10 mt-5 md:mx-20">
            <div className='flex flex-col gap-5  md:flex-row'>
            <img src={MapImg1} alt="my profile" className="cursor-pointer" />
            <img src={MapImg2} alt="my profile" className="cursor-pointer" />
            <img src={MapImg3} alt="my profile" className="cursor-pointer" />
            <img src={MapImg4} alt="my profile" className="cursor-pointer" />
            </div>
            <div className='flex flex-col gap-5 mt-5 md:flex-row w-full'>
            <img src={MapImg5} alt="my profile" className="cursor-pointer" />
            <img src={MapImg6} alt="my profile" className="cursor-pointer" />
            <img src={MapImg7} alt="my profile" className="cursor-pointer" />
            <img src={MapImg8} alt="my profile" className="cursor-pointer" />
            </div>
            </div>
          
        </div>

    )
}

export default Fact