import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1>Сторінку не знайдено 😕</h1>
        <p>Схоже, що сторінка, яку ви шукаєте, не існує або була переміщена.</p>
        <div className="suggestions">
          <h3>Можливі причини:</h3>
          <ul>
            <li>Неправильний URL</li>
            <li>Сторінка була видалена</li>
            <li>Помилка в посиланні</li>
          </ul>
        </div>
        <div className="actions">
          <button className="back-button" onClick={() => window.history.back()}>
            ← Назад
          </button>
          <a href="/" className="home-link">
            На головну
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
