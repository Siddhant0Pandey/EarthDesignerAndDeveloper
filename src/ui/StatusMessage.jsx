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

  const getStatusClass = () => {
    if (isError) return 'status-error';
    if (isSuccess) return 'status-success';
    if (isPending) return 'status-pending';
    return 'status-info';
  };

  const getStatusIcon = () => {
    if (isError) return <i className="fas fa-exclamation-circle"></i>;
    if (isSuccess) return <i className="fas fa-check-circle"></i>;
    if (isPending) return <i className="fas fa-spinner fa-spin"></i>;
    return <i className="fas fa-info-circle"></i>;
  };

  return (
    <div className={`status-message ${getStatusClass()}`}>
      <span className="status-icon">{getStatusIcon()}</span>
      <span className="status-text">{status}</span>
      
      <style jsx>{`
        .status-message {
          padding: 12px 16px;
          border-radius: 4px;
          margin-top: 20px;
          display: flex;
          align-items: center;
          max-width: 100%;
          font-size: 14px;
          letter-spacing: 0.5px;
          animation: fadeIn 0.4s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        .status-icon {
          margin-right: 10px;
          font-size: 16px;
          display: flex;
          align-items: center;
        }

        .status-text {
          flex: 1;
        }

        .status-error {
          background-color: rgba(231, 76, 60, 0.12);
          color: #e74c3c;
          border-left: 4px solid #e74c3c;
        }

        .status-success {
          background-color: rgba(46, 204, 113, 0.12);
          color: #2ecc71;
          border-left: 4px solid #2ecc71;
        }

        .status-pending {
          background-color: rgba(52, 152, 219, 0.12);
          color: #3498db;
          border-left: 4px solid #3498db;
        }

        .status-info {
          background-color: rgba(241, 196, 15, 0.12);
          color: #f39c12;
          border-left: 4px solid #f39c12;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default StatusMessage;