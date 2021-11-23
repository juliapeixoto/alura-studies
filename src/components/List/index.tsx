import * as React from "react";
import style from "./style.module.scss";

export default function List() {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "React Native",
      time: "01:00:00",
    },
    {
      task: "Java",
      time: "03:00:00",
    },
  ];

  return (
    <aside className={style.list}>
      <h2>Estudos do dia</h2>

      <ul>
        {tasks.map((item, index) => (
          <li key={index} className={style.list__item}>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
