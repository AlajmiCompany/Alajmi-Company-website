"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import suggestionsData from "./suggestionsData";
import styles from "../../styles/_suggestions.module.scss";

export default function Suggestions() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const content = isArabic ? suggestionsData.ar : suggestionsData.en;

  const [formData, setFormData] = useState({
    type: "",
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ " + (isArabic ? "تم إرسال النموذج" : "Form submitted successfully"));
  };

  return (
    <section className={styles.suggestions}>
      <h2>{content.title}</h2>
      <p>{content.subtitle}</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <option value="">{content.form.type}</option>
          {content.form.typeOptions.map((opt, idx) => (
            <option key={idx} value={opt}>{opt}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder={content.form.name}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <input
          type="tel"
          placeholder={content.form.mobile}
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        />

        <input
          type="email"
          placeholder={content.form.email}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <input
          type="text"
          placeholder={content.form.subject}
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />

        <textarea
          placeholder={content.form.message}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>

        <button type="submit">{content.form.submit}</button>
      </form>
    </section>
  );
}
