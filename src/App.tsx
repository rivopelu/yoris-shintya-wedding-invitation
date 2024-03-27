import { OnboardPopup } from "./components/OnboardPopup.tsx";
import { Home } from "./components/Home.tsx";
import { InformationPage } from "./components/InformationPage.tsx";
import { useEffect, useState } from "react";
import AOS from "aos";
import { ASSETS } from "./assets/assets.ts";
import { DatePage } from "./components/DatePage.tsx";
import { LocationPage } from "./components/LocationPage.tsx";

function App() {
  const [open, setOpen] = useState<boolean>(true);
  useEffect(() => {
    AOS.init({
      mirror: true,
    });
  }, []);

  function onclickOpen() {
    setOpen(false);
  }
  return (
    <section
      className={`${open ? "hidden" : " "}  bg-fixed bg-contain`}
      style={{
        backgroundImage: `url(${ASSETS.BG})`,
      }}
    >
      <OnboardPopup onClickOpen={onclickOpen} open={open} />

      {!open && (
        <>
          <Home />
          <InformationPage />
          <DatePage />
          <LocationPage />
        </>
      )}
    </section>
  );
}

export default App;
