
import React, { useState } from 'react';
import { AppContext } from '../App';
import '../index.bookings.css';

const CALENDLY_LINK = 'https://calendly.com/your-consultancy/consultation'; // Replace with your actual Calendly link

const Bookings = () => {
  const { sectionRefs } = React.useContext(AppContext);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // Example services, replace with your actual services
  const services = [
    'Career Consultation',
    'Visa Guidance',
    'Business Setup',
    'Education Planning',
    'Other',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    const formData = new FormData(e.target);
    formData.append("access_key", "89b07247-ac89-455a-ae54-89912038a87e"); // Replace with your Web3Forms access key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Booking submitted! Please select your slot below.");
        e.target.reset();
      } else {
        setResult("Submission failed. Please try again.");
      }
    } catch (err) {
      setResult("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section
      id="bookings"
      className="bookings"
      ref={(element) => (sectionRefs.current[4] = element)}
    >
      <h1>Book your consultant here</h1>
      <p>
        Launch your dream career—book your expert consultant and take the first powerful step.
      </p>
      {result && (
        <div className={result.includes('submitted') ? 'bookings-success' : 'bookings-error'}>
          {result}
        </div>
      )}
      <form className="bookings-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="name">Name*</label>
        <input type="text" id="name" name="name" required placeholder="Your Name" />

        <label htmlFor="email">Email*</label>
        <input type="email" id="email" name="email" required placeholder="Your Email" />

        <label htmlFor="whatsapp">WhatsApp*</label>
        <input type="tel" id="whatsapp" name="whatsapp" required placeholder="WhatsApp Number" pattern="[+0-9 ]{8,}" />

        <label htmlFor="service">Service Required*</label>
        <select id="service" name="service" required>
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>

        <label htmlFor="cv">Upload CV (optional)</label>
        <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" />

        <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Book Now'}</button>
      </form>

      <div style={{ margin: '32px auto', maxWidth: 600 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>Schedule Your Session</h2>
        <iframe
          src={CALENDLY_LINK}
          title="Book a session"
          width="100%"
          height="600"
          style={{ border: 0, borderRadius: 12, minHeight: 500 }}
          allow="camera; microphone; fullscreen;"
        ></iframe>
        <p style={{ marginTop: 10, fontSize: 15 }}>
          After submitting the form, please select your preferred date and time above. You will receive a confirmation email with all details.
        </p>
      </div>
    </section>
  );
};

export default Bookings;
