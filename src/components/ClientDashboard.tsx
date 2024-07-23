import React from 'react';
import '../ClientDashboard.css';
import { FaHistory, FaWallet, FaCreditCard } from 'react-icons/fa';

const ClientDashboard: React.FC = () => {
  return (
    <div className="dashboard-wrapper">
      <nav className="navbar">
        <div className="navbar-content">
          <marquee behavior="scroll" direction="left">Tableau de Bord Client</marquee>
        </div>
      </nav>
      <div className="dashboard-container">
        <div className="dashboard-grid">
          <div className="dashboard-item">
            <div className="icon-container">
              <FaHistory size={40} color="#007bff" />
            </div>
            <h2>Historique des Achats</h2>
            <p>Visualisez et gérez votre historique des achats.</p>
            <button>Voir Détails</button>
          </div>
          <div className="dashboard-item">
            <div className="icon-container">
              <FaWallet size={40} color="#28a745" />
            </div>
            <h2>Solde du Compte de Crédit</h2>
            <p>Consultez le solde actuel de votre compte de crédit.</p>
            <button>Voir Détails</button>
          </div>
          <div className="dashboard-item">
            <div className="icon-container">
              <FaCreditCard size={40} color="#dc3545" />
            </div>
            <h2>Options de Paiement en Ligne</h2>
            <p>Explorez les différentes options de paiement en ligne.</p>
            <button>Voir Détails</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
