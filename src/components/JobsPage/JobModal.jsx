"use client";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "../../styles/_jobs.module.scss";

export default function JobModal({ show, handleClose, job }) {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  // ✅ Hooks لازم ييجوا دائماً قبل أي return شرطي
  const [formData, setFormData] = useState({
    fullName: "",
    nationality: "",
    residence: "",
    address: "",
    mobile: "",
    email: "",
    salary: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  // validation
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = t("This field is required");
    if (!formData.nationality) newErrors.nationality = t("This field is required");
    if (!formData.residence) newErrors.residence = t("This field is required");
    if (!formData.mobile) newErrors.mobile = t("Mobile is required");
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = t("Invalid email");
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    alert("✅ Job Application Submitted");
    handleClose();
  };

  // ✅ الشرط يجي بعد hooks
  if (!job) return null;

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" className="job-modal">
      <Modal.Header closeButton>
        <Modal.Title>{isArabic ? job.title_ar : job.title_en}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
<p className="desc">
  {isArabic ? job.details_ar : job.details_en}
</p>


        {/* FORM */}
        <form className="form" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <input
              type="text"
              placeholder={isArabic ? "الاسم الكامل" : "Full Name"}
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
          </div>

          {/* Nationality */}
          <div>
            <select
              value={formData.nationality}
              onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
            >
              <option value="">{isArabic ? "الجنسية" : "Nationality"}</option>
              <option>Saudi</option>
              <option>Egyptian</option>
              <option>Jordanian</option>
              <option>Other</option>
            </select>
            {errors.nationality && <span className={styles.error}>{errors.nationality}</span>}
          </div>

          {/* Residence */}
          <div>
            <select
              value={formData.residence}
              onChange={(e) => setFormData({ ...formData, residence: e.target.value })}
            >
              <option value="">{isArabic ? "الإقامة" : "Residence"}</option>
              <option>{isArabic ? "غير قابلة للتحويل" : "Non-transferable"}</option>
              <option>{isArabic ? "قابلة للتحويل" : "Transferable"}</option>
            </select>
            {errors.residence && <span className={styles.error}>{errors.residence}</span>}
          </div>

          {/* Address */}
          <input
            type="text"
            placeholder={isArabic ? "العنوان" : "Address"}
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />

          {/* Mobile */}
          <div>
            <input
              type="tel"
              placeholder={isArabic ? "الجوال" : "Mobile"}
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            />
            {errors.mobile && <span className={styles.error}>{errors.mobile}</span>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>

          {/* Expected Salary */}
          <select
            value={formData.salary}
            onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
          >
            <option value="">{isArabic ? "الراتب المتوقع" : "Expected Salary"}</option>
            <option>Less 2000</option>
            <option>2000 - 5000</option>
            <option>5000 - 10000</option>
            <option>10000+</option>
          </select>

          {/* File Upload */}
          <input
            type="file"
            onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
          />

          {/* Submit */}
          <button type="submit">{isArabic ? "إرسال" : "Send"}</button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
