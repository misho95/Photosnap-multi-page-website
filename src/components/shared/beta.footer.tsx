import ArrowButton from "./arrow.button";

const BetaFooter = () => {
  return (
    <div className="w-full h-[280px] flex justify-center items-center  bg-[url('/assets/shared/desktop/bg-beta.jpg')] bg-no-repeat bg-cover relative">
      <div className="h-[3px] w-[128px] absolute top-0 left-[40px] bg-gradient-to-r from-[#FFC593] via-[#BC7198] to-[#5A77FF] sm:hidden"></div>
      <div className="w-10/12 flex flex-col gap-[30px]  sm:flex-row justify-between items-center">
        <h1 className="text-white text-[40px] font-DMSans sm:w-[400px] select-none">
          WE’RE IN BETA. GET YOUR INVITE TODAY!
        </h1>
        <ArrowButton type="primary" />
      </div>
    </div>
  );
};

export default BetaFooter;
