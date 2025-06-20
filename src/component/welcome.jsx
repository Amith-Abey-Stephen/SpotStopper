import React from 'react';
import './welcome.css';

export default function Welcome() {
  return (
    <main className="main-container">
      <div className="background-wrapper">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/af37f9135b3a72dff881ed107e144e84e1b48924?placeholderIfAbsent=true"
          className="background-image"
          alt="Background"
        />
        <div className="card">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd642e1ee08e17fbddc342a33b49f2fc7d93903a?placeholderIfAbsent=true"
            className="card-background"
            alt="Inner background"
          />
          <header className="welcome-header">
            <div className="circle"></div>
            <h1>Welcome to Parkor</h1>
            <p>Lorem ipsum</p>
          </header>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b292996768bcb91a521475cd41b8bc997c8f3937?placeholderIfAbsent=true"
            alt="Hero illustration"
            className="hero-image"
          />
          <section className="action-buttons">
            <button className="btn black-btn">Get Started</button>
            <button className="btn outline-btn">Log In</button>
          </section>
        </div>
      </div>
    </main>
  );
}
