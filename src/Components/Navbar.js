import React, { useEffect, useState } from "react"; 
import { NavLink, Link } from "react-router-dom";
import ScrollTopTopButton from "./ScrollToTopButton";
import white from '../assets/white.png'
import black from '../assets/black.png'

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(false); 
  useEffect(() => { 
    // Nav is displayed after scrolling for 100 pixels 
    const toggleVisibility = () => { 
      if (window.pageYOffset > 100) { 
        setIsVisible(true); 
      } else { 
        setIsVisible(false); 
      } 
    }; 
    window.addEventListener("scroll", toggleVisibility); 
    return () => window.removeEventListener("scroll", toggleVisibility); 
  }, []); 
  
  return (
    <>

<nav class={`navbar navbar-expand-md navbar-light shadow-none fixed-top ${isVisible ? 'nav-scrolled' : ''}`}>
  <div class="container">
    <Link class="navbar-brand " to="/">
      <img src={`${isVisible ? black: white}`} alt="AprilByDunni" width={'30%'} />
              </Link>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class={`bi bi-list ${isVisible ? 'dark-text' : 'light-text'} h3`}></i>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarNav">

            <ul class="navbar-nav text-center">
              <li class="nav-item">
                <NavLink tag={Link} activeClassName="active1 " to="/">
                  Home
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink
                  tag={Link}
                  activeClassName="active1"
                  to="/gallery"
                >
                  Gallery
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  tag={Link}
                  activeClassName="active1"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>

          
            </ul>
            <ul class="navbar-nav text-center ">
             
              <Link to="/join-us">
                <li class="nav-item">
                  <i class={`bi bi-chat-dots-fill h3 ${isVisible ? 'dark-text' : 'light-text'}`}></i>
                </li>
              </Link>
            </ul>
    </div>
  </div>
</nav>
      <ScrollTopTopButton />
    </>
  );
};

export default Navbar;
