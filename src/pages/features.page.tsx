import { animated, useSpring } from "@react-spring/web";
import StoriesComponent from "../components/index/stories.component";
import BetaFooter from "../components/shared/beta.footer";

const FeaturesPage = () => {
  const animatedPage = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      mass: 5,
      friction: 120,
      tension: 100,
    },
  });

  const data = [
    {
      id: 1,
      img: "assets/features/desktop/responsive.svg",
      title: "100% Responsive",
      text: `No matter which the device you’re on, our site is fully responsive and
        stories look beautiful on any screen.`,
    },
    {
      id: 2,
      img: "assets/features/desktop/no-limit.svg",
      title: "No Photo Upload Limit",
      text: `Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.`,
    },
    {
      id: 3,
      img: "assets/features/desktop/embed.svg",
      title: "Available to Embed",
      text: `Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. `,
    },
    {
      id: 4,
      img: "/assets/features/desktop/custom-domain.svg",
      title: "Custom Domain",
      text: `With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!`,
    },
    {
      id: 5,
      img: "/assets/features/desktop/boost-exposure.svg",
      title: "Boost Your Exposure",
      text: `Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.`,
    },
    {
      id: 6,
      img: "/assets/features/desktop/drag-drop.svg",
      title: "Drag & Drop Image",
      text: `Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.`,
    },
  ];

  return (
    <main>
      <animated.section style={{ ...animatedPage }}>
        <StoriesComponent
          type="primary"
          side="left"
          img="/assets/features/desktop/hero.jpg"
          text="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
          title="FEATURES"
          button={false}
        />

        <div className="w-full flex justify-center items-center my-[150px]">
          <div className=" w-full lg:w-9/12 flex flex-wrap gap-[40px] justify-center">
            {data.map((d) => {
              return (
                <div
                  key={d.id}
                  className="w-[350px] h-[236px] justify-center items-center flex flex-col gap-[20px] text-center"
                >
                  <img
                    src={d.img}
                    className="w-[72px] h-[72px] mb-[50px]"
                    loading="lazy"
                    alt={d.img}
                  />
                  <h1 className="text-[18px] font-semibold">{d.title}</h1>
                  <p className="text-black/60 text-[15px]">{d.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <BetaFooter />
      </animated.section>
    </main>
  );
};

export default FeaturesPage;
