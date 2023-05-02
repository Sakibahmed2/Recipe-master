import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';

const Home = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://recipe-master-server-sakibahmed2.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <div className="hero mt-20 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=740&t=st=1682952964~exp=1682953564~hmac=d272d427bf04c69faeb30bdcf9979b5f54062ad19fcc29cd740dc4d496843012" className="max-w-2xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Welcome to
                            <span className='text-teal-400'>
                                Recipe master
                            </span>
                        </h1>
                        <p className="py-6">Our food is made with high-quality ingredients that are carefully sourced and prepared to create delicious and nutritious meals. We offer a wide range of options to suit different tastes and dietary needs, including vegetarian, vegan, and gluten-free dishes.</p>
                        <button className="my-btn">Login</button>
                    </div>
                </div>
            </div>

            {/* Chef section */}
                <h2 className='text-4xl text-center mt-8 font-semibold'>Our Cooks </h2>
            <div className='grid md:grid-cols-3 gap-8 container mx-auto mt-12'>
                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }
            </div>

        </div>
    );
};

export default Home;