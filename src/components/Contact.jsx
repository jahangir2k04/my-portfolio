import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail, BiMessageRoundedDots } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import Facebook from '../assets/Facebook-logo.png'
import Twitter from '../assets/twitter.png'
import Github from '../assets/github.png'
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h54ryxd', 'template_tuqw80o', form.current, 'YghgZLkW-o6wEJVRg')
            .then((result) => {
                toast.success("Message sent successfully.", result);
                e.target.reset();
            }, (error) => {
                toast.error("Message was not sent.", error)
            });
    };

    return (
        <div id="contact" className="min-h-screen max-w-5xl mx-auto px-4 pt-20 md:pt-32">
            <h3 className="md:w-1/3 mx-auto text-center pb-3 border-b-4 border-[#f44369] text-4xl font-bold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-transparent bg-clip-text">Contact Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="pt-6">
                    <div className="flex items-center gap-4">
                        <div className="text-xl text-[#f44369] border-2 border-[#f44369] p-3 rounded-full"><FaPhoneAlt /></div>
                        <div>
                            <p className="text-2xl font-bold">Phone</p>
                            <p className="text-lg text-gray-600 font-semibold">+8801629642849</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 my-4">
                        <div className="text-xl text-[#f44369] border-2 border-[#f44369] p-3 rounded-full"><BiLogoGmail /></div>
                        <div>
                            <p className="text-2xl font-bold">Email</p>
                            <p className="text-lg text-gray-600 font-semibold">jahangir2k04@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-2xl text-[#f44369] border-2 border-[#f44369] p-3 rounded-full"><MdLocationPin /> </div>
                        <div>
                            <p className="text-2xl font-bold">Location</p>
                            <p className="text-lg text-gray-600 font-semibold">Mymensingh, Bangladesh</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mt-6">Also Find Me Here</h3>
                        <div className="flex gap-4 mt-6">
                            <a target="blank" href="https://www.facebook.com/3jahangiralam">
                                <img className="w-14" src={Facebook} alt="Facebook Logo" />
                            </a>
                            <a target="blank" href="https://twitter.com/Jahangir2k02">
                                <img className="w-14" src={Twitter} alt="Twitter Logo" />
                            </a>
                            <a target="blank" href="https://github.com/jahangir2k04">
                                <img className="w-14" src={Github} alt="Github Logo" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="shadow-2xl p-6">
                    <h3 className="text-2xl font-bold mb-2">Wanna, Say Hi?</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="flex items-center gap-2"><AiOutlineUser />Name</span>
                            </label>
                            <input type="text" name="from_name" placeholder="your name" required className="px-6 pb-2 border-b-2 border-gray-500 focus:border-red-600 outline-none w-full text-gray-700" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="flex items-center gap-2"><BiLogoGmail />Email</span>
                            </label>
                            <input type="email" name="from_email" placeholder="your email" required className="px-6 pb-2 border-b-2 border-gray-500 focus:border-red-600 outline-none w-full text-gray-700" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="flex items-center gap-2"><BiMessageRoundedDots />Message</span>
                            </label>
                            <textarea name="message" placeholder="your message" required rows='4' className="bg-base-200 px-6 py-2 border-b-2 border-gray-500 focus:border-red-600 outline-none resize-none w-full text-gray-800" />
                        </div>
                        <input className="mt-6 text-xl font-semibold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white px-6 py-2 rounded-3xl" type="submit" value="Send Message" />
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Contact;