import React from "react";
import navigationData from "../../data/navigation.json";
import "./Navigation.css";

const Navigation = ({ currentPage, onPageChange }) => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        {navigationData.navItems.map((item) => (
          <li key={item.id} className="nav-item">
            <button
              className={`nav-button ${
                currentPage === item.id ? "active" : ""
              }`}
              onClick={() => onPageChange(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
