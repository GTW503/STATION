import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../logi.css';

const RoleLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { role } = useParams<{ role: string }>();

  const handleLogin = () => {
    if (username === '12345' && password === '12345') {
      navigate(`/${role}/dashboard`);
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
  };

  const handleForgotPassword = () => {
    navigate('/reset-password');
  };

  const handleSignUp = () => {
    navigate(`/${role}/sign-up`);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Bienvenue, {role}</h1>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="remember-me">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label>Se souvenir de moi</label>
        </div>
        <button className="login-button" onClick={handleLogin}>Connexion</button>
        <div className="button-group">
          <button className="forgot-password" onClick={handleForgotPassword}>
            Mot de passe oublié ?
          </button>
          <button className="sign-up" onClick={handleSignUp}>
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleLogin;
