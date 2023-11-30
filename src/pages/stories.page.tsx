import { animated, useSpring } from "@react-spring/web";
import ArrowButton from "../components/shared/arrow.button";
import StoriesComponent from "../components/stories/stories.components";

const StoriesPage = () => {
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
    <main>
      <animated.section style={{ ...animatedPage }}>
        <div className="w-full h-[650px] bg-[url('/assets/stories/desktop/moon-of-appalacia.jpg')] bg-no-repeat bg-cover bg-right flex items-center pl-[115px]">
          <div className="text-white font-DMSans w-[387px] flex flex-col gap-[30px]">
            <p className="text-[12px]">LAST MONTH’S FEATURED STORY</p>
            <h1 className="text-[40px]">HAZY FULL MOON OF APPALACHIA</h1>
            <span className="text-[13px] flex gap-[5px] ">
              <p className="text-white/70">March 2nd 2020</p>
              <p>by John Appleseed</p>
            </span>
            <p className="text-[15px] text-white/60">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>
            <ArrowButton type="primary" />
          </div>
        </div>
        <StoriesComponent />
      </animated.section>
    </main>
  );
};

export default StoriesPage;
