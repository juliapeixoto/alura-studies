import { Button } from "..";
import Clock from "./Clock";
import style from "./style.module.scss";

export default function Stopwatch() {
  return (
    <div className={style.stopwatch}>
      <p className={style.stopwatch__title}>
        Escolha um card e inicie o cronômetro
      </p>
      <div className={style.stopwatch__clock}>
        <Clock />
      </div>
      <Button text="Começar" />
    </div>
  );
}
