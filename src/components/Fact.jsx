import React from 'react';
import MapLeft from '../assets/fact.svg'
function Fact() {
    return (
        <div name="fact" className='w-screen flex  flex-col justify-center mx-auto'>
           <h1 className='text-2xl font-giz text-red-700 mx-10 mt-10 md:mx-20'>Facts and Figures</h1>
            <div className=''>
            <img src={MapLeft} alt="my profile" className="w-11/12 mx-4 cursor-pointer md:mx-auto " />
            </div>
            <div class="border  border-[#C07029] mx-10 mt-10 md:mx-20"></div>
        </div>

    )
}

export default Fact
