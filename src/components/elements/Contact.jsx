import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import styles from "../../stylesheets/elements/Contact.module.css";
import Button from "/src/components/elements/Button";
const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  };
  //   Form Validation
  const validateName = () => {
    if (!form.name.trim() || form.name.trim().length < 4) {
      toast.error("Name is required and should be at least 4 characters long");
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(form.email.trim())) {
      toast.error("Invalid email address");
      return false;
    }
    return true;
  };

  const validateSubject = () => {
    if (!form.subject.trim() || form.subject.trim().length < 4) {
      toast.error(
        "Subject is required and should be at least 4 characters long"
      );
      return false;
    }
    return true;
  };

  const validateMessage = () => {
    if (!form.message.trim() || form.message.trim().length < 5) {
      toast.error(
        "Message is required and should be at least 5 characters long"
      );
      return false;
    }
    return true;
  };
  const validateForm = () => {
    let isValid = true;

    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validateSubject()) isValid = false;
    if (!validateMessage()) isValid = false;

    return isValid;
  };

  // Handle form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from: form.name,
          to_name: "Suliman",
          from_email: form.email,
          to_email: "suliman.badour1@gmail.com", //Change this email to your preferred recipient
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          // alert("Message sent successfully, I'll get back to you soon!");
          toast.success(
            "Message sent successfully, I'll get back to you soon!"
          );
          setForm({
            name: "",
            email: "",
            message: "",
            subject: "",
          });
        },
        (error) => {
          // Handle the error here
          setLoading(false);
          console.log(error);
          alert("Something went wrong, please try again later!");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.container}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className={styles.formdiv}>
        {/* Form starts here */}
        <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.outerDiv}>
            <input
              className={styles.contactInput}
              type="text"
              name="name" // Add this
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              onBlur={validateName} // Add this
            />
            <input
              className={styles.contactInput}
              type="email"
              name="email" // Add this
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              onBlur={validateEmail} // Add this
            />
            {/* {errors.email && (
            <p className="error-popup">{errors.email.message}</p>
          )} */}
          </div>
          <input
            className={styles.contactInput}
            type="text"
            placeholder="Subject"
            name="subject" // Add this
            value={form.subject}
            onChange={handleChange}
            onBlur={validateSubject} // Add this
          />
          <textarea
            className={styles.contactInput}
            placeholder="Message"
            name="message" // Add this
            value={form.message}
            onChange={handleChange}
            onBlur={validateMessage} // Add this
          />
          <button type="submit" className={styles.button}>
            {loading ? "Loading..." : "Send"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
