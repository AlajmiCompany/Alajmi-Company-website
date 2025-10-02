"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/_contact.module.scss";

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = t("This field is required");
    if (!formData.mobile.match(/^[0-9]{9,}$/)) newErrors.mobile = t("Invalid mobile number");
    if (!formData.email.match(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/))
      newErrors.email = t("Invalid email");
    if (!formData.subject) newErrors.subject = t("This field is required");
    if (!formData.message) newErrors.message = t("This field is required");
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      setErrors({});
      alert("Message sent! (future API integration here)");
    }
  };

  return (
    <div className={styles.contactForm}>
              <h1 className="title" style={{ color: "#e30613" }}>Contact Us</h1>

    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={t("contactUs.fullName")}
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />
      {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}

      <input
        type="text"
        placeholder={t("contactUs.mobile")}
        value={formData.mobile}
        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
      />
      {errors.mobile && <span className={styles.error}>{errors.mobile}</span>}

      <input
        type="email"
        placeholder={t("contactUs.email")}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {errors.email && <span className={styles.error}>{errors.email}</span>}

      <input
        type="text"
        placeholder={t("contactUs.subject")}
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
      />
      {errors.subject && <span className={styles.error}>{errors.subject}</span>}

      <textarea
        placeholder={t("contactUs.message")}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      {errors.message && <span className={styles.error}>{errors.message}</span>}

      <button type="submit">{t("contactUs.send")}</button>
    </form>
    </div>
  );
}
