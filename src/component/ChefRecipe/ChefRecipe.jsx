import React, { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChefRecipe = ({ recipe }) => {

    const [favorite, setFavorite] = useState(false)


    const handleToast = () => {
        toast("Added to favorite list")
        setFavorite(true)
    };


    return (
        <div className="card card-compact w-[330px] md:w-96 bg-base-100 shadow-xl mx-auto">
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
                    <button onClick={handleToast} disabled={favorite} className="btn my-btn border-none text-md">
                        Favorite  <span className='pl-2'><FaBookmark /></span></button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default ChefRecipe;