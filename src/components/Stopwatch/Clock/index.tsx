import style from "./style.module.scss";

interface Props {
  time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutesDozens, minutesUnity] = String(minutes).padStart(2, "0");
  const [secondsDozens, secondsUnity] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.clock}>{minutesDozens}</span>
      <span className={style.clock}>{minutesUnity}</span>
      <span className={style.clock__divider}>:</span>
      <span className={style.clock}>{secondsDozens}</span>
      <span className={style.clock}>{secondsUnity}</span>
    </>
  );
}
