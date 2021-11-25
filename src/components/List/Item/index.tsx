import { ListProps } from "../../../types/task";
import style from "../style.module.scss";
import itemStyle from "./style.module.scss";
interface Props extends ListProps {
  selectTask: (selectedTask: ListProps) => void;
}

export default function Item({
  task,
  time,
  selected,
  completed,
  id,
  selectTask,
}: Props) {
  return (
    <li
      className={`${style.list__item} ${
        selected ? itemStyle.item__selected : ""
      } ${completed ? itemStyle.item__completed : ""} ${
        completed ? itemStyle.green : ""
      }`}
      onClick={() =>
        !completed && selectTask({ task, time, selected, completed, id })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && (
        <span
          className={itemStyle.item__concluded}
          aria-label="Completed task"
        ></span>
      )}
    </li>
  );
}
