import { ListProps } from "../../types/task";
import Item from "./Item";
import style from "./style.module.scss";

interface Props {
  tasks: ListProps[];
  selectTask: (selectedTask: ListProps) => void;
}

export default function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.list}>
      <h2>Estudos do dia</h2>

      <ul>
        {tasks.map((item) => (
          <Item key={item.id} {...item} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  );
}
