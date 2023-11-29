import { animated, useSpring } from "@react-spring/web";
import Logo from "../../assets/shared/desktop/logo.svg";

const Footer = () => {
  const animatedPage = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      mass: 5,
      friction: 120,
      tension: 100,
    },
  });

  return (
    <animated.footer style={{ ...animatedPage }} className={"bg-black"}>
      <div>
        <img src={Logo} className="w-[170px] h-[16px]" />
      </div>
    </animated.footer>
  );
};

export default Footer;
