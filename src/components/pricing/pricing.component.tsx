import { useState } from "react";
import PricingPlan from "./pricing.plan";
import icon from "../../assets/pricing/desktop/check.svg";

const PricingComponent = () => {
  const [monthly, setMonthly] = useState(true);
  const [active, setAactive] = useState("Pro");

  const data = [
    {
      title: "UNLIMITED STORY POSTING",
      basic: true,
      pro: true,
      business: true,
    },
    {
      title: "UNLIMITED PHOTO UPLOAD",
      basic: true,
      pro: true,
      business: true,
    },

    {
      title: "EMBEDDING CUSTOM CONTENT",
      basic: false,
      pro: true,
      business: true,
    },
    {
      title: "CUSTOMIZE METADATA",
      basic: false,
      pro: true,
      business: true,
    },
    {
      title: "ADVANCED METRICS",
      basic: false,
      pro: false,
      business: true,
    },
    {
      title: "PHOTO DOWNLOADS",
      basic: false,
      pro: false,
      business: true,
    },
    {
      title: "SEARCH ENGINE INDEXING",
      basic: false,
      pro: false,
      business: true,
    },
    {
      title: "CUSTOM ANALYTICS",
      basic: false,
      pro: false,
      business: true,
    },
  ];

  return (
    <div className="w-full flex justify-center items-center my-[150px]">
      <div className="w-11/12 flex flex-col gap-[45px]">
        <div className="flex items-center justify-center gap-[32px] text-[18px] font-DMSans font-semibold">
          <p className={`${monthly ? "text-black" : "text-black/50"}`}>
            Monthly
          </p>
          <span
            onClick={() => setMonthly(!monthly)}
            className={`w-[64px] h-[32px] ${
              monthly ? "bg-[#DFDFDF]" : "bg-black"
            } block relative rounded-full`}
          >
            <button
              onClick={() => setMonthly(!monthly)}
              className={`w-[24px] h-[24px] ${
                monthly ? "bg-black" : "bg-white"
              } rounded-full absolute top-1/2 -translate-y-1/2 ${
                monthly ? "left-[4px]" : "left-[36px]"
              } duration-300`}
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
        <div className="flex justify-center items-center select-none font-DMSans">
          <table className="w-[731px] ">
            <tr className="border-b-[1px] border-black">
              <th className="pb-[25px] text-left">THE FEATURES</th>
              <th className="w-[140px] text-center">BASIC</th>
              <th className="w-[140px] text-center">PRO</th>
              <th className="w-[140px] text-center">BUSINESS</th>
            </tr>
            {data.map((d) => {
              return (
                <tr className="border-b-[1px] border-[#D8D8D8]">
                  <td className="py-[25px] font-semibold">{d.title}</td>
                  <td align="center" className="w-[140px]">
                    {d.basic && <img src={icon} />}
                  </td>
                  <td align="center" className="w-[140px]">
                    {d.pro && <img src={icon} />}
                  </td>
                  <td align="center" className="w-[140px]">
                    {d.business && <img src={icon} />}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
