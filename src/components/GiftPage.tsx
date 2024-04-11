import { Container, IconButton } from '@mui/material';
import { CopyAllOutlined } from '@mui/icons-material';
import { ASSETS } from '../assets/assets';

export function GiftPage() {
  const bankNumber = '7707701276';
  const handleCopyText = () => {
    navigator.clipboard
      .writeText(bankNumber)
      .then(() => {
        alert('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
      });
  };
  return (
    <Container className="py-10">
      <div className="text-center font-nunito grid gap-3">
        <h1 data-aos-duration="1000" data-aos="fade-up" className="text-3xl">
          Sending Gift
        </h1>
        <div data-aos-duration="1000" data-aos="fade-up" className="text-xl italic">
          Transfer directly to the account below
        </div>
        <div data-aos-duration="1000" data-aos="fade-up" className="flex items-center text-2xl justify-center gap-3">
          <img src={ASSETS.BNI} className="h-[16px]" />
          <div>{bankNumber}</div>
          <IconButton onClick={handleCopyText}>
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
