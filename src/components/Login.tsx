import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login.css'; // Chemin ajusté

const Login: React.FC = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleRoleSelect = () => {
    if (role) {
      navigate(`/${role}/login`);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Connexion</h1>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Sélectionner un rôle</option>
          <option value="admin">Administrateur</option>
          <option value="station-manager">Gestionnaire de station</option>
          <option value="pompist">Pompiste</option>
          <option value="purchaser">Responsable des achats</option>
          <option value="finance-manager">Responsable financier</option>
          <option value="client">Client</option>
        </select>
        <button onClick={handleRoleSelect}>Connexion</button>
      </div>
    </div>
  );
};

export default Login;
