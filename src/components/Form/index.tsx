import { FormEvent, useState } from "react";
import { ListProps } from "../../types/task";
import Button from "../Button";
import { v4 as uuidv4 } from "uuid";
import style from "./style.module.scss";
interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ListProps[]>>;
}

export default function Form({ setTasks }: Props) {
  const [time, setTime] = useState("00:00");
  const [task, setTask] = useState("");

  function addTask(event: FormEvent) {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      { task, time, selected: false, completed: false, id: uuidv4() },
    ]);
    setTask("");
    setTime("00:00");
  }

  return (
    <form onSubmit={addTask} className={style.task}>
      <div className={style.task__input__container}>
        <label htmlFor="task" className={style.task__input__container__label}>
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar?"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          required
        />
      </div>

      <div className={style.task__input__container}>
        <label htmlFor="time" className={style.task__input__container__label}>
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="23:59:59"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          required
        />
      </div>

      <Button type="submit" text="Adicionar" />
    </form>
  );
}
