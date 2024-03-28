import { Container } from "@mui/material";
import { DATA_CONSTANTS } from "../constants/data.ts";

export interface ICoordinate {
  lat: number;
  lng: number;
}
export function LocationPage() {
  return (
    <div className={"min-h-[300px] py-10 text-slate-800"}>
      <Container>
        <div className={"grid lg:grid-cols-2 gap-5"}>
          <div className={"font-nunito text-center grid gap-10"}>
            <div>
              <h1 className={"text-center lg:text-4xl text-2xl "}>
                Marriage Contract
              </h1>
              <div className={"lg:text-2xl"}>Friday, April 19th, 2021</div>
              <div>at 14:00</div>
              <div>Gereja GMPU Gloria Bitung, Pardo, Bitung Tengah</div>
            </div>
            <div
              className={
                "bg-slate-200 lg:h-[300px] h-[200px] w-full border border-slate-500"
              }
            >
              <iframe
                src={DATA_CONSTANTS.URL_CHURCH}
                width="100%"
                height="100%"
                style={{ border: "none" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div
            className={"h-1 w-full bg-slate-200 rounded-full lg:hidden my-10"}
          ></div>
          <div className={"font-nunito text-center grid gap-10"}>
            <div>
              <h1 className={"text-center lg:text-4xl text-2xl "}>RECEPTION</h1>
              <div className={"lg:text-2xl"}>Friday, April 19th, 2021</div>
              <div>at 18:00</div>
              <div>Manembo nambo bawah</div>
            </div>
            <div
              className={
                "bg-slate-200 lg:h-[300px] h-[200px] w-full border border-slate-500"
              }
            >
              <iframe
                src={DATA_CONSTANTS.RECEPTION_URL}
                width="100%"
                height="100%"
                style={{ border: "none" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
