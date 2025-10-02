"use client";
import { useTranslation } from "react-i18next";
import branchesData from "./contactData";
import styles from "../../styles/_contact.module.scss";

// React Icons
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFax, FaInbox } from "react-icons/fa";

export default function BranchesSection() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section className={styles.branches}>
      <h2>
        {t("contactUs.companyBranches")} <span className={styles.highlight}>AL-AJAMI</span>
      </h2>
      {branchesData.map((branch) => (
        <div key={branch.id} className={styles.branchCard}>
          <div className={styles.info}>
            <p><b>{isArabic ? branch.city_ar : branch.city_en}</b></p>
            <p><FaPhoneAlt className={styles.icon}/> {branch.phone}</p>
            <p><FaEnvelope className={styles.icon}/> {branch.email}</p>
            <p><FaMapMarkerAlt className={styles.icon}/> {isArabic ? branch.address_ar : branch.address_en}</p>
            <p><FaFax className={styles.icon}/> {branch.fax}</p>
            <p><FaInbox className={styles.icon}/> {branch.postal}</p>
          </div>
          <iframe src={branch.map} loading="lazy"></iframe>
        </div>
      ))}
    </section>
  );
}
