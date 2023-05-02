import React from 'react';
import { FaBookmark } from 'react-icons/fa';


const ChefRecipe = ({ recipe }) => {
    console.log(recipe);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={recipe?.recipe_img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{recipe?.recipe_name}</h2>
                <div>
                    <h3 className='text-lg font-semibold'>Ingredients</h3>
                    {
                        recipe.ingredients.map(i => <p
                         i={i}
                        >
                            {i}
                        </p>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <button className="btn my-btn border-none text-xl"><FaBookmark /></button>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipe;