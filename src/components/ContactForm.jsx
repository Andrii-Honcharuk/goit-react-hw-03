import { useId } from "react";
import style from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";

export default function ContactForm({ onAdd }) {
  const contactNameId = useId();
  const contactNumberId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      name: e.target.elements.contactName.value,
      number: e.target.elements.contactNumber.value,
    });
    e.target.reset();
  };

  return (
    <Formik
      initialValues={{
        contactName: "",
        contactNumber: "",
      }}
      onSubmit={(v, action) => {
        console.log("Values:", v);
        action.resetForm();
      }}
    >
      <Form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor={contactNameId}>Name</label>
        <Field type="text" name="contactName" id={contactNameId}></Field>
        {/* <input type="text" name="contactName" id={contactNameId}></input> */}
        <label htmlFor={contactNumberId}>Number</label>
        <Field
          type="tel"
          name="contactNumber"
          id={contactNumberId}
          // onChange={(e) => {
          //   const { value } = e.target;
          //   if (value.length === 3 || value.length === 6) {
          //     e.target.value += "-";
          //   }
          // }}
        />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
