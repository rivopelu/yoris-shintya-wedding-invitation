import { ASSETS } from "../assets/assets.ts";
import { DATA_CONSTANTS } from "../constants/data.ts";

export function Home() {
  return (
    <div
      className={`text-white h-[100vh] bg-fixed lg:bg-center w-full bg-cover`}
      style={{
        backgroundImage: `url(${ASSETS.COVER_HOME})`,
      }}
    >
      <div
        className={
          "h-full w-full bg-black/70 flex flex-col lg:justify-center justify-evenly items-center text-center lg:py-10 "
        }
      >
        <div className={"grid gap-3"}>
          <div
            className={"lg:text-2xl text-sm  font-bold "}
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            The Wedding Of
          </div>

          <div
            className={"tangerine-bold  text-6xl lg:text-[200px]"}
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            {DATA_CONSTANTS.GROOM_NICK_NAME} & {DATA_CONSTANTS.BRIDE_NICK_NAME}
          </div>
          <div
            className={"tangerine-regular  text-2xl mb-3"}
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            Friday, 19th April 2024
          </div>
        </div>
        <div
          className={
            "font-nunito flex flex-col items-center justify-center  gap-3 mx-10"
          }
        >
          <div
            className={"opacity-30"}
            data-aos-delay="250"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            <img src={ASSETS.OR_1} alt={"or"} className={" lg:hidden"} />
          </div>

          <div data-aos-delay="250" data-aos-duration="1000" data-aos="fade-up">
            And they twain shall be one flesh: so then they are no more twain,
            but one flesh.
          </div>
          <div
            data-aos-delay="450"
            data-aos-duration="1000"
            data-aos="fade-up"
            className={"text-slate-300/50 text-xs"}
          >
            Mark 10:8 KJV
          </div>
        </div>
      </div>
    </div>
  );
}
