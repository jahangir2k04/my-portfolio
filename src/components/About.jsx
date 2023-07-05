import { Player } from '@lottiefiles/react-lottie-player';
import { FaDownload } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


const About = () => {

    useEffect(() => {
        AOS.init({
          once: false,
          duration: 1000
        });
      }, []);

    return (
        <div id='about' className="max-w-5xl mx-auto px-4 pt-20 md:pt-32">
            <h3 className="md:w-1/3 mb-6 mx-auto text-center pb-3 border-b-4 border-[#f44369] text-4xl font-bold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-transparent bg-clip-text">About Me</h3>
            <div className="md:flex  gap-6">
                <div data-aos="fade-down-right" className='md:w-1/2'>
                    <Player
                        autoplay
                        loop
                        src="https://assets1.lottiefiles.com/packages/lf20_2Jhi4GwOAG.json"
                    >
                    </Player>
                </div>
                <div data-aos="fade-down-left" className='md:w-1/2'>
                    <p className='my-6'>Hi, I&apos;m Jahangir Alam. I&apos;m studying in the Diploma in Computer Science and Technology at Mymensingh Polytechnic Institute. I have been interested in programming since childhood. So I learned web development from the Programming-Hero Institute. I am also learning new things continuously. Because I love learning new things and doing new tasks.</p>
                    <div className='flex gap-6'>
                        <a href='../../public/jahangir_alam_resume.pdf' download className='text-2xl font-semibold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white w-40 py-3 rounded hover:scale-110 transition duration-700 flex justify-center items-center gap-2'>  <FaDownload /> <span>Resume</span></a>
                        <button className="text-2xl font-semibold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white w-40 py-2 rounded hover:scale-110 transition duration-700">Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;