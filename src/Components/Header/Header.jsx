import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-base-100 lg:my-12">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="text-base menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to="/" className={({ isActive }) =>
                      isActive ? 'text-[#23BE0A] bg-white border-2 border-[#23BE0A]' : 'font-bold'
                               }>Home</NavLink></li>
        <li><NavLink to="/listedBooks" className={({ isActive }) =>
                      isActive ? 'text-[#23BE0A] bg-white border-2 border-[#23BE0A]' : 'font-bold'
                               }>Listed Books</NavLink></li>
        <li><NavLink to="pagesToRead" className={({ isActive }) =>
                      isActive ? 'text-[#23BE0A] bg-white border-2 border-[#23BE0A]' : 'font-bold'
                               }>Pages to Read</NavLink></li>
        <li><NavLink to="/reviews" className={({ isActive }) =>
                      isActive ? 'text-[#23BE0A] bg-white border-2 border-[#23BE0A]' : 'font-bold'
                               }>Reviews</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) =>
                      isActive ? 'text-[#23BE0A] bg-white border-2 border-[#23BE0A]' : 'font-bold'
                               }>Contact</NavLink></li>
        
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-semibold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="text-base menu menu-horizontal px-1">
    <li><NavLink to="/" className={({ isActive }) =>
                      isActive ? 'text-[#23BE0A] bg-white border-2 border-[#23BE0A]' : 'font-bold'
                               }>Home</NavLink></li>

        <li><NavLink to="/listedBooks" className={({ isActive }) =>
                      isActive ? 'text-[#23BE0A] bg-white border-2 border-[#23BE0A]' : 'font-bold'
                               }>Listed Books</NavLink></li>
        <li><NavLink to="pagesToRead" className={({ isActive }) =>
                      isActive ? 'text-[#23BE0A] bg-white border-2 border-[#23BE0A]' : 'font-bold'
                               }>Pages to Read</NavLink></li>
        <li><NavLink to="/reviews" className={({ isActive }) =>
                      isActive ? 'text-[#23BE0A] bg-white border-2 border-[#23BE0A]' : 'font-bold'
                               }>Reviews</NavLink></li>
        <li><NavLink to="/contact"  className={({ isActive }) =>
                      isActive ? 'text-[#23BE0A] bg-white border-2 border-[#23BE0A]' : 'font-bold'
                               }>Contact</NavLink></li>
      
    </ul>
  </div>
  <div className="navbar-end lg:flex gap-4 hidden">
    <button className="btn bg-[#23BE0A] text-lg text-white font-semibold">Sign In</button>
    <button className="btn bg-[#59C6D2] text-lg text-white font-semibold">Sign Up</button>
  </div>
</div>
    );
};

export default Header;