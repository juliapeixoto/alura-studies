import style from "./style.module.scss";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return <button className={style.button}>{text}</button>;
}
