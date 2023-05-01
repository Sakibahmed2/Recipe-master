import React from 'react';

const Chef = ({ chef }) => {

    console.log(chef);

    const { chef_name, chef_picture, recipes, years_of_experience } = chef;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={chef_picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : <span className='text-teal-500'>{chef_name}</span></h2>
                <p>Experience : {years_of_experience}</p>
                <p> Recipes : {recipes.length}</p>
                <p>Years of experience : {years_of_experience}</p>
                <div className="card-actions justify-end">
                    <button className="btn my-btn border-none">View Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default Chef;