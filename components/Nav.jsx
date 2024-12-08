"use client";
import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    name: "home",
    icon: "Главная",
  },
  {
    name: "journey",
    icon: "Клиентам",
  },
  {
    name: "work",
    icon: "Документы",
  },
  {
    name: "about",
    icon: "О нас",
  },
];

const Nav = ({ containerStyles, listStyles, linkStyles, spy }) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {links.map((link, index) => {
          return (
            <ScrollLink
              spy={spy}
              key={index}
              activeClass="active"
              to={link.name}
              smooth
              className={linkStyles}
            >
              {link.icon}
            </ScrollLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
