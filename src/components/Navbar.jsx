

const menuItem = <>
    <a className="nav-link" href="#home">Home</a>
    <a className="nav-link" href="#about">About</a>
    <a className="nav-link" href="#skills">Skills</a>
    <a className="nav-link" href="#projects">Projects</a>
    <a className="nav-link" href="#contact">Contact</a>
</>

const Navbar = () => {
    return (
        <div className="navbar max-w-7xl mx-auto md:p-0 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <p className="normal-case bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-transparent bg-clip-text text-3xl font-bold">Jahangir Alam</p>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal items-center px-1 space-x-6 text-lg font-bold">
                    {menuItem}
                    <button className="text-xl font-bold bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white px-6 py-2 rounded hover:scale-110 transition duration-700">Hire Me</button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;