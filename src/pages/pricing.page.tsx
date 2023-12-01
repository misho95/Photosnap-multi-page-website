import { animated, useSpring } from "@react-spring/web";
import StoriesComponent from "../components/index/stories.component";
import BetaFooter from "../components/shared/beta.footer";
import PricingComponent from "../components/pricing/pricing.component";

const PricingPage = () => {
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
        <StoriesComponent
          type="primary"
          side="left"
          img="/assets/pricing/desktop/hero.jpg"
          text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
          title="PRICING"
          button={false}
        />
        <PricingComponent />
        <BetaFooter />
      </animated.section>
    </main>
  );
};

export default PricingPage;
