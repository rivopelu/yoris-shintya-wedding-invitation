import { Pause, PlayArrow } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import { ASSETS } from './assets/assets.ts';
import BottomContentPage from './components/BottomContentPage.tsx';
import CommentnPage from './components/CommentnPage.tsx';
import { DatePage } from './components/DatePage.tsx';
import FooterComponent from './components/FooterComponent.tsx';
import { GiftPage } from './components/GiftPage.tsx';
import { Home } from './components/Home.tsx';
import { InformationPage } from './components/InformationPage.tsx';
import { LocationPage } from './components/LocationPage.tsx';
import MomentPage from './components/MomentPage.tsx';
import { OnboardPopup } from './components/OnboardPopup.tsx';

function App() {
  const audioUrl = '/assets/song.mp3';

  const [open, setOpen] = useState<boolean>(true);
  const [playAudio, setPlayAudio] = useState<boolean>(false);

  const audio = new Audio(audioUrl);

  useEffect(() => {
    AOS.init({
      mirror: true,
    });
  }, []);

  function onclickOpen() {
    audio.play();
    setPlayAudio(true);
    setOpen(false);
  }

  function onClickPlayPause() {
    if (playAudio) {
      audio.pause();
      setPlayAudio(false);
    } else {
      audio.play();
      setPlayAudio(true);
    }
  }
  return (
    <>
      <section
        className={`${open ? 'hidden' : ' '}  bg-fixed bg-contain relative`}
        style={{
          backgroundImage: `url(${ASSETS.BG})`,
        }}
      >
        <div className="fixed bg-slate-300 bottom-3 right-3 rounded-full">
          <IconButton onClick={onClickPlayPause}>{playAudio ? <Pause /> : <PlayArrow />}</IconButton>
        </div>
        <OnboardPopup onClickOpen={onclickOpen} open={open} />
        <>
          <Home />
          <InformationPage />
          <DatePage />
          <LocationPage />
          <MomentPage />
          <GiftPage />
          <BottomContentPage />
          <CommentnPage />
          <FooterComponent />
        </>
      </section>
    </>
  );
}

export default App;
