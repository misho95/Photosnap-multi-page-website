import { useEffect, useState } from "react";

interface PropsType {
  date: string;
  title: string;
  author: string;
  img: string;
  divSize: number;
}

const StorieCard = ({ date, title, author, img, divSize }: PropsType) => {
  const [cardWidth, setCardWidth] = useState<number>(360);
  const [cardHeight, setCardHeight] = useState<number>(500);

  useEffect(() => {
    if (!divSize) {
      return;
    }
    if (divSize > 768) {
      const customWidth = divSize / 4;
      const customHeight = customWidth / 0.72;
      setCardWidth(customWidth);
      setCardHeight(customHeight);
      return;
    }

    if (divSize >= 768 && divSize > 375) {
      const customWidth = divSize / 2;
      const customHeight = customWidth / 0.72;
      setCardWidth(customWidth);
      setCardHeight(customHeight);
      return;
    }

    if (divSize <= 390) {
      const customWidth = divSize;
      const customHeight = customWidth / 0.72;
      setCardWidth(customWidth);
      setCardHeight(customHeight);
      return;
    }
  }, [divSize]);

  return (
    <div
      className={`bg-contain flex items-end justify-center p-[40px] hover:-translate-y-[38px] relative group hover:z-30`}
      style={{
        width: cardWidth,
        height: cardHeight,
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="text-white font-DMSans  w-full relative">
        <div className="absolute z-30 w-full bottom-0 flex flex-col gap-[10px]">
          <p className="text-[13px]">{date}</p>
          <h1 className="text-[18px]">{title}</h1>
          <p className="text-[13px]">by {author}</p>
          <div className="h-[1px] w-full bg-white/25" />
          <button className="w-full flex justify-between items-center hover:underline">
            <span>READ STORY</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke={`#fff`}>
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div className=" absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent z-20" />
      <div className="group-hover:block hidden h-[6px] w-full absolute bottom-0  bg-gradient-to-r sm:bg-gradient-to-t from-[#FFC593] via-[#BC7198] to-[#5A77FF]"></div>
    </div>
  );
};

export default StorieCard;
