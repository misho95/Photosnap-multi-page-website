import img from "../assets/home/desktop/create-and-share.jpg";
import img2 from "../assets/home/desktop/beautiful-stories.jpg";
import img3 from "../assets/home/desktop/designed-for-everyone.jpg";
import Icon from "../assets/shared/desktop/arrow.svg";

const IndexPage = () => {
  return (
    <main>
      <section>
        <div className="h-fit sm:h-[650px] flex flex-col sm:flex-row">
          <div className="w-full sm:hidden">
            <img
              src={img}
              className="w-full object-cover h-[294px] sm:h-[650px] text-white "
            />
          </div>
          <div className="bg-black w-full sm:w-3/4 text-white flex justify-center items-center p-[30px] ">
            <div className="w-[387px] flex flex-col gap-[30px]">
              <h1 className="text-[32px] sm:text-[40px]">
                CREATE AND SHARE YOUR PHOTO STORIES.
              </h1>
              <p className="text-[15px] text-white/60">
                Photosnap is a platform for photographers and visual
                storytellers. We make it easy to share photos, tell stories and
                connect with others.
              </p>
              <button className="flex items-center gap-[15px] hover:underline text-[12px] font-bold">
                <span>GET AN INVITE</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                  <g fill="none" fillRule="evenodd" stroke="#fff">
                    <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full hidden sm:flex">
            <img
              src={img}
              className="w-full object-cover h-[650px] text-white "
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;
