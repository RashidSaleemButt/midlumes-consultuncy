import React from "react";
import { AppContext } from "../App";
import ToggleTheme from "./ToggleTheme/ToggleTheme";
import "./ToggleTheme/ToggleTheme.css";
import useScrollBlock from "../services/useScrollBlock";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

export default function Nav() {
  const navRefs = React.useRef([]);
  const { homeVisibility, sectionRefs, isBigWindow } = React.useContext(AppContext);
  const navClass = homeVisibility ? "nav--absolute" : "nav--fixed";

  const [blockScroll, allowScroll] = useScrollBlock();

  const [showMenu, setShowMenu] = React.useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = React.useState(false);

  function toggleMenu() {
    if (!isBigWindow) {
      setShowMenu((prevShowMenu) => !prevShowMenu);
      setShowServicesDropdown(false);
      if (showMenu) {
        allowScroll();
      } else {
        blockScroll();
      }
    }
  }

  function toggleServicesDropdown(e) {
    e.preventDefault();
    setShowServicesDropdown(prev => !prev);
  }
  
  function closeMenuAndDropdown() {
    if (!isBigWindow) {
      setShowMenu(false);
      allowScroll();
    }
    setShowServicesDropdown(false);
  }

  const menu_icon = showMenu ? (
    <FaTimes onClick={toggleMenu} className="menu--icon" />
  ) : (
    <FiMenu onClick={toggleMenu} className="menu--icon" />
  );

  const navStyles =
    showMenu || isBigWindow ? { display: "flex" } : { display: "none" };

  const [visibleSections, setVisibleSections] = React.useState({
    home: false,
    about: false,
    services: false,
    bookings: false, // Removed packages
    contact: false,
  });
  const visibleSectionsArray = Object.entries(visibleSections);

  React.useEffect(() => {
    const visibleSectionOptions = {
      rootMargin: "-90px 0px 0px",
    };
    const visibleSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        setVisibleSections((prevVisibleSections) => {
          return { ...prevVisibleSections, [`${id}`]: entry.isIntersecting };
        });
      });
    }, visibleSectionOptions);
    sectionRefs.current.forEach((element) => {
      visibleSectionObserver.observe(element);
    });
  }, [sectionRefs]);

  React.useEffect(() => {
    let isActiveCheck = false;
    visibleSectionsArray.forEach((section, index) => {
      if (section[1] && !isActiveCheck) {
        if (navRefs.current[index]) {
          navRefs.current[index].classList.add("active");
        }
        isActiveCheck = true;
      } else {
        if (navRefs.current[index]) {
          navRefs.current[index].classList.remove("active");
        }
      }
    });
  }, [visibleSections, visibleSectionsArray]);

  return (
    <nav className={`${navClass}`}>
      <div className="container">
        <div className="nav--logo">
          <a className="nav--link" href="#home">
            MIDLUMES<span className="orange--word">CONSULTANCY</span>
          </a>
        </div>
        <ul style={navStyles} className="nav--list slidein">
          <li>
            <a
              className="nav--link"
              href="#home"
              ref={(element) => (navRefs.current[0] = element)}
              onClick={closeMenuAndDropdown}
            >
              home
            </a>
          </li>
          <li>
            <a
              className="nav--link"
              href="#about"
              ref={(element) => (navRefs.current[1] = element)}
              onClick={closeMenuAndDropdown}
            >
              about
            </a>
          </li>
          <li className="dropdown--container">
            <a
              className="nav--link dropdown--toggle"
              href="#"
              onClick={toggleServicesDropdown}
              ref={(element) => (navRefs.current[2] = element)}
            >
              services <FaCaretDown />
            </a>
            {showServicesDropdown && (
              <ul className="dropdown--menu">
                <li>
                  <a onClick={closeMenuAndDropdown} className="nav--link" href="#education">
                    Education
                  </a>
                </li>
                <li>
                  <a onClick={closeMenuAndDropdown} className="nav--link" href="#technology">
                    Technology
                  </a>
                </li>
                <li>
                  <a onClick={closeMenuAndDropdown} className="nav--link" href="#digital-marketing">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a onClick={closeMenuAndDropdown} className="nav--link" href="#freelancing">
                    Free Lancing
                  </a>
                </li>
              </ul>
            )}
          </li>
          {/* Removed Packages link */}
          <li>
            <a
              className="nav--link"
              href="#bookings"
              ref={(element) => (navRefs.current[3] = element)} // Updated index
              onClick={closeMenuAndDropdown}
            >
              bookings
            </a>
          </li>
          <li>
            <a
              className="nav--link"
              href="#contact"
              ref={(element) => (navRefs.current[4] = element)} // Updated index
              onClick={closeMenuAndDropdown}
            >
              contact
            </a>
          </li>
        </ul>
        {isBigWindow ? (
          <ToggleTheme />
        ) : (
          <div className="nav--rightside-group">
            <ToggleTheme />
            {menu_icon}
          </div>
        )}
      </div>
    </nav>
  );
}