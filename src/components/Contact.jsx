import style from "./Contact.module.css";
export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={style.container}>
      <div className={style.containerNameNumber}>
        <p className={style.text}>{name}</p>
        <p className={style.text}>{number}</p>
      </div>
      <button className={style.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
