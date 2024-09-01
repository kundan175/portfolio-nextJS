import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/kundan175" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/kundan-singh99",
  },
  {
    icon: <FaStackOverflow />,
    path: "https://stackoverflow.com/users/26775806/kundan-kumar",
  },
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
