import { Container } from '@mui/material';
import { DATA_CONSTANTS } from '../constants/data';

function BottomContentPage() {
  const data = [
    'Kel. Angkol - Molodiang',
    'Kel. Sikome - Molodiang',
    'Kel. Molodiang - Mangadil',
    'Kel. Waturandang - Abdullah',
    'Kel. Loway - Londo',
    'Kel. Siliwir - Batasina',
    'Kel. Daloma - Rompis',
    'Kel. Kodoatie - Salindeho',
    'Kel. Bogar - Kansil',
  ];
  const dataBride = [
    'Kel. Matindas - Mantiri',
    'Kel. Simanjuntak - Matindas',
    'Kel. Wullur - Tangkudung',
    'Kel. Tambuwun - Tangkudung',
    'Kel. Pelu - Bangun',
    'Kel. Pelu - Dalope',
    'Kel. Kalangit - Pelu',
    'Kel. Berdame - Kalebos',
  ];
  return (
    <div className="py-16">
      <Container>
        <div className="grid gap-1">
          <h1 className="text-center text-4xl italic mb-10" data-aos-duration="1000" data-aos="fade-up">
            cordially invite
          </h1>
          <div className="grid lg:grid-cols-2 text-center">
            <ul className="grid  gap-3 ">
              {data.map((item, i) => (
                <div className="text-xl" key={i} data-aos-duration="1000" data-aos={i % 2 == 0 ? 'fade-right' : 'fade-left'}>
                  {item}
                </div>
              ))}
            </ul>
            <div className="h-1 bg-slate-400/30 rounded-full lg:hidden my-10" data-aos-duration="1000" data-aos="fade-up"></div>
            <ul className="grid  gap-3  ">
              {dataBride.map((item, i) => (
                <div className="text-xl" data-aos-duration="1000" data-aos={i % 2 == 0 ? 'fade-right' : 'fade-left'} key={i}>
                  {item}
                </div>
              ))}
            </ul>
          </div>
          <h1 className="text-center text-4xl mb-10 italic mt-16" data-aos-duration="1000" data-aos="fade-up">
            Together in Happiness
          </h1>
          <div data-aos-duration="1000" data-aos="fade-up" className={'tangerine-bold  text-6xl lg:text-[120px] text-center'}>
            {DATA_CONSTANTS.GROOM_NICK_NAME} & {DATA_CONSTANTS.BRIDE_NICK_NAME}
          </div>
          <div
            className="justify-between mt-10 lg:text-4xl text-2xl text-center flex items-center flex-col  italic lg:grid gap-3 lg:grid-cols-2"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            <div data-aos-duration="1000" data-aos="fade-left" className="text-center">
              Kel. Molodiang - Daloma
            </div>
            <div data-aos-duration="1000" data-aos="fade-right" className="text-center">
              Kel. Matindas - Pelu
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BottomContentPage;
