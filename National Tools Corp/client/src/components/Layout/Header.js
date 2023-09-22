import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import Logo2 from "../../product-images/Logo2.jpg";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { BsAlarm } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { AiOutlinePoweroff } from "react-icons/ai";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      {/* First */}
      <div class="nav_bar"><p><div>
            <BiPhoneCall color="red" /> : 9417125527 |{" "}
            <BiMailSend color="red" /> : nationaltoolsvices@gmail.com
          </div></p></div>
    
        
      
      {/* Middle */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div class="nav_bar_main">
          <div className="container-fluid">
            <div className="row"></div>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <div className="col">
                <Link to="/" className="navbar-brand logo-header">
                  <img src={Logo2} />
                </Link>
              </div>
              <div className="col">
                <SearchInput />
              </div>
              <div className="col-lg-2">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  {!auth?.user ? (
                    <>
                      <li className="nav-item">
                        <NavLink to="/register" className="nav-link">
                          Register
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/login" className="nav-link">
                          Login
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item dropdown">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          style={{ border: "none" }}
                        >
                          {auth?.user?.name}
                        </NavLink>
                        <ul className="dropdown-menu">
                          <li>
                            <NavLink
                              to={`/dashboard/${
                                auth?.user?.role === 1 ? "admin" : "user"
                              }`}
                              className="dropdown-item"
                            >
                              Dashboard
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={handleLogout}
                              to="/login"
                              className="dropdown-item"
                            >
                              Logout
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </>
                  )}
                  <li className="nav-item">
                    <NavLink to="/cart" className="nav-link">
                      <Badge count={cart?.length} showZero offset={[10, -5]}>
                        Cart
                      </Badge>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </nav>

      {/* Second Header */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8">
                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo01"
                >
                  {/* <Link to="/" className="navbar-brand">
              🛒 National Tools
            </Link> */}
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/* <SearchInput /> */}
                    <li className="nav-item">
                      <NavLink to="/" className="nav-link ">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/about" className="nav-link ">
                        About
                      </NavLink>
                    </li>

                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={"/categories"}
                        data-bs-toggle="dropdown"
                      >
                        Categories
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to={"/categories"}>
                            All Categories
                          </Link>
                        </li>
                        {categories?.map((c) => (
                          <li>
                            <Link
                              className="dropdown-item"
                              to={`/category/${c.slug}`}
                            >
                              {c.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/contact" className="nav-link ">
                        Contact
                      </NavLink>
                    </li>

                    {/* {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: 'none' }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? 'admin' : 'user'
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )} */}
                    <li className="nav-item">
                      {/* <NavLink to="/cart" className="nav-link">
                  <Badge count={cart?.length} showZero offset={[10, -5]}>
                    Cart
                  </Badge>
                </NavLink> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
