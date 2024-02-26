import style from "./Contact.module.css";
import { HiMiniPhone, HiMiniUser } from "react-icons/hi2";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={style.container}>
      <div className={style.containerNameNumber}>
        <p className={style.text}>
          <HiMiniUser />
          {name}
        </p>
        <p className={style.text}>
          {" "}
          <HiMiniPhone /> {number}
        </p>
      </div>
      <button className={style.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
