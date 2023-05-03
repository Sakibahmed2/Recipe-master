import React from 'react';

const HandMade = () => {
    return (
        <div className='mt-24 mb-36'>
            <h3 className='text-4xl font-bold text-center'> HANDMADE FOODS</h3>
            <div className='grid md:grid-cols-2 gap-8 md:gap-16 container  mx-auto mt-16'>
                <div className='h-64 flex mx-4 md:mx-0 items-center rounded-2xl bg-orange-100'>
                    <img className='w-60 md:w-80 relative right-6 top-6 ' src="https://i.ibb.co/cy2bTKP/pngwing-com.png" alt="" />
                    <div className='relative right-6 md:right-0'>
                        <p className='text-2xl font-bold'>ECO FRIENDLY PRODUCT
                        </p>
                        <p className='text-teal-500 font-semibold'>ECO FRIENDLY</p>
                    </div>
                </div>
                <div className='h-64 flex mx-4 md:mx-0 items-center bg-teal-100 rounded-2xl'>
                    <img className='w-60 md:w-80 relative right-6 top-6' src="https://i.ibb.co/Vp4Cmy9/pngwing-com-1.png" alt="" />
                    <div className='relative right-6 md:right-0'>
                        <p className='text-2xl font-bold'>PRODUCT ON DEMAND
                        </p>
                        <p className='text-orange-500 font-semibold'>100 Neutral</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HandMade;