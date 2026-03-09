import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
   
      <div className="contact-heading">
        <div className="gem-icon"><i className="fas fa-gem"></i></div>
        <h1>Contact <span>Us</span></h1>
      </div>

      <div className="contact-grid">
        
        <div className="contact-form">
          <div className="form-title">We'd love to hear from you</div>
          <div className="form-sub">share your thoughts or queries</div>

          <form action="#" method="post">
            <div className="input-group">
              <label><i className="fas fa-user"></i> Full Name</label>
              <input type="text" className="input-field" placeholder="e.g. Aarav Sharma" required />
            </div>

            <div className="input-group">
              <label><i className="fas fa-envelope"></i> Email Address</label>
              <input type="email" className="input-field" placeholder="name@example.com" required />
            </div>

            <div className="input-group">
              <label><i className="fas fa-phone-alt"></i> Phone Number</label>
              <input type="tel" className="input-field" placeholder="+91 98765 43210" />
            </div>

            <div className="input-group">
              <label><i className="fas fa-comment"></i> Message</label>
              <textarea className="input-field" placeholder="Hi team, I would like to know about..."></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-card">
            <div className="info-item">
              <div className="info-icon"><i className="fas fa-map-pin"></i></div>
              <div className="info-text">
                <h4>Visit us</h4>
                <p>BLUESTONE Jewellery House,<br />Bandra West, Mumbai - 400050</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><i className="fas fa-phone-alt"></i></div>
              <div className="info-text">
                <h4>Call or WhatsApp</h4>
                <p><a href="tel:18004190066">1800 419 0066</a> (toll free)<br />Mon-Sat, 10am - 7pm</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><i className="fas fa-envelope"></i></div>
              <div className="info-text">
                <h4>Email</h4>
                <p><a href="mailto:care@bluestone.com">care@bluestone.com</a><br />support@bluestone.in</p>
              </div>
            </div>
          </div>

          <div className="map-container">
            <div className="map-placeholder">
              <span className="map-overlay"><i className="fas fa-location-dot"></i> BLUESTONE flagship store, Mumbai</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end", marginTop: "0.2rem" }}>
            <span className="gem-tag"><i className="far fa-clock"></i> reply within 2hr</span>
            <span className="gem-tag"><i className="fas fa-gem"></i> #bluestone</span>
          </div>
        </div>
      </div>

      <hr />
      <div style={{ textAlign: "right", color: "#a58368", fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "10px", justifyContent: "flex-end" }}>
        <i className="fas fa-diamond"></i> we value every connection <i className="fas fa-diamond"></i>
      </div>
    </div>
  )
}

export default Contact