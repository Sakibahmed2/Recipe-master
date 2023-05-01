import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="py-4 bg-teal-500 text-white md:flex justify-between px-8 shadow-xl">
                <h2 className=" font-semibold text-3xl">Recipe master</h2>
                <div className='font-semibold text-xl'>
                    <Link to="/">Home</Link>
                    <Link to="/" className='mx-20'>Blog</Link>
                    <Link to="/" >Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;