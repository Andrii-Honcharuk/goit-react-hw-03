import Contact from "./Contact";
import style from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={style.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
