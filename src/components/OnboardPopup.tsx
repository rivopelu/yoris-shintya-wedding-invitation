import {motion} from "framer-motion";
import {ASSETS} from "../assets/assets.ts";
import {DATA_CONSTANTS} from "../constants/data.ts";
import {useState} from "react";

export function OnboardPopup() {
  const [active, setActive] = useState<boolean>(true);
  return (
    <div className={`absolute w-full  h-[100dvh]  bg-bottom bg-cover bg-red-700`} style={{
      backgroundImage: `url(${ASSETS.COVER})`,

    }}>
      <div
        className={"h-full w-full flex items-center justify-between text-slate-300 flex-col py-[7dvh] bg-black/70 "}>
        <div className={"flex flex-col text-center items-center gap-3 "}>
          <motion.img initial={{opacity: 0, scale: 0,}}
                      animate={{scale: 1, opacity: 0.7}}
                      transition={{duration: 1.2, delay:0.7 }}
                      className={'h-[100px] sm:h-[200px] w-fit '}
                      src={ASSETS.LV_1} alt={"love"}/>

        <motion.div
          initial={{ y: 200, opacity: 0,}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 1, delay : 0.4}}
        >
          {"Hello, You're Invited"}
        </motion.div>
          <motion.div initial={{ y: 200, opacity: 0,}}
                      animate={{y: 0, opacity: 1}}
                      transition={{duration: 1, delay : 0.7}}
                      className={"text-2xl "}>THE WEDDING OF
          </motion.div>
          <motion.div
            initial={{ scale: 0,y: 50, opacity: 0,}}
            animate={{scale: 1,y: 0, opacity: 1}}
            transition={{duration: 1.5, delay : 0.7}}
            className={"tangerine-bold  text-6xl lg:text-[200px]"}>{DATA_CONSTANTS.BOY_NICK_NAME} & {DATA_CONSTANTS.GIRL_NICK_NAME}</motion.div>
        </div>

        <motion.div
          initial={{ width: 500, y: 50,scale: 0, opacity: 0,}}
          animate={{width: '100%' ,y: 0, scale: 1, opacity: 1}}
          transition={{duration: 1.5, delay : 0.7}}
          className={"flex flex-col text-center border-b w-full lg:text-4xl text-xl p-5 rounded-md border-slate-700/50"}>
          <div>{"To : Tessalonika Laluraga"}</div>
        </motion.div>
        <div>
          <motion.button
            initial={{ width: 500, y: 100, opacity: 0,}}
            animate={{width: '100%' ,y: 0, opacity: 1}}
            transition={{duration: 1, delay : 0.7}}
            onClick={() => setActive(false)}
            className={'border px-5 py-2 border-white/20 bg-white/5 hover:bg-white/10 active:bg-white/20 duration-200'}>
            OPEN INVITATION
          </motion.button>
        </div>
      </div>
    </div>
  )
}