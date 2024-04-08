import { useLocation } from 'react-router-dom';
import { ASSETS } from '../assets/assets.ts';
import { DATA_CONSTANTS } from '../constants/data.ts';
import { Box, Fade, Modal } from '@mui/material';
import { useEffect } from 'react';

export function OnboardPopup(props: IProps) {
  const location = useLocation();
  const searchParams = new URLSearchParams(useLocation().search);
  const to = searchParams.get('to');
  const style = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100vw',
    bgcolor: 'black',
  };

  useEffect(() => {
    if (to) {
      console.log(to);
    }
  }, [to]);

  function component() {
    return (
      <div
        className={`w-screen  h-[100vh]  bg-bottom bg-cover`}
        style={{
          backgroundImage: `url(${ASSETS.COVER})`,
        }}
      >
        <div className={'h-full w-full flex items-center justify-evenly text-slate-300 flex-col py-[7vh] lg:bg-black/60 bg-black/80 '}>
          <div className={'flex flex-col text-center items-center gap-3 '}>
            <img data-aos="fade-up" data-aos-duration="1000" className={'h-[100px] sm:h-[200px] w-fit '} src={ASSETS.LV_1} alt={'love'} />

            <div data-aos-delay="50" data-aos-duration="1000" data-aos="fade-up">
              {"Hello, You're Invited"}
            </div>
            <div data-aos-delay="120" data-aos-duration="1000" data-aos="fade-up" className={'text-2xl font-bold '}>
              The Wedding Of
            </div>
            <div data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up" className={'tangerine-bold  text-6xl lg:text-[120px]'}>
              {DATA_CONSTANTS.GROOM_NICK_NAME} & {DATA_CONSTANTS.BRIDE_NICK_NAME}
            </div>
          </div>

          <div
            data-aos-delay="240"
            data-aos-duration="1000"
            data-aos="fade-up"
            className={'flex flex-col text-center border-b w-full  text-xl p-5 rounded-md border-slate-700/50'}
          >
            {to && <div>{'To : ' + to}</div>}
          </div>
          <div>
            <button
              data-aos-delay="240"
              data-aos-duration="1000"
              onClick={props.onClickOpen}
              className={'border mt-4 px-5 py-2 border-white/20 bg-white/5 hover:bg-white/10 active:bg-white/20 duration-200'}
            >
              OPEN INVITATION
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Modal
      open={props.open}
      closeAfterTransition
      slotProps={{
        backdrop: {},
      }}
    >
      <Fade in={props.open}>
        <Box sx={style}>{component()}</Box>
      </Fade>
    </Modal>
  );
}

interface IProps {
  open: boolean;
  onClickOpen: () => void;
}
