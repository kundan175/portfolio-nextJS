import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/KundanHerath" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/Kundan-herath-b82399215/",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/channel/UCpGrjJuDRmQjnoVfRIp1ovw",
  },
  { icon: <FaTwitter />, path: "https://x.com/Kundan_Herath" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
