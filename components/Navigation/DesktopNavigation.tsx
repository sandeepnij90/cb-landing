import { Logo } from "../Logo/Logo";

export const DesktopNavigation = () => {
  return (
    <nav className="flex w-full px-3 h-20 items-center justify-between max-w-7xl mx-auto ">
      <Logo />
      <ul className="flex md:gap-2 lg:gap-6 xl:gap-10 text-gray-600 text-sm">
        <li>The problem</li>
        <li>Process</li>
        <li>Outcomes</li>
        <li>Results</li>
        <li>Outcomes</li>
        <li>Pricing</li>
      </ul>
      <button className="bg-slate-800 text-white px-6 py-3 rounded-full text-sm hover:bg-indigo-400 transition-all duration-300 cursor-pointer">
        Book strategy call
      </button>
    </nav>
  );
};
