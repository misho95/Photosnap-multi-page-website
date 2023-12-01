import { useEffect, useRef, useState } from "react";
import StorieCard from "./storie.card";
import { useWindowSize } from "@uidotdev/usehooks";

const StoriesComponent = () => {
  const containerRef = useRef<HTMLInputElement>(null);
  const windowSize = useWindowSize();
  const [divSize, setDivSize] = useState<number>(0);

  useEffect(() => {
    if (containerRef.current) {
      const size = containerRef.current.offsetWidth;
      setDivSize(+size);
    }
  }, [windowSize]);

  const data = [
    {
      id: 1,
      date: "April 16th 2020",
      title: "The Mountains",
      author: "John Appleseed",
      img: "/assets/stories/desktop/mountains.jpg",
    },
    {
      id: 2,
      date: "April 14th 2020",
      title: "Sunset Cityscapes",
      author: "Benjamin Cruz",
      img: "/assets/stories/desktop/cityscapes.jpg",
    },
    {
      id: 3,
      date: "April 11th 2020",
      title: "18 Days Voyage",
      author: "Alexei Borodin",
      img: "/assets/stories/desktop/18-days-voyage.jpg",
    },
    {
      id: 4,
      date: "April 9th 2020",
      title: "Architecturals",
      author: "Samantha Brooke",
      img: "/assets/stories/desktop/architecturals.jpg",
    },
    {
      id: 5,
      date: "April 7th 2020",
      title: "World Tour 2019",
      author: "Timothy Wagner",
      img: "/assets/stories/desktop/world-tour.jpg",
    },
    {
      id: 6,
      date: "April 3rd 2020",
      title: "Unforeseen Corners",
      author: "William Malcolm",
      img: "/assets/stories/desktop/unforeseen-corners.jpg",
    },
    {
      id: 7,
      date: "March 29th 2020",
      title: "King on Africa: Part II",
      author: "Tim Hillenburg",
      img: "/assets/stories/desktop/king-on-africa.jpg",
    },
    {
      id: 8,
      date: "March 21st 2020",
      title: "The Trip to Nowhere",
      author: "Felicia Rourke",
      img: "/assets/stories/desktop/trip-to-nowhere.jpg",
    },
    {
      id: 9,
      date: "March 19th 2020",
      title: "Rage of The Sea",
      author: "Mohammed Abdul",
      img: "/assets/stories/desktop/rage-of-the-sea.jpg",
    },
    {
      id: 10,
      date: "March 16th 2020",
      title: "Running Free",
      author: "Michelle",
      img: "/assets/stories/desktop/running-free.jpg",
    },
    {
      id: 11,
      date: "March 11th 2020",
      title: "Behind the Waves",
      author: "Lamarr Wilson",
      img: "/assets/stories/desktop/behind-the-waves.jpg",
    },
    {
      id: 12,
      date: "March 9th 2020",
      title: "Calm Waters",
      author: "Samantha Brooke",
      img: "/assets/stories/desktop/calm-waters.jpg",
    },
    {
      id: 13,
      date: "March 5th 2020",
      title: "The Milky Way",
      author: "Benjamin Cruz",
      img: "/assets/stories/desktop/milky-way.jpg",
    },
    {
      id: 14,
      date: "March 4th 2020",
      title: "Night at The Dark Forest",
      author: "Mohammed Abdul",
      img: "/assets/stories/desktop/dark-forest.jpg",
    },
    {
      id: 15,
      date: "March 1st 2020",
      title: "Somwarpet’s Beauty",
      author: "Michelle",
      img: "/assets/stories/desktop/somwarpet.jpg",
    },
    {
      id: 16,
      date: "February 25th 2020",
      title: "Land of Dreams",
      author: "William Malcolm",
      img: "/assets/stories/desktop/land-of-dreams.jpg",
    },
  ];

  return (
    <div className="flex w-full flex-wrap" ref={containerRef}>
      {data.map((d) => {
        return (
          <StorieCard
            key={d.id}
            date={d.date}
            title={d.title}
            author={d.author}
            img={d.img}
            divSize={divSize}
          />
        );
      })}
    </div>
  );
};

export default StoriesComponent;
