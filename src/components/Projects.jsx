import FitflexImg from '../assets/fitflex-5aa87.web.app_(Nest Hub Max).png'
import ToysImg from '../assets/chadmama-toys.web.app_(Nest Hub Max).png'
import RannghorImg from '../assets/rannaghor-ff202.web.app_(Nest Hub Max).png'
import BistroBossImg from '../assets/bistro-boss-45d0b.web.app_(Nest Hub Max) (1).png'
import { FaEye, FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


const Projects = () => {

    useEffect(() => {
        AOS.init({
          once: false,
          duration: 1000,
        });
      }, []);

    return (
        <div id="projects" className="max-w-5xl mx-auto px-4 pt-20 md:pt-32">
            <h3 className="md:w-1/3 mx-auto text-center pb-3 border-b-4 border-[#f44369] text-4xl font-bold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-transparent bg-clip-text">Recent Projects</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

                <div data-aos="zoom-in-down" className='shadow-xl hover:shadow-red-300 duration-700'>
                    <img className='w-full h-72 object-cover object-top hover:object-bottom duration-[2s]' src={FitflexImg} alt="Project Image" />
                    <div className='p-6'>
                        <h3 className='text-2xl font-bold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-transparent bg-clip-text'>FitFlex</h3>
                        <p className='my-4'>A MERN stack online gym website for everyone. Here is, firebase authentication, dashboard for users, instructors, and admin, payment gateway, private route. User can purchase a class, instructors can add a class and admin can approved or denied any class.</p>
                        <div className='flex gap-4'>
                            <a href='https://fitflex-5aa87.web.app/' target='blank' className="w-1/3 font-semibold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white py-1 rounded-3xl flex justify-center items-center gap-2"><FaEye /> Preview</a>

                            <a href='https://github.com/jahangir2k04/fitflex-client-side' target='blank' className="w-1/3 font-semibold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white py-1 rounded-3xl flex justify-center items-center gap-2"><FaGithub /> Client</a>

                            <a href='https://github.com/jahangir2k04/fitflex-server-side' target='blank' className="w-1/3 font-semibold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white py-1 rounded-3xl flex justify-center items-center gap-2"><FaGithub /> Server</a>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in-left" className='shadow-xl hover:shadow-red-300 duration-700'>
                    <img className='w-full h-72 object-cover object-top hover:object-bottom duration-[2s]' src={ToysImg} alt="Project Image" />
                    <div className='p-6'>
                        <h3 className='text-2xl font-bold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-transparent bg-clip-text'>Chadmama Toys</h3>
                        <p className='my-4'>A MERN stack online toys marketplace website. Here is, firebase authentication, admin panel, private route. User can add, update and delete a toy.</p>
                        <div className='flex gap-4 pt-12'>
                            <a href='https://chadmama-toys.web.app/' target='blank' className="w-1/3 font-semibold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white py-1 rounded-3xl flex justify-center items-center gap-2"><FaEye /> Preview</a>

                            <a href='https://github.com/jahangir2k04/chadmama-toys-client-side' target='blank' className="w-1/3 font-semibold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white py-1 rounded-3xl flex justify-center items-center gap-2"><FaGithub /> Client</a>

                            <a href='https://github.com/jahangir2k04/chadmama-toys-server-side' target='blank' className="w-1/3 font-semibold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white py-1 rounded-3xl flex justify-center items-center gap-2"><FaGithub /> Server</a>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in-right" className='shadow-xl hover:shadow-red-300 duration-700'>
                    <img className='w-full h-72 object-cover object-top hover:object-bottom duration-[3s]' src={BistroBossImg} alt="Project Image" />
                    <div className='p-6'>
                        <h3 className='text-2xl font-bold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-transparent bg-clip-text'>Bistro Boss</h3>
                        <p className='my-4'>A MERN stack online restaurant website. Here is, firebase authentication, dashboard for user and admin, private route, payment gateway and many more. User can order any food according to their choice and they also need to payment to receive the food.</p>
                        <div className='flex gap-4'>
                            <a target='blank' className="w-1/3 font-semibold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white py-1 rounded-3xl flex justify-center items-center gap-2"><FaEye /> Preview</a>

                            <a target='blank' className="w-1/3 font-semibold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white py-1 rounded-3xl flex justify-center items-center gap-2"><FaGithub /> Client</a>

                            <a target='blank' className="w-1/3 font-semibold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white py-1 rounded-3xl flex justify-center items-center gap-2"><FaGithub /> Server</a>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in-up" className='shadow-xl hover:shadow-red-300 duration-700'>
                    <img className='w-full h-72 object-cover object-top hover:object-bottom duration-[2s]' src={RannghorImg} alt="Project Image" />
                    <div className='p-6'>
                        <h3 className='text-2xl font-bold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-transparent bg-clip-text'>RannaGhor</h3>
                        <p className='my-4'>A React online chefs recipes website. Here is, firebase authentication and private route. Here is so many recipes by different chefs. User can order any recipe according to their choice.</p>
                        <div className='flex gap-4 pt-6'>
                            <a href='https://rannaghor-ff202.web.app/' target='blank' className="w-1/3 font-semibold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white py-1 rounded-3xl flex justify-center items-center gap-2"><FaEye /> Preview</a>

                            <a href='https://github.com/jahangir2k04/rannaghor-client-side' target='blank' className="w-1/3 font-semibold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white py-1 rounded-3xl flex justify-center items-center gap-2"><FaGithub /> Client</a>

                            <a href='https://github.com/jahangir2k04/rannaghor-server-side' target='blank' className="w-1/3 font-semibold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white py-1 rounded-3xl flex justify-center items-center gap-2"><FaGithub /> Server</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Projects;