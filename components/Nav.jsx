"use client";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
const links = [
  {
    name: "",
    icon: "",
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
         <Link href={'https://go.2gis.com/gi5fqd'}>
         <button className="btn btn-accent1 mb-1" src="assets/hero/whatsapp.svg">2ГИС</button>
         </Link>
         <Link href={'+77750073395'}>
         <button className="btn btn-accent2 mb-1">Телефон</button>
         </Link>
         <Link 
          href={"https://wa.me/+77014191890"} smooth>
          <button className="btn btn-accent mb-1">WhatsApp</button>
         </Link>
      </ul>
    </nav>
  );
};

export default Nav;
