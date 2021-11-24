import Button from "../Button";
import style from "./style.module.scss";

export default function Form() {
  return (
    <form action="" className={style.task}>
      <div className={style.task__input__container}>
        <label htmlFor="task" className={style.task__input__container__label}>
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar?"
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
          max="01:30:00"
          required
        />
      </div>

      <Button text="Adicionar" />
    </form>
  );
}
