import style from "./style.module.scss";

export default function Clock() {
  return (
    <>
      <span className={style.clock}>0</span>
      <span className={style.clock}>0</span>
      <span className={style.clock__divider}>:</span>
      <span className={style.clock}>0</span>
      <span className={style.clock}>0</span>
    </>
  );
}
