import React from 'react';
import MapOne from '../assets/h1.svg';
import MapTwo from '../assets/h2.svg';
import MapThree from '../assets/h3.svg';

function Fact() {
    return (
        <div name="fact" className='w-screen flex  flex-col justify-center mx-auto'>
           <h1 className='text-2xl font-giz text-red-700 mx-10 mt-10 md:mx-20'>Facts and Figures</h1>
            <div className='flex flex-col md:flex-row md:mx-20'>
            <img src={MapOne} alt="my profile" className="w-10/12 mx-4 cursor-pointer md:mx-auto " />
            <img src={MapTwo} alt="my profile" className="w-10/12 mx-4 cursor-pointer md:mx-auto " />
            <img src={MapThree} alt="my profile" className="w-10/12 mx-4 cursor-pointer md:mx-auto " />
            </div>
            <div class="border  border-[#C07029] mx-10 mt-10 md:mx-20"></div>
        </div>

    )
}

export default Fact
