import React, { useState } from 'react';
import StatusMessage from '../../ui/StatusMessage';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const validateField = (name, value) => {
    let errorMessage = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          errorMessage = 'Name is required';
        } else if (value.trim().length < 2) {
          errorMessage = 'Name must be at least 2 characters';
        }
        break;
        
      case 'phone':
        if (!value.trim()) {
          errorMessage = 'Phone number is required';
        } else if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(value)) {
          errorMessage = 'Please enter a valid phone number';
        }
        break;
        
      case 'subject':
        if (!value.trim()) {
          errorMessage = 'Subject is required';
        } else if (value.trim().length < 3) {
          errorMessage = 'Subject must be at least 3 characters';
        }
        break;
        
      case 'message':
        if (!value.trim()) {
          errorMessage = 'Message is required';
        } else if (value.trim().length < 10) {
          errorMessage = 'Message must be at least 10 characters';
        }
        break;
        
      default:
        break;
    }
    
    return errorMessage;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

   
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
   
    Object.keys(formData).forEach(field => {
      const errorMessage = validateField(field, formData[field]);
      if (errorMessage) {
        newErrors[field] = errorMessage;
        isValid = false;
      } else {
  
        newErrors[field] = '';
      }
    });
    
    setErrors(newErrors);
    
    if (!isValid) {
      setStatus('Please correct the errors before submitting.');
    }
    
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    if (!validateForm()) return;

    setIsSending(true);
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', phone: '', subject: '', message: '' });
 
        setErrors({
          name: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus(result.message || 'Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Something went wrong. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  const hasError = (field) => errors[field] && errors[field].trim() !== '';

  return (
    <section className="contact-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-12">
            <div className="contact-left">
              <div className="contact-thumb-left">
                <img src="/img/bg/contact-bg.jpg" alt="image_not_found" />
                <div className="contact-shape"></div>
              </div>
              <div className="contact-thumb-right">
                <img src="/img/bg/contact-bg-02.jpg" alt="image_not_found" />
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
              <form onSubmit={handleSubmit} noValidate>
                <div className="row">
                  <div className="col-xl-6 col-lg-12">
                    <div className="field-wrapper">
                      {hasError('name') && (
                        <div className="error-message-top">
                          <i className="fas fa-exclamation-circle"></i> {errors.name}
                        </div>
                      )}
                      <div className={`text-box ${hasError('name') ? 'error-border' : ''}`}>
                        <span><i className="far fa-user"></i></span>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter full name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={() => {
                            const errorMsg = validateField('name', formData.name);
                            setErrors(prev => ({...prev, name: errorMsg}));
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="field-wrapper">
                      {hasError('phone') && (
                        <div className="error-message-top">
                          <i className="fas fa-exclamation-circle"></i> {errors.phone}
                        </div>
                      )}
                      <div className={`text-box ${hasError('phone') ? 'error-border' : ''}`}>
                        <span><i className="fas fa-phone"></i></span>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={() => {
                            const errorMsg = validateField('phone', formData.phone);
                            setErrors(prev => ({...prev, phone: errorMsg}));
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12">
                    <div className="field-wrapper">
                      {hasError('subject') && (
                        <div className="error-message-top">
                          <i className="fas fa-exclamation-circle"></i> {errors.subject}
                        </div>
                      )}
                      <div className={`text-box ${hasError('subject') ? 'error-border' : ''}`}>
                        <span><i className="fas fa-arrow-right"></i></span>
                        <input
                          type="text"
                          name="subject"
                          placeholder="Your Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onBlur={() => {
                            const errorMsg = validateField('subject', formData.subject);
                            setErrors(prev => ({...prev, subject: errorMsg}));
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12">
                    <div className="field-wrapper">
                      {hasError('message') && (
                        <div className="error-message-top">
                          <i className="fas fa-exclamation-circle"></i> {errors.message}
                        </div>
                      )}
                      <div className={`message-box ${hasError('message') ? 'error-border' : ''}`}>
                        <span><i className="far fa-edit"></i></span>
                        <textarea
                          name="message"
                          cols="30"
                          rows="10"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={() => {
                            const errorMsg = validateField('message', formData.message);
                            setErrors(prev => ({...prev, message: errorMsg}));
                          }}
                        />
                        <button className="thm-btn" type="submit" disabled={isSending}>
                          <i className="far fa-paper-plane"></i> {isSending ? 'Sending...' : 'Send message'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <StatusMessage status={status} />
            </div>
          </div>
        </div>
      </div>
      
      
      <style jsx>{`
        .field-wrapper {
          position: relative;
          margin-bottom: 15px;
        }
        
        .error-message-top {
          color: #e74c3c;
          font-size: 12px;
          margin-bottom: 5px;
          padding: 4px 8px;
          background-color: rgba(231, 76, 60, 0.1);
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .error-border {
          border-color: #e74c3c !important;
        }
        
        .error-message-top i {
          color: #e74c3c;
        }
      `}</style>
    </section>
  );
}

export default ContactForm;     