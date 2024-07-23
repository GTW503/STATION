import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../rlogi.css';

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleReset = () => {
    alert('Un email de réinitialisation de mot de passe a été envoyé');
    navigate('/login');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Réinitialisation du mot de passe</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="login-button" onClick={handleReset}>Réinitialiser le mot de passe</button>
      </div>
    </div>
  );
};

export default ResetPassword;
