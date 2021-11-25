import { useEffect, useState } from "react";
import { Button } from "..";
import { timeToSeconds } from "../../common/utils/time";
import { ListProps } from "../../types/task";
import Clock from "./Clock";
import style from "./style.module.scss";

interface Props {
  selected: ListProps | undefined;
  finishTask: () => void;
}

export default function Stopwatch({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected?.time));
    }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.stopwatch__title}>
        Escolha um card e inicie o cronômetro
      </p>
      <div className={style.stopwatch__clock}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)} text="Começar" />
    </div>
  );
}
