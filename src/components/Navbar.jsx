import { useEffect, useRef, useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const RefNave = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        RefNave.current.style.background = "rgba(255, 255, 255, 0.2)";
        RefNave.current.style.padding = "12px 10px";
        RefNave.current.style.borderRadius = "15px";
        RefNave.current.style.width = "1250px";
      } else {
        RefNave.current.style.background = "transparent";
        RefNave.current.style.width = "1300px";
        RefNave.current.style.padding = "24px 10px";
      }
    });
  }, []);

  return (
    <nav
      ref={RefNave}
      className="w-[1300px] flex py-[24px] justify-between items-center navbar fixed z-50 "
    >
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"/>
      <div>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] relative group ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              <span className="bg-secondary border border-secondary absolute left-0 bottom-[-3px] w-full h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
