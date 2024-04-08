import { Avatar, Button, CircularProgress, Container, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { CrudService } from '../service/CrudService.ts';

import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase/app';

function CommentnPage() {
  const uuid = uuidv4();
  const crudService = new CrudService();
  const [valueName, setValueName] = useState<string>('');
  const [valueWish, setValueWish] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  function onClick() {
    if (valueName && valueWish) {
      crudService.create({ name: valueName, wish: valueWish, id: uuid }).then(() => {
        setLoading(false);
        setValueName('');
        setValueWish('');
        fetch();
      });
    }
  }

  function onChanges(e: firebase.database.DataSnapshot) {
    const dataParse: any[] = [];
    e.forEach(function (v) {
      const value = v.val();
      const key = v.key;
      dataParse.push({ ...value, key: key });
    });
    setData(dataParse.reverse());
  }

  function fetch() {
    crudService.getAll().on('value', onChanges);
    return () => {
      crudService.getAll().off('value', onChanges);
    };
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="backdrop-blur-[2px]">
        <div className="h-1 bg-slate-400/10 mb-10"></div>

        <Container>
          <div className="min-h-[500px]">
            <h1 className={'text-center mb-10 text-2xl italic'}>Wishes</h1>
            <div className="grid gap-3">
              <TextField
                onChange={(e) => setValueName(e?.target?.value)}
                value={valueName}
                size={'small'}
                label={'Name'}
                placeholder={'insert your name'}
                sx={{ background: 'rgba(255,255,255,0.2)' }}
              />
              <TextField
                onChange={(e) => setValueWish(e?.target?.value)}
                value={valueWish}
                size={'small'}
                label={'wishes'}
                multiline={true}
                rows={4}
                placeholder={'ex : congrats shintya and yoris'}
                sx={{ background: 'rgba(255,255,255,0.2)' }}
              />
              <Button disabled={valueName && valueWish ? false : true} onClick={onClick} variant={'outlined'} color={'inherit'}>
                <div className="gap-3 flex items-center">
                  <div> Submit</div> {loading && <CircularProgress size={16} />}
                </div>
              </Button>
            </div>
            <div className={'mt-10 grid gap-4 max-h-[300px] overflow-y-auto'}>
              {data.map((item, i) => (
                <div key={i} className={'border border-slate-400  p-4 rounded-md '}>
                  <div className={'flex items-center gap-2'}>
                    <Avatar sx={{ height: 30, width: 30 }} />
                    <div>{item?.name}</div>
                  </div>
                  <div className="mt-3  pl-10">{item?.wish}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default CommentnPage;
