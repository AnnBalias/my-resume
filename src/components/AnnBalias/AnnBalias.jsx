import React from "react";
import annBaliasData from "../../data/annBalias.json";
import annBaliasPhoto from "../../assets/images/annbalias.jpg";
import "./AnnBalias.css";

const AnnBalias = () => {
  const { personalInfo, contactInfo, socialLinks } = annBaliasData;

  const handleEmailClick = (email) => {
    const mailtoLink = `mailto:${email}?subject=Зв'язок з резюме&body=Доброго дня! Я зацікавився вашим резюме.`;
    window.open(mailtoLink, "_blank");
  };

  const handlePhoneClick = (phoneNumber) => {
    const cleanNumber = phoneNumber.replace(/\s/g, "");
    window.open(`tel:${cleanNumber}`, "_blank");
  };

  const getIconName = (socialName) => {
    const iconMap = {
      LinkedIn: "linkedin",
      GitHub: "github",
      Telegram: "telegram",
    };
    return iconMap[socialName] || "linkedin";
  };

  return (
    <div className="ann-balias">
      <div className="profile-section">
        <div className="profile-image">
          <img
            src={annBaliasPhoto}
            alt={personalInfo.name}
            className="avatar"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="avatar-placeholder" style={{ display: "none" }}>
            <span>
              {personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        </div>
        <h1 className="name">{personalInfo.name}</h1>
        <p className="title">{personalInfo.title}</p>
      </div>

      <div className="contact-section">
        <div className="contact-item">
          <svg className="contact-icon">
            <use href="/src/assets/icons/sprite.svg#location" />
          </svg>
          <span>{contactInfo.location}</span>
        </div>
        <div className="contact-item">
          <svg className="contact-icon">
            <use href="/src/assets/icons/sprite.svg#mail" />
          </svg>
          <button
            onClick={() => handleEmailClick(contactInfo.email)}
            className="contact-link"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {contactInfo.email}
          </button>
        </div>
        {contactInfo.phone.map((phoneNumber, index) => (
          <div key={index} className="contact-item">
            <svg className="contact-icon">
              <use href="/src/assets/icons/sprite.svg#mobile" />
            </svg>
            <button
              onClick={() => handlePhoneClick(phoneNumber)}
              className="contact-link"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {phoneNumber}
            </button>
          </div>
        ))}
      </div>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            data-name={link.name}
          >
            <svg className="social-icon">
              <use
                href={`/src/assets/icons/sprite.svg#${getIconName(link.name)}`}
              />
            </svg>
            <span className="social-name">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AnnBalias;
