interface PropsType {
  title: string;
  text: string;
  price: number;
  active: string;
  setActive: (arg: string) => void;
  monthly: boolean;
}

const PricingPlan = ({
  title,
  text,
  price,
  active,
  setActive,
  monthly,
}: PropsType) => {
  return (
    <div
      className={`${
        active === title ? "lg:h-[470px]" : " lg:h-[407px] bg-[#F5F5F5]"
      } w-full lg:w-[350px] h-[407px] sm:h-[270px] bg-black relative font-DMSans flex flex-col gap-[20px] justify-center items-center sm:items-start lg:items-center p-[40px]`}
    >
      {active === title && (
        <div className="h-[6px] w-full absolute top-0 left-0 bg-gradient-to-t from-[#FFC593] via-[#BC7198] to-[#5A77FF]" />
      )}
      <h2
        className={`text-[24px] ${
          active === title ? "text-white" : "text-black"
        } font-bold`}
      >
        {title}
      </h2>
      <p
        className={`${
          active === title ? "text-white/60" : "text-black/60"
        } text-[15px] text-center sm:text-left w-[270px] lg:w-full lg:text-center`}
      >
        {text}
      </p>
      <span className="static sm:absolute top-[45px] right-[45px] lg:static">
        <h1
          className={`text-[40px] ${
            active === title ? "text-white" : "text-black"
          } flex gap-[7px]`}
        >
          <p>$</p>
          <p>{monthly ? price : Math.round((price * 12 * 20) / 100)}.00</p>
        </h1>
        <p
          className={`${
            active === title ? "text-white/60" : "text-black/60"
          } text-right text-[15px]`}
        >
          {monthly ? "per month" : "per year"}
        </p>
      </span>
      <button
        onClick={() => setActive(title)}
        className={`w-[270px] h-[40px] ${
          active === title ? "bg-white text-black" : "bg-black text-white "
        } font-bold`}
      >
        PICK PLAN
      </button>
    </div>
  );
};

export default PricingPlan;
