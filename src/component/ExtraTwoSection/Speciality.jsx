import React from 'react';

const Speciality = () => {
    return (
        <div className='mt-24'>
            <h3 className='text-4xl text-center font-semibold'>Our speciality</h3>
            <div className='grid  md:grid-cols-3 md:gap-4 md:container mx-auto mt-16 justify-center'>
                <div className='text-center h-96 w-[300px]  md:w-96'>
                    <img className='object-cover rounded-full h-56 w-56 border-4 border-teal-300 mx-auto' src="https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXRhbGlhbiUyMGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <h4 className='text-2xl font-semibold mt-8'>NATURAL FOOD</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the by injected humour.</p>
                </div>
                <div className='text-center h-96 w-[300px]  md:w-96'>
                    <img className='object-cover rounded-full h-56 w-56 border-4 border-teal-300 mx-auto' src="https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGl0YWxpYW4lMjBmb29kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <h4 className='text-2xl font-semibold mt-8'>100% PURE ORGANIC</h4>
                    <p>Strong overcome evil war enlightenment ocean intentions depths grandeur ubermensch.</p>
                </div>
                <div className='text-center h-96 w-[300px]  md:w-96'>
                    <img className='object-cover rounded-full h-56 w-56 border-4 border-teal-300 mx-auto' src="https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGl0YWxpYW4lMjBmb29kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <h4 className='text-2xl font-semibold mt-8'>PREMIUM QUALITY</h4>
                    <p>Free decieve noble eternal-return dead oneself sexuality horror revaluation insofar truth grandeur.</p>
                </div>
            </div>
        </div>
    );
};

export default Speciality;