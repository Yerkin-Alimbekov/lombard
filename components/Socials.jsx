import Link from "next/link";
import { FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { RiInstagramFill, RiTiktokFill } from "react-icons/ri";

const socials = [
  {
    icon: <RiInstagramFill />,
    path: "https://www.instagram.com/lombard.progress",
  },
  {
    icon: <RiTiktokFill />,
    path: "https://www.tiktok.com/@lombard.progress",
  },
  {
    icon: <FaFacebookF />,
    path: "https://www.facebook.com/61566355602181",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/@LombardProgress",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
