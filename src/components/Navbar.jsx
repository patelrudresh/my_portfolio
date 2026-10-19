import { useEffect, useState } from "react";
import { Menu, X, Phone, Home, User, Briefcase, Code2, Settings, Mail, Projector, } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/images/logo.png"; // Change filename if needed

const navItems = [
  {
    title: "Home",
    href: "#home",
    icon: Home,
  },
  {
    title: "About",
    href: "#about",
    icon: User,
  },
  {
    title: "Experience",
    href: "#experience",
    icon: Briefcase,
  },
  {
    title: "Skills",
    href: "#skills",
    icon: Code2,
  },
  {
    title: "Projects",
    href: "#projects",
    icon: Projector,
  },
  {
    title: "Services",
    href: "#services",
    icon: Settings,
  },
  {
    title: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPosition = window.scrollY + 200;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(navItems[i].href);

        if (section && scrollPosition >= section.offsetTop) {
          setActive(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Shared click handler: updates the URL hash AND scrolls smoothly
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActive(href);

    // Updates the address bar without a jumpy native jump
    window.history.pushState(null, "", href);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full">

        <div
          className={`max-w-full mx-auto px-3 sm:px-8 transition-all duration-300 ${scrolled
              ? "bg-white/50 backdrop-blur-xl shadow-2xl"
              : "bg-white shadow-xl"
            }`}
        >
          <div className="h-[72px] flex items-center justify-between px-4 sm:px-8">

            {/* Logo */}

            <a
              href="home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-0"
            >
              <img
                src={logo}
                alt="logo"
                className="w-16 h-26 object-contain sm:w-15 sm:h-40"
              />

              <div>

                <h1 className="text-2xl font-serif tracking-[0.2em]">
                  RUDRESH
                </h1>

                <div className="w-35 h-px bg-[#A45D42] mt-2"></div>

              </div>

            </a>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex  items-center  gap-1">

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-1.5 py-2 text-lg font-medium transition-all duration-300  ${active === item.href
                    ? "text-black"
                    : "text-black hover:text-yellow-600"
                    }`}
                >
                  {item.title}

                  {active === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute left-0 bottom-0 w-full h-[2px] bg-[#A45D42] rounded-full"
                    />
                  )}
                </a>
              ))}

            </nav>

            {/* Right Button */}

            <div className="hidden lg:flex items-center justify-end w-56  -translate-x-14">
              <button className=" font-semibold hidden md:flex  px-7 py-3  items-center gap-2  border-2 border-[#A45D42] rounded-3xl text-[#A45D42] hover:bg-[#A45D42]/20 transition-all">
                <Phone className="w-4 h-4" />

                <span >Call Now </span>
              </button>

            </div>

            {/* Mobile */}

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden"
            >
              <Menu size={34} />
            </button>

          </div>

        </div>

      </header>
      {/* ================= MOBILE SIDEBAR ================= */}

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/25 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Sidebar */}

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="fixed top-3 right-0 bottom-70 w-[88%] max-w-[350px] rounded-[30px]
bg-white/15
backdrop-blur-[24px]
border border-white/20
shadow-[0_20px_60px_rgba(0,0,0,0.25)]
overflow-hidden
z-50
lg:hidden
"
            >
              {/* Header */}

              <div className="flex items-center justify-between px-6 h-10 border-b border-gray-200">

                <div className="flex items-center gap-3">

                  <img
                    src={logo}
                    alt="logo"
                    className="w-14 h-14 object-contain"
                  />

                  <div>

                    <h2 className="text-2xl font-serif tracking-[0.2em]">
                      RUDRESH
                    </h2>

                    <div className="w-36 h-px bg-[#A45D42] mt-1"></div>

                  </div>

                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="hover:rotate-90 transition"
                >
                  <X size={32} />
                </button>

              </div>

              {/* Navigation */}

              <nav className="px-5 mt-6 space-y-2">

                {navItems.map((item) => {

                  const Icon = item.icon;

                  return (
                    <a
                      key={item.href}
                      href={item.href}

                      onClick={(e) => {
                        handleNavClick(e, item.href);
                        setOpen(false);
                      }}
                      className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${active === item.href
                        ? "bg-[#A45D42] text-[#A45D42]/700 border-l-4 border-black-500"
                        : "hover:bg-gray-100 text-black"
                        }`}
                    >
                      <Icon size={22} />

                      <span className="text-lg">
                        {item.title}
                      </span>
                    </a>
                  );
                })}

              </nav>

              {/* Bottom Button */}
              <div className="absolute left-6 right-6 bottom-4">
                <a
                  href="tel:+916263502087"
                  className="flex items-center justify-center gap-3
h-16
rounded-4xl
bg-[#A45D42]/25
text-[#111111]
text-xl
border-red-500
font-semibold
hover:bg-[#A45D42]
hover:text-black
transition-all"
                >
                  <Phone size={24} />
                  Call Now
                </a>
              </div>

            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
