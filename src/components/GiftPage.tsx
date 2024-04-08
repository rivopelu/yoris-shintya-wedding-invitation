import { Container, IconButton } from '@mui/material';
import { CopyAllOutlined } from '@mui/icons-material';
import { ASSETS } from '../assets/assets';

export function GiftPage() {
  const bankNumber = '7707701276';
  return (
    <Container className="py-10">
      <div className="text-center font-nunito text-slate-700 grid gap-3">
        <h1 data-aos-duration="1000" data-aos="fade-up" className="text-3xl">
          Sending Gift
        </h1>
        <div data-aos-duration="1000" data-aos="fade-up" className="text-xl italic">
          Transfer directly to the account below
        </div>
        <div data-aos-duration="1000" data-aos="fade-up" className="flex items-center text-2xl justify-center gap-3">
          <img src={ASSETS.BNI} className="h-[16px]" />
          <div>{bankNumber}</div>
          <IconButton>
            <CopyAllOutlined />
          </IconButton>
        </div>
        <div data-aos-duration="1000" data-aos="fade-up" className="text-center text-3xl">
          Priskilla Shintya Matindas
        </div>
      </div>
    </Container>
  );
}
