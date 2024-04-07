import { Button, Container, TextField } from "@mui/material";

function CommentnPage() {
  return (
    <Container>
      <div className="h-1 bg-slate-400/10 my-10"></div>
      <div className="min-h-[500px]">
        <h1 className={"text-center mb-10 text-2xl italic"}>Wishes</h1>
        <div className="grid gap-3">
          <TextField
            size={"small"}
            label={"Name"}
            placeholder={"insert your name"}
            sx={{ background: "rgba(255,255,255,0.2)" }}
          />{" "}
          <TextField
            size={"small"}
            label={"wishes"}
            multiline={true}
            rows={4}
            placeholder={"ex : congrats shintya and yoris"}
            sx={{ background: "rgba(255,255,255,0.2)" }}
          />
          <Button variant={"outlined"} color={"inherit"}>
            Submit
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default CommentnPage;
