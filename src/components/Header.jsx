import React, { useRef, useState, useEffect } from "react";
import { IoMdMail } from "react-icons/io";
import wpIcon from "../assets/images/whatsApp-icon.webp";
import { FaCaretDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRef = useRef();
  const moreButtonRef = useRef();

  const toggleDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(true);
  };

  const openMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (!showDropdown) return;

    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        moreButtonRef.current &&
        !moreButtonRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <>
      <header>
        <nav aria-label="Main navigation">
          <button className="hamburger" onClick={openMobileMenu}>
            {" "}
            <GiHamburgerMenu></GiHamburgerMenu>
          </button>
          <h1>
            <a href="#home">
              <span>NextInn Technology</span>
            </a>
          </h1>
          <div className="top-menu">
            <ul className="main-menu">
              <li>
                <a href="#home">
                  <span>Home</span>&nbsp;
                </a>
              </li>
              <li>
                <a href="#about">
                  <span>About</span>
                </a>
              </li>
              <li className="fourth">
                <a href="#services">
                  <span>Services</span>
                </a>
              </li>
              <li className="fourth">
                <a href="#portfolio">
                  <span>Portfolio</span>
                </a>
              </li>
              <li className="third">
                <a href="#testimonials">
                  <span>Testimonials</span>
                </a>
              </li>
              <li className="third">
                <a href="#contact">
                  <span>Contact</span>
                </a>
              </li>

              <li className="more" ref={moreButtonRef}>
                <a href="#" onClick={toggleDropdown}>
                  <span>More</span>
                  <FaCaretDown aria-hidden="true" />
                </a>
                <ul
                  ref={dropdownRef}
                  className={`dropdown ${showDropdown ? "show" : ""}`}
                >
                  <li className="first">
                    <a href="#testimonials">Testimonials</a>
                  </li>
                  <li className="first">
                    <a href="#contact">Contact</a>
                  </li>
                  <li className="second">
                    <a href="#services">
                      <span>Services</span>
                    </a>
                  </li>
                  <li className="second">
                    <a href="#portfolio">
                      <span>Portfolio</span>
                    </a>
                  </li>
                  <li className="second">
                    <a href="#testimonials">
                      <span>Testimonials</span>
                    </a>
                  </li>
                  <li className="second">
                    <a href="#contact">
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav-action">
              <li>
                <a href="mailto:info@nextinn.com" aria-label="Email">
                  <IoMdMail aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8093796052"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <img src={wpIcon} alt="WhatsApp icon" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? "top-0" : ""}`}>
        <AiOutlineClose
          className="close-icon"
          aria-label="Close menu"
          strokeWidth={100}
          onClick={closeMobileMenu}
        />
        <div className="mobile-menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ul className="nav-action">
            <li>
              <a href="mailto:info@nextinn.com" aria-label="Email">
                <IoMdMail aria-hidden="true" className="mail" />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/8093796052"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <img src={wpIcon} alt="WhatsApp icon" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Header;
