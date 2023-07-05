import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Tailwind from '../assets/tailwind.png'
import Bootstrap from '../assets/bootstrap.jpg'
import JavaScript from '../assets/javascript.png'
import React from '../assets/react.svg'
import Node from '../assets/node.png'
import Express from '../assets/express.png'
import MongoDB from '../assets/mongodb.png'
import Firebase from '../assets/firebase.jpg'
import JWT from '../assets/jwt.png'
import Stripe from '../assets/stripe.png'


const Skills = () => {
    return (
        <div id="skills" className="max-w-5xl mx-auto px-4 pt-20 md:pt-32">
            <h3 className="md:w-1/3 mx-auto text-center pb-3 border-b-4 border-[#f44369] text-4xl font-bold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-transparent bg-clip-text">My Skills</h3>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-6 mt-10'>

                <div className='border-2 border-[#3e3b92] p-4 text-center rounded'>
                    <img className='mx-auto h-16 w-16' src={HTML} alt="Logo" />
                    <h3 className='mt-3 text-xl font-bold'>HTML 5</h3>
                </div>
                <div className='border-2 border-[#3e3b92] p-4 text-center rounded'>
                    <img className='mx-auto h-16 w-16' src={CSS} alt="Logo" />
                    <h3 className='mt-3 text-xl font-bold'>CSS 5</h3>
                </div>
                <div className='border-2 border-[#3e3b92] p-4 text-center rounded'>
                    <img className='mx-auto h-16 w-16' src={Tailwind} alt="Logo" />
                    <h3 className='mt-3 text-xl font-bold'>Tailwind</h3>
                </div>
                <div className='border-2 border-[#3e3b92] p-4 text-center rounded'>
                    <img className='mx-auto h-16 w-16' src={Bootstrap} alt="Logo" />
                    <h3 className='mt-3 text-xl font-bold'>Bootstrap</h3>
                </div>
                <div className='border-2 border-[#3e3b92] p-4 text-center rounded'>
                    <img className='mx-auto h-16 w-16' src={JavaScript} alt="Logo" />
                    <h3 className='mt-3 text-xl font-bold'>JavaScript</h3>
                </div>
                <div className='border-2 border-[#3e3b92] p-4 text-center rounded'>
                    <img className='mx-auto h-16 w-16' src={React} alt="Logo" />
                    <h3 className='mt-3 text-xl font-bold'>React</h3>
                </div>
                <div className='border-2 border-[#3e3b92] p-4 text-center rounded'>
                    <img className='mx-auto h-16 w-16' src={Node} alt="Logo" />
                    <h3 className='mt-3 text-xl font-bold'>Node</h3>
                </div>
                <div className='border-2 border-[#3e3b92] p-4 text-center rounded'>
                    <img className='mx-auto h-16 w-16' src={Express} alt="Logo" />
                    <h3 className='mt-3 text-xl font-bold'>Express</h3>
                </div>
                <div className='border-2 border-[#3e3b92] p-4 text-center rounded'>
                    <img className='mx-auto h-16 w-16' src={MongoDB} alt="Logo" />
                    <h3 className='mt-3 text-xl font-bold'>MongoDB</h3>
                </div>
                <div className='border-2 border-[#3e3b92] p-4 text-center rounded'>
                    <img className='mx-auto h-16 w-16' src={Firebase} alt="Logo" />
                    <h3 className='mt-3 text-xl font-bold'>Firebase</h3>
                </div>
                <div className='border-2 border-[#3e3b92] p-4 text-center rounded'>
                    <img className='mx-auto h-16 w-16' src={JWT} alt="Logo" />
                    <h3 className='mt-3 text-xl font-bold'>JWT</h3>
                </div>
                <div className='border-2 border-[#3e3b92] p-4 text-center rounded'>
                    <img className='mx-auto h-16 w-16' src={Stripe} alt="Logo" />
                    <h3 className='mt-3 text-xl font-bold'>Stripe</h3>
                </div>
                
            </div>
        </div>
    );
};

export default Skills;