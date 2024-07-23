import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../slogin.css';

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { role } = useParams<{ role: string }>();

  const handleSignUp = () => {
    if (password === confirmPassword) {
      alert('Compte créé avec succès');
      navigate(`/${role}/login`);
    } else {
      alert('Les mots de passe ne correspondent pas');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Créer un compte</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="signup-button" onClick={handleSignUp}>S'inscrire</button>
      </div>
    </div>
  );
};

export default SignUp;
