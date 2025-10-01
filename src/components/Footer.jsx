"use client";
import { useTranslation } from "react-i18next";
import styles from "../styles/_footer.module.scss";
import footerData from "./HomePage/data/footerData";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      {/* Top Info Section */}
      <div className={styles.top}>
        <div className={styles.infoBox}>
          <FaPhoneAlt />
          <div>
            <h5>{t("footer.phone")}</h5>
            <p>{footerData.phone}</p>
          </div>
        </div>
        <div className={styles.infoBox}>
          <FaMapMarkerAlt />
          <div>
            <h5>{t("footer.address")}</h5>
            <p>{footerData.address}</p>
          </div>
        </div>
        <div className={styles.infoBox}>
          <FaEnvelope />
          <div>
            <h5>{t("footer.email")}</h5>
            <p>{footerData.email}</p>
          </div>
        </div>
        <div className={styles.infoBox}>
          <FaClock />
          <div>
            <h5>{t("footer.workingHours")}</h5>
            <ul>
              {footerData.workingHours.map((time, i) => (
                <li key={i}>{time}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className={styles.middle}>
        <div className={styles.column}>
          <img src="/logofooter.png" alt="Al Ajmi Logo" className={styles.logo}/>
          <p>{t("footer.desc", { defaultValue: "Al Ajmi Company - excellence in construction & development" })}</p>
        </div>

        <div className={styles.column}>
          <h4>{t("footer.lastNews")}</h4>
          <ul>
            {footerData.lastNews.map((news, i) => (
              <li key={i}>{news}</li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h4>{t("footer.quickLinks")}</h4>
          <ul>
            {footerData.quickLinks.map((link, i) => (
              <li key={i}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>{t("footer.rights")}</p>
        <div className={styles.credits}>
          {footerData.credits.map((c, i) => (
            <span key={i}>
              <a href={c.url} target="_blank" rel="noreferrer">{c.name}</a>
              {i === 0 ? " | " : ""}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
