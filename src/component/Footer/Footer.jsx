import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content md:flex  md:justify-between justify-center">
                <div className='md:w-[520px]'>
                    <h4 className='text-4xl font-bold text-teal-500'>Recipe master</h4>
                    <p className='text-lg text-gray-500 '>
                        Our food is made with high-quality ingredients that are carefully sourced and prepared to create delicious and nutritious meals. We offer a wide range of options to suit different tastes and dietary needs, including vegetarian, vegan, and gluten-free dishes.
                    </p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Premium quality</a>
                    <a className="link link-hover">100% Organic</a>
                    <a className="link link-hover">Vegan free</a>
                    <a className="link link-hover">Handmade</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn my-btn border-none absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;