import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../AllComponent/AuthSection/AuthoProvider"; 
import { signOut } from 'firebase/auth';
import { auth } from '../../AllComponent/AuthSection/AuthContext'; 





const activeClass = ({ isActive }) =>
  isActive ? "text-red-700 underline" : "text-white";



const Navbar = () => {
  const { user } = useAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div>
      <div className="navbar bg-gradient-to-r from-blue-600 to-purple-600 shadow-sm text-white">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-200 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" className={activeClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/brands" className={activeClass}>
                  Brands
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-profile" className={activeClass}>
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost lg:text-xl text-white normal-case">
            Collecting Application
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 font-serif text-xl">
            <NavLink to="/" className={activeClass}>
              Home
            </NavLink>
            <NavLink to="/brands" className={activeClass}>
              Brands
            </NavLink>
            <NavLink to="/my-profile" className={activeClass}>
              My Profile
            </NavLink>
          </ul>
        </div>

        <div className="navbar-end gap-3 pr-3 flex items-center">
          {user ? (
            <>
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full"
                  title={user.email}
                />
              ) : (
                <FaUserCircle className="text-2xl" />
              )}
              <button
                onClick={handleLogout}
                className="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <FaUserCircle className="text-2xl" />
              <NavLink to="/login" className="btn btn-sm">
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

