import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";

import { useState } from "react";
import style from "./App.module.css";
const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const filterContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.replace(/[^\d]/g, "").includes(filter)
  );

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterContacts} onDelete={deleteContact} />
    </div>
  );
}
/*
const LoginForm = ({ onSubmit }) => {
  console.log("Props", onSubmit);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("event", evt);

    const form = evt.target;
    console.log("form", form);
    const { login, password } = form.elements;
    console.log("login:", login, "PSW", password);

    // Значення полів
    console.log("logVal", login.value, "PaswVal", password.value);

    // Викликаємо пропс onSubmit
    onSubmit({
      login: login.value,
      password: password.value,
    });
    // Скидаємо значення полів після відправки
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export const App = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit} />
    </>
  );
};
*/
