import { Container } from "@mui/material";
import { ASSETS } from "../assets/assets.ts";

export function InformationPage() {
  function brideData() {
    return (
      <div className={"flex items-center flex-col gap-5"}>
        <img
          className={"w-[200px]"}
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos="fade-up"
          src={ASSETS.TOYO}
          alt={"yoris"}
        />
        <div
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos="fade-up"
          className={"tangerine-bold text-black lg:text-4xl text-3xl font-bold"}
        >
          Priskilla Shintya Matindas
        </div>
        <div>
          <div
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos="fade-up"
            className={"italic mb-3"}
          >
            daughter of
          </div>
          <div
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos="fade-up"
            className={"font-nunito"}
          >
            JOIKE MATINDAS
          </div>
          <div
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos="fade-up"
            className={"font-nunito"}
          >
            &
          </div>
          <div
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos="fade-up"
            className={"font-nunito"}
          >
            HELDA PELU
          </div>
        </div>
      </div>
    );
  }

  function groomData() {
    return (
      <div className={"flex items-center flex-col gap-5"}>
        <img
          className={"w-[200px]"}
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos="fade-up"
          src={ASSETS.YORIS}
          alt={"yoris"}
        />
        <div
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos="fade-up"
          className={"tangerine-bold text-black lg:text-4xl text-3xl font-bold"}
        >
          Yoris Yohanes Molodiang S.Ak
        </div>
        <div>
          <div
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos="fade-up"
            className={"italic mb-3"}
          >
            Son of
          </div>
          <div
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos="fade-up"
            className={"font-nunito"}
          >
            Alm. YAKOBUS MOLODIANG
          </div>
          <div
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos="fade-up"
            className={"font-nunito"}
          >
            &
          </div>
          <div
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos="fade-up"
            className={"font-nunito"}
          >
            SOFIA LIS DALOMA
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={" min-h-[100vh] my-10 "}>
      <Container>
        <div className={"text-center text-slate-700"}>
          <div className={"py-10 lg:py-32"}>
            <h1
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos="fade-up"
              className={"tangerine-regular text-5xl font-bold  lg:text-[80px]"}
            >
              The Beloved of
            </h1>
            <div
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              Once in awhile, right in the middle of an ordinary life, love
              gives us a fairy tale.
            </div>
          </div>
          <div className={"flex flex-col lg:flex-row justify-between"}>
            {groomData()}
            <div
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos="fade-up"
              className={
                "flex items-center lg:w-fit justify-center my-7 lg:my-0"
              }
            >
              <img alt={"or2"} src={ASSETS.OR_2} />
            </div>
            {brideData()}
          </div>
        </div>
      </Container>
    </div>
  );
}
