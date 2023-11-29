import Logo from "../../assets/shared/desktop/logo.svg";
import menu from "../../assets/shared/mobile/menu.svg";
import menuClose from "../../assets/shared/mobile/close.svg";

import { Link } from "react-router-dom";
import { links } from "./links";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import BurgerMenu from "./burger.menu";
import { useWindowSize } from "@uidotdev/usehooks";

const Header = () => {
  const windowSize = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (windowSize.width && windowSize.width > 639) {
      showMenu && setShowMenu(false);
    }
  }, [windowSize]);

  const animatedHeader = useSpring({
    from: { y: -200 },
    to: { y: 0 },
    config: {
      mass: 5,
      friction: 20,
      tension: 30,
    },
  });

  const [animateIcon, runAnimateIcon] = useSpring(() => ({
    from: { opacity: 1 },
    config: {
      mass: 5,
      friction: 20,
      tension: 30,
    },
  }));

  const iconAnimationHandler = () => {
    runAnimateIcon.start({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    });
  };

  return (
    <>
      {showMenu && <BurgerMenu />}
      <animated.header
        style={{ ...animatedHeader }}
        className="w-full flex justify-center font-DMSans"
      >
        <div className=" w-full lg:w-10/12 p-[20px] flex justify-between items-center">
          <Link to={"/"} onClick={() => showMenu && setShowMenu(false)}>
            <img src={Logo} className="w-[170px] h-[16px]" />
          </Link>
          <ul className="hidden sm:flex gap-[40px]">
            {links.map((l, index) => {
              return (
                <li key={index} className="font-semibold">
                  <Link to={l.link}>{l.title.toUpperCase()}</Link>
                </li>
              );
            })}
          </ul>
          <button className="hidden sm:block w-[158px] h-[40px] bg-black text-white font-semibold">
            GET AN INVITE
          </button>
          <button
            onClick={() => {
              setShowMenu(!showMenu), iconAnimationHandler();
            }}
            className="sm:hidden"
          >
            <animated.img
              style={{ ...animateIcon }}
              src={showMenu ? menuClose : menu}
            />
          </button>
        </div>
      </animated.header>
    </>
  );
};

export default Header;
