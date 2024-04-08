import { Container } from '@mui/material';
import { DATA_CONSTANTS } from '../constants/data.ts';

export interface ICoordinate {
  lat: number;
  lng: number;
}
export function LocationPage() {
  return (
    <div className={'min-h-[300px] py-32 text-slate-800'}>
      <Container>
        <div className={'grid lg:grid-cols-2 gap-5'}>
          <div className={'font-nunito text-center grid gap-10'}>
            <div>
              <h1 className={'text-center lg:text-4xl text-2xl '} data-aos-delay="0" data-aos-duration="1000" data-aos="fade-up">
                Marriage Contract
              </h1>
              <div data-aos-delay="0" data-aos-duration="1000" data-aos="fade-up" className={'lg:text-2xl'}>
                Friday, April 19th, 2024
              </div>
              <div data-aos-delay="0" data-aos-duration="1000" data-aos="fade-up">
                at 14:00
              </div>
              <div data-aos-delay="0" data-aos-duration="1000" data-aos="fade-up">
                Gereja GMPU Gloria Bitung, Pardo, Bitung Tengah
              </div>
            </div>
            <div
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos="fade-up"
              className={'bg-slate-200 lg:h-[300px] h-[200px] w-full border border-slate-500'}
            >
              <iframe
                src={DATA_CONSTANTS.URL_CHURCH}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a href={DATA_CONSTANTS.DIRECTION_CHURCH} target="_blank" rel="noreferrer">
              <button
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos="fade-up"
                className={
                  'border w-fit mx-auto border-slate-800 py-2 px-6 bg-black/10 font-semibold uppercase hover:bg-black/20 active:bg-black/10 duration-300'
                }
              >
                Open Directions
              </button>
            </a>
          </div>

          <div className={'h-1 w-full bg-slate-200 rounded-full lg:hidden my-10'}></div>
          <div className={'font-nunito text-center grid gap-10'}>
            <div>
              <h1 data-aos-delay="300" data-aos-duration="1000" data-aos="fade-up" className={'text-center lg:text-4xl text-2xl '}>
                RECEPTION
              </h1>
              <div data-aos-delay="300" data-aos-duration="1000" data-aos="fade-up" className={'lg:text-2xl'}>
                Friday, April 19th, 2024
              </div>
              <div data-aos-delay="300" data-aos-duration="1000" data-aos="fade-up">
                at 17:00
              </div>
              <div data-aos-delay="300" data-aos-duration="1000" data-aos="fade-up">
                Manembo nambo, Lorong depan Alfamart Manembo nembo bawah
              </div>
            </div>
            <div
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos="fade-up"
              className={'bg-slate-200 lg:h-[300px] h-[200px] w-full border border-slate-500'}
            >
              <iframe
                src={DATA_CONSTANTS.RECEPTION_URL}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <a href={DATA_CONSTANTS.DIRECTION_RECEPTION} target="_blank" rel="noreferrer">
                <button
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos="fade-up"
                  className={
                    'border border-slate-800 py-2 px-6 bg-black/10 font-semibold uppercase hover:bg-black/20 active:bg-black/10 duration-300'
                  }
                >
                  Open Directions
                </button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
