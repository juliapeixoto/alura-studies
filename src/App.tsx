import { Form, List, Stopwatch } from "./components";
import style from "./style.module.scss";

function App() {
  return (
    <div className={style.app}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
