import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../provider/AuthProvider";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo flex" onClick={closeMobileMenu}>
              <img className="w-[70px]" src={logo} alt="" />
              <span className="text-blue-800 text-3xl font-bold">
                Care <span className="text-green-600">Connect</span>{" "}
              </span>
            </Link>
            <div className="menu-icon " onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item ">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  SERVICES
                </NavLink>
              </li>
              {user && (
                <li className="nav-item">
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    DASHBOARD
                  </NavLink>
                </li>
              )}
              {/* <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </NavLink>
              </li> */}
              <span className="nav-item flex items-center gap-2">
                {user && (
                  <img
                    src={user?.photoURL}
                    className="w-8 h-8 rounded-full"
                    alt=""
                  />
                )}
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="py-1 px-2 mx-1 rounded hover:bg-blue-800 font-semibold md:my-0 text-black border hover:text-white"
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/signin">
                    <button className="py-1 px-2 mx-1 rounded hover:bg-blue-800 font-semibold md:my-0 text-black border hover:text-white">
                      Log in
                    </button>
                  </Link>
                )}
              </span>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
