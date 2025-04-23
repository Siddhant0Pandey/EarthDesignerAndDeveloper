import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        subject: '',
        message: '',
      });
      

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    const field = placeholder.toLowerCase().includes('name') ? 'name' :
                  placeholder.toLowerCase().includes('phone') ? 'phone' :
                  placeholder.toLowerCase().includes('subject') ? 'subject' :
                  'message';
    setFormData({ ...formData, [field]: value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost/contact-api.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus(result.message || 'Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="contact-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-12">
            <div className="contact-left">
              <div className="contact-thumb-left">
                <img src="src/assets/img/bg/contact-bg.jpg" alt="image_not_found" />
                <div className="contact-shape"></div>
              </div>
              <div className="contact-thumb-right">
                <img src="src/assets/img/bg/contact-bg-02.jpg" alt="image_not_found" />
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-12">
            <div className="contact-right">
              <div className="border-title-2">
                <h1>F.Quote</h1>
              </div>
              <div className="about-title mb-20">
                <h5>Free Quote</h5>
                <h2>Get A Free consultation<span>.</span></h2>
              </div>
              <form onSubmit={handleSubmit}  method="post"
                            action="contact.php">
                <div className="row">
                  <div className="col-xl-6 col-lg-12">
                    <div className="text-box">
                      <span><i className="far fa-user"></i></span>
                      <input
                        type="text"
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
  <div className="text-box">
    <span><i className="fas fa-phone"></i></span>
    <input
      type="tel"
      placeholder="Your phone number"
      value={formData.phone}
      onChange={handleChange}
      required
    />
  </div>
</div>

                  <div className="col-xl-12 col-lg-12">
                    <div className="text-box">
                      <span><i className="fas fa-arrow-right"></i></span>
                      <input
                        type="text"
                        placeholder="Your Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12">
                    <div className="message-box">
                      <span><i className="far fa-edit"></i></span>
                      <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        placeholder="Your Massage"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <button className="thm-btn" type="submit">
                        <i className="far fa-paper-plane"></i> Send massage
                      </button>
                      <p style={{ marginTop: '10px', color: 'green' }}>{status}</p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
