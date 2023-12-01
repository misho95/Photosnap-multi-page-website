import { animated, useSpring } from "@react-spring/web";
import StoriesComponent from "../components/index/stories.component";

const IndexPage = () => {
  const data = [
    {
      id: 1,
      title: "CREATE AND SHARE YOUR PHOTO STORIES.",
      text: `  Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.`,
      img: "/assets/home/desktop/create-and-share.jpg",
      type: "primary",
      side: "left",
    },
    {
      id: 2,
      title: "CREATE AND SHARE YOUR PHOTO STORIES.",
      text: `  Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.`,
      img: "/assets/home/desktop/beautiful-stories.jpg",
      type: "secondary",
      side: "right",
    },
    {
      id: 3,
      title: "CREATE AND SHARE YOUR PHOTO STORIES.",
      text: `  Photosnap is a platform for photographers and visual storytellers.
                We make it easy to share photos, tell stories and connect with
                others.`,
      img: "/assets/home/desktop/designed-for-everyone.jpg",
      type: "secondary",
      side: "left",
    },
  ];

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
        {data.map((d) => {
          return (
            <StoriesComponent
              key={d.id}
              title={d.title}
              text={d.text}
              img={d.img}
              type={d.type}
              side={d.side}
              button={true}
            />
          );
        })}
      </animated.section>
    </main>
  );
};

export default IndexPage;
