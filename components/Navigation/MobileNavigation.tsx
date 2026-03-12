"use client";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Logo } from "../Logo/Logo";

const navItems = [
  "The problem",
  "Process",
  "Outcomes",
  "Results",
  "Pricing",
];

export const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-3 border-b border-slate-200">
      <div className="flex items-center justify-between gap-3">
        <Logo compact />
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          className="w-11 h-11 rounded-xl border border-slate-300 text-slate-700 flex items-center justify-center cursor-pointer hover:bg-slate-100 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="text-xl" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="pt-4 pb-2">
          <ul className="flex flex-col gap-3 text-slate-700">
            {navItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button className="mt-4 w-full bg-slate-800 text-white px-6 py-3 rounded-full text-sm hover:bg-indigo-400 transition-all duration-300 cursor-pointer">
            Book strategy call
          </button>
        </div>
      )}
    </nav>
  );
};
