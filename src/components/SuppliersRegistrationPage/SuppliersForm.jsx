"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import countries from "./countries";
import supplierCategories from "./supplierCategories";
import styles from "../../styles/_suppliersForm.module.scss";

export default function SuppliersForm() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    address: "",
    country: "",
    category: "",
    mobile: "",
    fax: "",
    commercialRecord: "",
    bankName: "",
    accountNo: "",
    iban: "",
    email: "",
    officer: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = t("This field is required");
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = t("Invalid email");
    if (!formData.iban || formData.iban.length < 15)
      newErrors.iban = t("Invalid IBAN");
    if (!formData.mobile) newErrors.mobile = t("Mobile is required");
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    alert("Form submitted successfully ✅");
  };

  return (
    <section className={styles.suppliersForm}>
      <h2>{t("suppliersPage.registrationTitle")}</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className={styles.field}>
          <label>{t("suppliersPage.name")}</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        {/* Country */}
        <div className={styles.field}>
          <label>{t("suppliersPage.country")}</label>
          <select
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
          >
            <option value="">{t("suppliersPage.select")}</option>
            {countries.map((c) => (
              <option key={c.value} value={c.value}>
                {isArabic ? c.label_ar : c.label_en}
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div className={styles.field}>
          <label>{t("suppliersPage.category")}</label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="">{t("suppliersPage.select")}</option>
            {supplierCategories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {isArabic ? cat.label_ar : cat.label_en}
              </option>
            ))}
          </select>
        </div>

        {/* Email */}
        <div className={styles.field}>
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        {/* IBAN */}
        <div className={styles.field}>
          <label>IBAN</label>
          <input
            type="text"
            value={formData.iban}
            onChange={(e) =>
              setFormData({ ...formData, iban: e.target.value })
            }
          />
          {errors.iban && <span className={styles.error}>{errors.iban}</span>}
        </div>

        {/* Upload File */}
        <div className={styles.field}>
          <label>{t("suppliersPage.uploadFile")}</label>
          <input
            type="file"
            onChange={(e) =>
              setFormData({ ...formData, file: e.target.files[0] })
            }
          />
        </div>

        {/* Submit */}
        <button type="submit" className={styles.submitBtn}>
          {t("suppliersPage.submit")}
        </button>
      </form>
    </section>
  );
}
