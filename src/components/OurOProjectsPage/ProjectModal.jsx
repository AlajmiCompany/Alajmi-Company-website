// src/components/OurProjects/ProjectModal.jsx
"use client";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function ProjectModal({ show, handleClose, project }) {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  if (!project) return null;

  return (
    <Modal show={show} onHide={handleClose} centered size="md">
      <Modal.Header closeButton>
        <Modal.Title>
          {isArabic ? project.title_ar : project.title_en}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={project.img}
          alt={isArabic ? project.title_ar : project.title_en}
          style={{ width: "200px", borderRadius: "8px", marginBottom: "1rem" }}
        />
        <p>{isArabic ? project.desc_ar : project.desc_en}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {isArabic ? "إغلاق" : "Close"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
