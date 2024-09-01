"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

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
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const router = useRouter();

  if (!router) {
    return null; // Handle the case where router is not available
  }

  const { pathname, push } = router;

  const handleNavigation = (path) => {
    push(path);
  };

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-10 text-center text-2xl">
          <h1
            className="text-4xl font-semibold cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            Kundan<span className="text-accent">.</span>
          </h1>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <span
              key={index}
              onClick={() => handleNavigation(link.path)}
              className={`${
                link.path === pathname
                  ? "text-accent border-b-2 border-accent"
                  : "text-xl capitalize hover:text-accent transition-all"
              } cursor-pointer`}
            >
              {link.name}
            </span>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
