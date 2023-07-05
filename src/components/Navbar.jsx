

const menuItem = <>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
</>

const Navbar = () => {
    return (
        <div className="fixed top-0 z-10 w-full px-2 shadow-xl bg-white">
            <div className="navbar max-w-7xl mx-auto md:px-0">
                <div className="md:navbar-start w-full">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 gap-3 font-semibold text-base">
                            {menuItem}
                        </ul>
                    </div>
                    <p className="bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-transparent bg-clip-text text-3xl font-bold ms-auto md:ms-0">Jahangir Alam</p>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal items-center px-1 space-x-6 text-lg font-bold">
                        {menuItem}
                        <button className="text-xl font-bold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white px-6 py-2 rounded hover:scale-110 transition duration-700">Hire Me</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;