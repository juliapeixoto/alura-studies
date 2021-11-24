import { useState } from "react";
import Item from "./Item";
import style from "./style.module.scss";

export default function List() {
  const [tasks, setTasks] = useState();

  return (
    <aside className={style.list}>
      <h2
      // onClick={() => {
      //   setTasks([...tasks, "Acabate", time])
      // }}
      >
        Estudos do dia
      </h2>

      <ul>
        {/* {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))} */}
      </ul>
    </aside>
  );
}
