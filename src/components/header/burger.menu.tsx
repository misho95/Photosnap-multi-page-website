import { Link } from "react-router-dom";
import { links } from "./links";
import { useLockBodyScroll } from "@uidotdev/usehooks";

const BurgerMenu = () => {
  useLockBodyScroll();
  return (
    <nav className="bg-black/50 fixed top-[55px] left-0 w-full h-screen font-DMSans">
      <div className="bg-white p-[40px] flex flex-col gap-[20px]">
        <ul className="flex flex-col items-center gap-[15px]">
          {links.map((l, index) => {
            return (
              <li
                key={index}
                className="font-semibold text-[15px] text-black hover:text-black/30"
              >
                <Link to={l.link}>{l.title.toUpperCase()}</Link>
              </li>
            );
          })}
        </ul>
        <div className="w-full h-[1px] bg-black/25"></div>
        <button className="bg-black hover:bg-[#DFDFDF] h-[48px] text-white hover:text-black text-[15px] font-semibold">
          GET AN INVITE
        </button>
      </div>
    </nav>
  );
};

export default BurgerMenu;
