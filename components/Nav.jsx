"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  // {
  //   name: "contact",
  //   path: "/contact",
  // },
];

const Nav = () => {
  const router = useRouter();
  const { push } = router;
  const pathname = usePathname();

  const handleNavigation = (path) => {
    push(path);
  };
  console.log("pathname", pathname);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <span
            onClick={() => handleNavigation(link.path)}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all cursor-pointer`}
          >
            {link.name}
          </span>
        );
      })}
    </nav>
  );
};

export default Nav;
