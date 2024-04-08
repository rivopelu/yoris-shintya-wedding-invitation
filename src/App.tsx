import { OnboardPopup } from './components/OnboardPopup.tsx';
import { Home } from './components/Home.tsx';
import { InformationPage } from './components/InformationPage.tsx';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import { ASSETS } from './assets/assets.ts';
import { DatePage } from './components/DatePage.tsx';
import { LocationPage } from './components/LocationPage.tsx';
import { GiftPage } from './components/GiftPage.tsx';
import MomentPage from './components/MomentPage.tsx';
import CommentnPage from './components/CommentnPage.tsx';

function App() {
  const audioUrl = '/assets/song.mp3';

  const [open, setOpen] = useState<boolean>(true);

  const audio = new Audio(audioUrl);

  useEffect(() => {
    AOS.init({
      mirror: true,
    });
  }, []);

  function onclickOpen() {
    audio.play();
    setOpen(false);
  }
  return (
    <>
      <section
        className={`${open ? 'hidden' : ' '}  bg-fixed bg-contain`}
        style={{
          backgroundImage: `url(${ASSETS.BG})`,
        }}
      >
        <OnboardPopup onClickOpen={onclickOpen} open={open} />
        <>
          <Home />
          <InformationPage />
          <DatePage />
          <LocationPage />
          <MomentPage />
          <GiftPage />
          <CommentnPage />
        </>
      </section>
    </>
  );
}

export default App;
