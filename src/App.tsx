import { useState } from "react";
import { Form, List, Stopwatch } from "./components";
import style from "./style.module.scss";
import { ListProps } from "./types/task";

function App() {
  const [tasks, setTasks] = useState<ListProps[]>([]);
  const [selected, setSelected] = useState<ListProps>();

  function selectTask(selectedTask: ListProps) {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((oldTasks) =>
        oldTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        })
      );
    }
  }

  return (
    <div className={style.app}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Stopwatch selected={selected} finishTask={finishTask} />
    </div>
  );
}

export default App;
