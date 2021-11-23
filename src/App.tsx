import React from "react";
import { Form, List } from "./components";
import style from "./style.module.scss";

function App() {
  return (
    <div className={style.app}>
      <Form />
      <List />
    </div>
  );
}

export default App;
