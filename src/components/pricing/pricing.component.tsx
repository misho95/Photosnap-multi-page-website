import { useState } from "react";
import PricingPlan from "./pricing.plan";

const PricingComponent = () => {
  const [monthly, setMonthly] = useState(true);
  const [active, setAactive] = useState("Pro");
  return (
    <div className="w-full flex justify-center items-center my-[150px]">
      <div className="w-11/12 flex flex-col gap-[45px]">
        <div className="flex items-center justify-center gap-[32px] text-[18px] font-DMSans font-semibold">
          <p className={`${monthly ? "text-black" : "text-black/50"}`}>
            Monthly
          </p>
          <span
            onClick={() => setMonthly(!monthly)}
            className="w-[64px] h-[32px] bg-[#DFDFDF] block relative rounded-full"
          >
            <button
              onClick={() => setMonthly(!monthly)}
              className={`w-[24px] h-[24px] bg-black rounded-full absolute top-1/2 -translate-y-1/2 ${
                monthly ? "left-[4px]" : "left-[36px]"
              } duration-200`}
            />
          </span>
          <p className={`${!monthly ? "text-black" : "text-black/50"}`}>
            Yearly
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[50px]">
          <PricingPlan
            title={"Basic"}
            text={
              "Includes basic usage of our platform. Recommended for new and aspiring photographers."
            }
            price={19}
            active={active}
            setActive={setAactive}
            monthly={monthly}
          />
          <PricingPlan
            title={"Pro"}
            text={
              "More advanced features available. Recommended for photography veterans and professionals."
            }
            price={39}
            active={active}
            setActive={setAactive}
            monthly={monthly}
          />
          <PricingPlan
            title={"Business"}
            text={
              "Additional features available such as more detailed metrics. Recommended for business owners."
            }
            price={99}
            active={active}
            setActive={setAactive}
            monthly={monthly}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
