"use client";
import { useTranslation } from "react-i18next";
import customersData from "./CustomersData";
import styles from "../../styles/_customers.module.scss";

export default function Customers() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section className={styles.customers}>
      <h2 className={styles.title}>{t("customersPage.title")}</h2>
      <div className={styles.grid}>
        {customersData.map((customer) => (
          <div key={customer.id} className={styles.card}>
            <img src={customer.img} alt={isArabic ? customer.title_ar : customer.title_en} />
            <p>{isArabic ? customer.title_ar : customer.title_en}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
