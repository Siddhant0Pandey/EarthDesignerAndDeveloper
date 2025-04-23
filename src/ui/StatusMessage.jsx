import React, { useEffect, useState } from 'react';

function StatusMessage({ status }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (status) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 5000); // hide after 5s
      return () => clearTimeout(timer);
    }
  }, [status]);

  if (!status || !visible) return null;

  const isError = status.toLowerCase().includes('fail') || 
                 status.toLowerCase().includes('error') || 
                 status.toLowerCase().includes('wrong') ||
                 status.toLowerCase().includes('please correct');
  
  const isSuccess = status.toLowerCase().includes('success');
  const isPending = status.toLowerCase().includes('sending');

  const styles = {
    padding: '15px 25px',
    borderRadius: '4px',
    backgroundColor: isError ? '#ff5e15' : isSuccess ? '#ff5e15' : isPending ? '#ff5e15' : '#ff5e15',
    color: '#ffffff',
    fontWeight: '500',
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'opacity 0.5s ease',
    animation: 'fadeIn 0.4s ease',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '600px',  
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    letterSpacing: '0.5px',
  };

  const iconStyle = {
    marginRight: '10px',
    fontSize: '18px',
  };

  return (
    <div className="status-message" style={styles}>
      {isError && <span style={iconStyle}>⚠️</span>}
      {isSuccess && <span style={iconStyle}>✓</span>}
      {isPending && <span style={iconStyle}>⌛</span>}
      {status}
    </div>
  );
}

export default StatusMessage;