import React from 'react';
import '../Dashboard.css';

const PurchaserDashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <h1>Tableau de Bord Responsable des Achats</h1>
      <div className="dashboard-grid">
        <div className="dashboard-item dashboard-section">
          <h2>Gestion des Commandes et des Livraisons</h2>
          {/* Contenu ou composants supplémentaires */}
        </div>
        <div className="dashboard-item dashboard-section">
          <h2>Historique des Achats</h2>
          {/* Contenu ou composants supplémentaires */}
        </div>
        <div className="dashboard-item dashboard-section">
          <h2>Statistiques sur les Fournisseurs</h2>
          {/* Contenu ou composants supplémentaires */}
        </div>
      </div>
    </div>
  );
};

export default PurchaserDashboard;
