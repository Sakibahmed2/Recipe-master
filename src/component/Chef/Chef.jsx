import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {


    const { id,chef_name, chef_picture, recipes, years_of_experience, likes } = chef;

    return (
        <div className="card card-compact w-[330px] md:w-96 bg-base-100 shadow-xl">
            <figure><img src={chef_picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : <span className='text-teal-500'>{chef_name}</span></h2>
                <p>Experience : {years_of_experience}</p>
                <p> Recipes : {recipes.length}</p>
                <span className='flex items-center '> <FaThumbsUp /> {likes}</span>
                <div className="card-actions justify-end">
                    <Link to={`/recipes/${id}`}>
                        <button className="btn my-btn border-none">View Recipes</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;