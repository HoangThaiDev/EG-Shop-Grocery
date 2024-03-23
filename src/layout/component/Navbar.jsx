// Import Modules
import React, { useRef } from "react";
import "../css/navbar.css";

// Import Components
import { Col, Row, Dropdown, ConfigProvider } from "antd";
import { Link, NavLink } from "react-router-dom";
import logoEGShop from "../../assets/logos/NavbarLogo.png";

// Import Icons
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";

export default function Navbar() {
  // Value of Dropdowm Menu
  const itemShop = [
    {
      key: "1",
      label: (
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu__item active" : "menu__item"
          }
          to="/about-us"
        >
          About Us
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu__item active" : "menu__item"
          }
          to="/FAQs"
        >
          FAQs
        </NavLink>
      ),
    },
  ];

  const itemBlog = [
    {
      key: "1",
      label: (
        <NavLink className="linkPage" to="blogs">
          Blogs
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink className="linkPage" to="blog-standar">
          Blog Standar
        </NavLink>
      ),
    },
  ];

  // Create + use Hooks
  const showMenuDropDownRef = useRef();

  // Create + use event handlers
  const showMenuHandler = () => {
    showMenuDropDownRef.current.classList.toggle("active");
  };

  const closeMenuDropdownHandler = () => {
    showMenuDropDownRef.current.classList.toggle("active");
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          controlPaddingHorizontal: 15,
          controlItemBgHover: "#dcdcdc",
          fontFamily: `'Roboto Slab', serif`,
          colorText: "rgb(38, 70, 83)",
        },
      }}
    >
      <div id="navbar">
        <div className="navbar-container">
          <Row className="navbar-row">
            <Col
              className="navbar-col navbar__menu"
              xl={10}
              lg={10}
              md={10}
              sm={10}
              xs={7}
            >
              <div className="menu__list">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "menu__item active" : "menu__item"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive ? "menu__item active" : "menu__item"
                  }
                >
                  Shop
                  <IoIosArrowDown className="menu__item--dropdown" />
                </NavLink>
                <Dropdown
                  menu={{
                    items: itemShop,
                  }}
                  className="menu__item"
                >
                  <p>
                    Pages
                    <IoIosArrowDown className="menu__item--dropdown" />
                  </p>
                </Dropdown>
                <Dropdown
                  menu={{
                    items: itemBlog,
                  }}
                  className="menu__item"
                >
                  <p>
                    Blogs
                    <IoIosArrowDown className="menu__item--dropdown" />
                  </p>
                </Dropdown>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "menu__item active" : "menu__item"
                  }
                >
                  Contact
                </NavLink>
              </div>
              <div className="menu-dropdown">
                <IoIosMenu
                  className="icon-mobile icon-mobile__dropdown"
                  onClick={showMenuHandler}
                />
                <AiOutlineUser className="icon-mobile icon-mobile__user" />
              </div>
            </Col>
            <Col
              className="navbar-col navbar__logo"
              xl={4}
              lg={4}
              md={4}
              sm={4}
              xs={7}
            >
              <img src={logoEGShop} alt="logo-shop" />
            </Col>
            <Col
              className="navbar-col navbar__user"
              xl={10}
              lg={10}
              md={10}
              sm={10}
              xs={7}
            >
              <div className="user__list">
                <NavLink
                  to="/search"
                  className={({ isActive }) =>
                    isActive ? "user__item active" : "user__item"
                  }
                >
                  <IoSearchSharp className="user__item--search" />
                </NavLink>
                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    isActive ? "user__item active" : "user__item"
                  }
                >
                  <AiOutlineUser className="user__item--user" />
                </NavLink>
                <NavLink
                  to="/user"
                  className={({ isActive }) =>
                    isActive ? "user__item active" : "user__item"
                  }
                >
                  <IoIosMenu className="user__item--menu" />
                </NavLink>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive ? "user__item active" : "user__item"
                  }
                >
                  <IoCartOutline className="user__item--cart" />
                  <span className="cart-quantity">10</span>
                </NavLink>
                <div className="shop-contact">
                  <LuPhoneCall className="icon-contact" />
                  <div className="contact__info">
                    <b className="contact__info--title">Hot Line Number</b>
                    <b className="contact__info--numberPhone">
                      +880 176 1111 456
                    </b>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="menu__list-dropdown" ref={showMenuDropDownRef}>
            <h2 className="menu__title">EG SHOP</h2>
            <IoCloseSharp
              className="icon__menu-close"
              onClick={closeMenuDropdownHandler}
            />
            <ul>
              <li>
                <Link to="/">
                  <FaHome className="menu__item-icon" /> HOME
                </Link>
              </li>
              <li>
                <Link to="/shop">
                  <IoCartOutline className="menu__item-icon" /> SHOP
                </Link>
              </li>
              <li>
                <Link to="/blogs">
                  <FaBlogger className="menu__item-icon" /> BLOGS
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <LuPhoneCall className="menu__item-icon" /> CONTACT
                </Link>
              </li>
              <li>
                <Link to="/user">
                  <AiOutlineUser className="menu__item-icon" /> USER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
