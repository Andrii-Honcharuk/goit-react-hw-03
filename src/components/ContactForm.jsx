import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import style from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[\d()-]+$/, "Invalid phone number format")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const contactNameId = nanoid();
  const contactNumberId = nanoid();

  const handleSubmit = (values, action) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        // id: nanoid(),
        name: "",
        number: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <label htmlFor={contactNameId}>Name</label>
        <Field type="text" name="name" id={contactNameId}></Field>
        <p className={style.warning}>
          <ErrorMessage name="name" />
        </p>
        <label htmlFor={contactNumberId}>Number</label>
        <Field type="tel" name="number" id={contactNumberId} />
        <p className={style.warning}>
          <ErrorMessage name="number" />
        </p>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
