"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { urlFor } from "../lib/sanity";
import { useRouter } from "next/navigation";

const Navigation = ({ siteSettings }) => {
  // Use Sanity data if available, otherwise fallback
  const settings = siteSettings || {
    title: "كلية الطب << بنات القاهرة >> جامعة الأزهر",
    titleEn: "Faculty of Medicine for Girls",
    logo: null,
  };
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  
  const navItems = [
    { name: "الرئيسية", href: "/" },
    { name: "نبذة عن الكلية", href: "/about" },
    { name: "أقسام الكلية", href: "/departments" },
    { name: "البرامج الدراسية", href: "/programs" },
    { name: "وحدات الكلية", href: "/units" },
    { name: "الأخبار", href: "/news" },
    { name: "اتصل بنا", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/75">
      <div className="section-container ">
        <div className="flex justify-between items-center py-5">
          {/* Logo Section */}
          <div className="flex items-center space-x-reverse space-x-4">
            {settings.logo?.asset ? (
              <img
                src={urlFor(settings.logo).width(48).height(48).url()}
                alt={settings.logo.alt || settings.title}
                className="w-12 h-12 ml-4 rounded-full object-cover"
              />
            ) : (
              <img
                onClick={() => router.push("/")}
                src="/logo.jpg"
                alt="logo"
                className="w-12 h-12 ml-4 rounded-full object-cover cursor-pointer"
              />
            )}
            <div>
              <h1 className="text-[14px] font-semibold text-gray-900 leading-tight">
                {settings.title}
              </h1>
              <p className="text-xs font-medium text-gray-600 tracking-wide uppercase">
                {settings.titleEn}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-reverse space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative transition-colors duration-200 font-medium text-sm py-2 px-1 group mr-[28px] ${
                    isActive 
                      ? 'text-gray-900' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 transform transition-transform duration-200 origin-left ${
                    isActive 
                      ? 'scale-x-100' 
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none transition-colors duration-200 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-6 h-0.5 bg-current transition-all duration-200 ${isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-current transition-all duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-current transition-all duration-200 ${isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-80 pb-6" : "max-h-0"}`}
        >
          <div className="border-t border-white/30 pt-4">
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block py-3 px-4 rounded-full transition-all duration-200 font-medium ${
                      isActive 
                        ? 'text-gray-900 bg-white/70' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-white/50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
