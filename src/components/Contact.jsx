import React, { useState } from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:wdumindut3@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi, my name is ${formData.name}. ${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="min-vh-100 d-flex flex-column align-items-center justify-content-center py-5">
      <div className="container" style={{ maxWidth: '960px' }}>
        <h2 className="display-4 fw-bold text-center mb-4">Contact</h2>
        <h3 className="h3 fw-semibold text-center mb-5">
          Let's <span className="text-decoration-underline text-primary">talk</span> about AI/ML
        </h3>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-3">
                <Phone size={24} className="text-primary" />
                <span>+94 787 250 526</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <Mail size={24} className="text-primary" />
                <span>wdumindut3@gmail.com</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <MapPin size={24} className="text-primary" />
                <span>Colombo, Sri Lanka</span>
              </div>
              <div className="pt-3">
                <a href="https://linkedin.com/in/dumindu-tharushika" className="text-primary me-3">
                  LinkedIn
                </a>
                <a href="https://github.com/dumindu-tharushika" className="text-primary">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex flex-column gap-3">
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control rounded"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control rounded"
                  />
                </div>
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-control rounded"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="form-control rounded"
              />
              <button
                onClick={handleSubmit}
                className="btn btn-primary w-100 py-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;