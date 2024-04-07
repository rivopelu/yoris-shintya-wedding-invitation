import { Container, IconButton } from "@mui/material";
import { CopyAllOutlined } from "@mui/icons-material";

export function GiftPage() {
  const bankNumber = "7707701276";
  return (
    <Container className="py-10">
      <div className="text-center font-nunito text-slate-700 grid gap-3">
        <h1 className="text-3xl">Sending Gift</h1>
        <div className="text-xl italic">
          Transfer directly to the account below: Bank BNI
        </div>
        <div className="flex items-center text-2xl justify-center">
          <div>{bankNumber}</div>
          <IconButton>
            <CopyAllOutlined />
          </IconButton>
        </div>
        <div className="text-center text-3xl">Priskilla Shintya Matindas</div>
      </div>
    </Container>
  );
}
