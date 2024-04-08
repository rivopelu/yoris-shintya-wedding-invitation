import { Container } from '@mui/material';

function FooterComponent() {
  return (
    <footer className="py-10 mt-16 bg-slate-800/10">
      <Container>
        <div className="grid gap-2 text-slate-600 font-nunito text-center">
          <a href="https://www.rivopelu.com" className="border-b">
            © 2024 Rivo Pelu - All Rights Reserved
          </a>
          <h1>For Yoris And Shintya</h1>
        </div>
      </Container>
    </footer>
  );
}

export default FooterComponent;
