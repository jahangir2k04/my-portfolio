import photo from '../assets/IMG_1133.jpg'
import { FaDownload } from 'react-icons/fa';


const Home = () => {
    return (
        <div id='home' className="max-w-5xl mx-auto min-h-screen grid items-center px-4 pt-20 ">
            <div className="flex flex-col-reverse md:flex-row items-center gap-6">
                <div className='md:w-1/2'>
                    <h3>
                        <span className='text-2xl'>Hi, I&apos;m Jahangir Alam</span>
                    </h3>
                    <div className='mt-4'>
                        <span className='text-5xl font-bold uppercase'>A Innovative </span>
                        <span className='text-5xl font-bold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-transparent bg-clip-text'>MERN STACK DEVELOPER</span>
                    </div>
                    <p className='mt-4 text-lg'>I&apos;m a Junior developer based in Mymensingh, Bangladesh. With expertise in HTML, CSS, JavaScript, React and Committed to continuous learning.</p>
                    <a href='../../public/jahangir_alam_resume.pdf' download className='mt-6 mx-auto md:mx-0 text-2xl font-semibold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white w-48 py-3 rounded hover:scale-110 transition duration-700 flex justify-center items-center gap-2'>  <FaDownload /> <span>Resume</span></a>
                </div>
                <div className='md:ms-auto'>
                    <img className='mx-auto h-[350px] w-[350px] rounded-full border-8 border-[#f44369]' src={photo} alt="My Photo" />
                </div>
            </div>
        </div>
    );
};

export default Home;