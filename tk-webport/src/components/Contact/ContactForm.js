// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import styles from './ContactForm.module.css'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm({ animInputText, animLabelName, animLabelEmail, animLabelMassage }) {
  const [state, handleSubmit] = useForm("mvonyjkd");
  if (state.succeeded) {
    setTimeout(() => {
      
    }, 1000);
    return (
    <div>
      <p>Thanks for joining!</p>
    </div>
    )
  }
  return (
    <form onSubmit={handleSubmit} className={styles.ContactForm}>
      <p className={animLabelName}><label htmlFor="name">
        Name
      </label>
      </p>
      <input
        id="name"
        type="name"
        name="name"
        className={animInputText}
      />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />

      <p className={animLabelEmail}>
        <label htmlFor="email">
          Email Address
        </label></p>
      <input
        id="email"
        type="email"
        name="email"
        className={animInputText}
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <p className={animLabelMassage}><label htmlFor="message">
        Message
      </label></p>
      <textarea
        id="message"
        name="message"
        rows="5"
        className={animInputText}
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      /><p>
        <button type="submit" disabled={state.submitting} className={animInputText}>
          Send
        </button></p>
    </form>
  );
}
export default ContactForm;