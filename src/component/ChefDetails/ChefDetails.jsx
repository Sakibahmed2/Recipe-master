import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import ChefRecipe from '../ChefRecipe/ChefRecipe';


const ChefDetails = () => {
    const { id } = useParams();
    const chefRecipe = useLoaderData()
    const { chef_name, chef_picture, description, likes, years_of_experience, specialty, recipes } = chefRecipe;

    return (
        <div>
            <div className="hero justify-center container mx-auto mt-24">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={chef_picture} className="max-w-2xl rounded-lg shadow-2xl md:ml-24" />
                    <div className='md:ml-11'>
                        <h1 className="text-5xl font-bold">{chef_name}</h1>
                        <p className="py-6 text-lg font-semibold text-gray-600">{description}</p>
                        <p >Recipes : {recipes.length}</p>
                        <p>Experience : {years_of_experience} years</p>
                        <p className='flex items-center'> <FaThumbsUp />  {likes} </p>
                    </div>
                </div>
            </div>
            <div className='mt-32'>
                <h2 className='text-4xl text-center font-semibold'>Chef recipes</h2>
                <div className='grid md:grid-cols-3 gap-4 mt-24 '>
                    {
                        recipes.map(recipe => <ChefRecipe
                            key={recipe.recipe_id}
                            recipe={recipe}
                        ></ChefRecipe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;