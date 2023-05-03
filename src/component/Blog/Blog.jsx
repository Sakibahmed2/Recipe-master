import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        <div className="App">
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf} className='btn border-none my-btn mx-auto  flex justify-center mt-8 text-lg '>Download Pdf</button>}
            </Pdf>
            <div ref={ref}>
                <div className='mt-6 container mx-auto'>
                    <div className='bg-teal-800/20 border-2 border-teal-600 p-4 rounded-md mb-8 shadow-lg'>
                        <h2 className='text-2xl font-semibold'>1. The differences between uncontrolled and controlled components ?</h2>
                        <p className='text-lg mt-2 ms-4'>uncontrolled components manage their own state internally, while controlled components rely on the parent component or the application to manage their state. Controlled components provide more control and flexibility over the form data. Uncontrolled components, on the other hand.</p>
                    </div>
                    <div className='bg-teal-800/20 border-2 border-teal-600 p-4 rounded-md mb-8 shadow-lg'>
                        <h2 className='text-2xl font-semibold'>2. How to validate React props using PropTypes ?</h2>
                        <p className='text-lg mt-2 ms-4'> PropTypes to define the expected type and format of the props passed to MyComponent. The propTypes object is assigned to the component and contains a list of property names and their corresponding PropTypes.</p>
                    </div>
                    <div className='bg-teal-800/20 border-2 border-teal-600 p-4 rounded-md mb-8 shadow-lg'>
                        <h2 className='text-2xl font-semibold'>3. The difference between nodejs and express js ?</h2>
                        <p className='text-lg mt-2 ms-4'> Node.js is a runtime environment that allows you to run JavaScript on the server, while Express.js is a web application framework built on top of Node.js that provides a set of tools and conventions for building web applications using Node.js.</p>
                    </div>
                    <div className='bg-teal-800/20 border-2 border-teal-600 p-4 rounded-md mb-8 shadow-lg'>
                        <h2 className='text-2xl font-semibold'>4. What is a custom hook, and why will you create a custom hook ?</h2>
                        <p className='text-lg mt-2 ms-4'>custom hooks in React allow you to encapsulate and reuse stateful logic across multiple components, without duplicating code. They can help to simplify your code and improve its reusability, making it easier to maintain and update your application over time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Blog;