"use client";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import styles from "../styles/_navbar.module.scss";

export default function CustomNavbar() {
  const { t } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} href="/">
          <img className={styles.logo} src="/logo.png" alt="Logo" height="40" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/">{t("home")}</Nav.Link>

            <NavDropdown title={<span>{t("company")} <FaChevronDown size={12} /></span>} id="company-dropdown">
              <NavDropdown.Item as={Link} href="/about">{t("about")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/whyus">{t("whyAjami")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/vision">{t("vision")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/board">{t("board")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/policy">{t("policy")}</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} href="/projects">{t("ourProjects")}</Nav.Link>
            <Nav.Link as={Link} href="/services">{t("ourServices")}</Nav.Link>

            <NavDropdown title={<span>{t("mediaCenter")} <FaChevronDown size={12} /></span>} id="media-dropdown">
              <NavDropdown.Item as={Link} href="/media">{t("mediaCenter")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/newspaper">{t("newspaper")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/library">{t("library")}</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} href="/customers">{t("customers")}</Nav.Link>
            <Nav.Link as={Link} href="/suppliers">{t("suppliers")}</Nav.Link>
            <Nav.Link as={Link} href="/jobs">{t("jobs")}</Nav.Link>
            <Nav.Link as={Link} href="/suggestions">{t("suggestions")}</Nav.Link>
            <Nav.Link as={Link} href="/contact">{t("contact")}</Nav.Link>


            {/* Switch button with flag */}
            <Nav.Link onClick={toggleLanguage} style={{ cursor: "pointer" }}>
              {i18n.language === "en" ? (
                <img src="/arabic.png" alt="Arabic" height="40" />
              ) : (
                <img src="/english.png" alt="English" height="40" />
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
