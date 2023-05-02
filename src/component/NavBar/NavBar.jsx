import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSingOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.log(error) })
    }


    return (
        <div>
            <div className="py-4 bg-teal-500 text-white md:flex justify-between px-8 shadow-xl">
                <h2 className=" font-semibold text-3xl">Recipe master</h2>
                <div className='font-semibold text-xl'>
                    <Link to="/">Home</Link>
                    <Link to="/" className='mx-20'>Blog</Link>

                    {
                        user ?
                            <>
                                <button className='mr-8' onClick={handleSingOut}>SingOut</button>
                            </>
                            :
                            <button>
                                <Link to='/login'>
                                    Login
                                </Link>
                            </button>
                    }
                    {
                        user &&

                        <div className='tooltip tooltip-bottom ' data-tip={user?.displayName}>
                            <img src={user?.photoURL} className='w-14 rounded-full  tooltip mr-8' alt="" />
                        </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;