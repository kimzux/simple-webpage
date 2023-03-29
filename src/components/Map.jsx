import React from 'react';
import MapImage from '../assets/map.svg';
import MapIcon from '../assets/icon.svg'
import MapLeft from '../assets/left.svg'
function Map() {
    return (
        <div name="map" className='w-screen relative' >
            <div className='flex flex-col justify-center  my-5' >
                <h1 className='text-4xl font-giz text-red-700 text-start mx-10 md:mx-20'>GIZ Tanzania & EAC Map</h1>
                <div className='flex justify-center mx-10 mt-10'>
                    <img src={MapImage} alt="my profile" className="w-10/12 mt-4 ml-20 md:w-2/3 object-cover " />
                    <div>
                        <img src={MapIcon} alt="map icon" className="w-full object-contain" />
                    </div>

                </div>
            </div>
            <div className='absolute bottom-10 '>
            <img src={MapLeft} alt="my profile" className="w-1/2 md:w-10/12 mx-10 md:mx-20 " />
            </div>
            <div class="border  border-[#C07029] mx-10 mt-20 md:mx-20"></div>
        </div>

    )
}

export default Map
