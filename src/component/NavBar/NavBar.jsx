import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import ActiveLink from '../ActiveLink/ActiveLink';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSingOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.log(error) })
    }


    return (
        <div>
            <div className="py-4 bg-teal-500 text-white md:flex justify-between px-4 md:px-8 shadow-xl">
                <h2 className=" font-semibold text-3xl">Recipe master</h2>
                <div className='font-semibold text-xl mt-2 md:mt-0 flex items-center '>
                    <ActiveLink to="/">Home</ActiveLink>
                    <button className='mx-20'>
                        <ActiveLink to="/blog"  >Blog</ActiveLink>
                    </button>

                    {
                        user ?
                            <>
                                <button className='mr-8' onClick={handleSingOut}>SingOut</button>
                            </>
                            :
                            <button>
                                <ActiveLink to='/login'>
                                    Login
                                </ActiveLink>
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