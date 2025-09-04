import React from "react";
import navigationData from "../../data/navigation.json";
import "./MobileHeader.css";

const MobileHeader = ({ currentPage, onPageChange }) => {
  return (
    <div className="mobile-header">
      <nav className="mobile-navigation">
        <ul className="mobile-nav-list">
          {navigationData.navItems.map((item) => (
            <li key={item.id} className="mobile-nav-item">
              <button
                className={`mobile-nav-button ${
                  currentPage === item.id ? "active" : ""
                }`}
                onClick={() => onPageChange(item.id)}
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                <span className="mobile-nav-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileHeader;
