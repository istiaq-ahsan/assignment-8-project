import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="mt-10 container mx-auto navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/statistics">Statistics</NavLink>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </ul>
                </div>
                <a className="text-xl font-bold">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/statistics">Statistics</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <button className="btn rounded-full"><i className="fa-solid fa-cart-shopping"></i></button>
                <button className="btn rounded-full"><i className="fa-regular fa-heart"></i></button>
            </div>
        </div>
    );
};

export default Navbar;