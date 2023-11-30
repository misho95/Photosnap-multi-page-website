import ArrowButton from "../shared/arrow.button";

interface PropsType {
  title: string;
  text: string;
  img: string;
  type: string;
  side: string;
}

const StoriesComponent = ({ title, text, img, type, side }: PropsType) => {
  return (
    <div className="h-fit sm:h-[650px] flex flex-col sm:flex-row">
      <div className="w-full sm:hidden">
        <img
          src={img}
          className="w-full object-cover h-[294px] sm:h-[650px] text-white "
        />
      </div>
      {side === "right" && (
        <div className="w-full hidden sm:flex">
          <img
            src={img}
            className="w-full object-cover h-[650px] text-white "
          />
        </div>
      )}
      <div
        className={`${
          type === "primary" ? "bg-black text-white" : "bg-white text-black"
        }  w-full sm:w-3/4  flex justify-center items-center p-[30px] relative`}
      >
        {type === "primary" && (
          <div className="h-[3px] sm:h-1/2 w-[128px] sm:w-[3px] absolute top-0 sm:left-0 left-[40px] sm:top-1/2 sm:-translate-y-1/2 bg-gradient-to-r sm:bg-gradient-to-t from-[#FFC593] via-[#BC7198] to-[#5A77FF]"></div>
        )}
        <div className="w-[387px] flex flex-col gap-[30px]">
          <h1 className="text-[32px] sm:text-[40px]">{title}</h1>
          <p
            className={`text-[15px] ${
              type === "primary" ? "text-white/60" : "text-black/60"
            }`}
          >
            {text}
          </p>
          <ArrowButton type={type} />
        </div>
      </div>
      {side === "left" && (
        <div className="w-full hidden sm:flex">
          <img
            src={img}
            className="w-full object-cover h-[650px] text-white "
          />
        </div>
      )}
    </div>
  );
};

export default StoriesComponent;
