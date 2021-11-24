import style from "../style.module.scss";

interface ItemProps {
  task: string;
  time: string;
}

export default function Item({ task, time }: ItemProps) {
  return (
    <li className={style.list__item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
