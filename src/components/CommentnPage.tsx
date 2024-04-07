import { Avatar, Button, Container, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { CrudService } from "../service/CrudService.ts";

import { v4 as uuidv4 } from "uuid";
import firebase from "firebase/app";
import * as console from "console";

function CommentnPage() {
  const uuid = uuidv4();
  const crudService = new CrudService();
  const [valueName, setValueName] = useState<string>("");
  const [valueWish, setValueWish] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  function onClick() {
    crudService
      .create({ name: valueName, wish: valueWish, id: uuid })
      .then(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    console.log(loading);
  }, []);

  function onChanges(e: firebase.database.DataSnapshot) {
    const dataParse: any[] = [];
    e.forEach(function (v) {
      const value = v.val();
      const key = v.key;
      dataParse.push({ ...value, key: key });
    });
    setData(dataParse);
  }

  useEffect(() => {
    crudService.getAll().on("value", onChanges);
    return () => {
      crudService.getAll().off("value", onChanges);
    };
  }, []);

  return (
    <Container>
      <div className="h-1 bg-slate-400/10 my-10"></div>
      <div className="min-h-[500px]">
        <h1 className={"text-center mb-10 text-2xl italic"}>Wishes</h1>
        <div className="grid gap-3">
          <TextField
            onChange={(e) => setValueName(e?.target?.value)}
            value={valueName}
            size={"small"}
            label={"Name"}
            placeholder={"insert your name"}
            sx={{ background: "rgba(255,255,255,0.2)" }}
          />{" "}
          <TextField
            onChange={(e) => setValueWish(e?.target?.value)}
            value={valueWish}
            size={"small"}
            label={"wishes"}
            multiline={true}
            rows={4}
            placeholder={"ex : congrats shintya and yoris"}
            sx={{ background: "rgba(255,255,255,0.2)" }}
          />
          <Button onClick={onClick} variant={"outlined"} color={"inherit"}>
            Submit
          </Button>
        </div>
        <div className={"mt-10"}>
          {data.map((item, i) => (
            <div key={i} className={"border-b pb-2 "}>
              <div className={"flex items-center gap-2"}>
                <Avatar sx={{ height: 30, width: 30 }} />
                <div>{item?.name}</div>
              </div>
              <div>{item?.wish}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default CommentnPage;
