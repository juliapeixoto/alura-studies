import style from "./style.module.scss";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export default function Button({ text, type, onClick }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={style.button}>
      {text}
    </button>
  );
}
