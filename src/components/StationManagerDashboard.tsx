import React, { useState } from 'react';
import '../StationManagerDashboard.css';
import { FaBox, FaShoppingCart, FaUsers, FaClipboardList } from 'react-icons/fa';

const StationManagerDashboard: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(prevSection => (prevSection === section ? null : section));
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>GESTIONNAIRE</h2>
          <p>Bienvenue, Gestionnaire</p>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="#stocks" onClick={() => toggleSection('stocks')}><FaBox /> Suivre les stocks</a>
              {openSection === 'stocks' && (
                <ul className="submenu">
                  <li><a href="#">Consulter les niveaux de stocks</a></li>
                  <li><a href="#">Mettre à jour les niveaux de stocks</a></li>
                  <li><a href="#">Recevoir les alertes de stocks bas</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#sales-purchases" onClick={() => toggleSection('sales-purchases')}><FaShoppingCart /> Gérer les ventes et les achats</a>
              {openSection === 'sales-purchases' && (
                <ul className="submenu">
                  <li><a href="#">Enregistrer une vente</a></li>
                  <li><a href="#">Enregistrer un achat</a></li>
                  <li><a href="#">Générer un rapport de vente et achat</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#teams" onClick={() => toggleSection('teams')}><FaUsers /> Superviser les équipes</a>
              {openSection === 'teams' && (
                <ul className="submenu">
                  <li><a href="#">Assigner les tâches</a></li>
                  <li><a href="#">Suivre les performances des équipes</a></li>
                  <li><a href="#">Gérer les horaires des équipes</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#accounts" onClick={() => toggleSection('accounts')}><FaClipboardList /> Suivre les comptes clients et fournisseurs</a>
              {openSection === 'accounts' && (
                <ul className="submenu">
                  <li><a href="#">Consulter les comptes clients</a></li>
                  <li><a href="#">Consulter les comptes fournisseurs</a></li>
                  <li><a href="#">Gérer les paiements et crédits</a></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
          <div className="header-right">
            <span>John Doe</span>
            <span className="notifications">0</span>
          </div>
        </header>
        <div className="widgets">
          <div className="widget widget-green">
            <h3>0</h3>
            <p>Niveaux de stocks</p>
            <button>Voir Détails</button>
          </div>
          <div className="widget widget-blue">
            <h3>0</h3>
            <p>Ventes et Achats</p>
            <button>Voir Détails</button>
          </div>
          <div className="widget widget-orange">
            <h3>0</h3>
            <p>Équipes</p>
            <button>Voir Détails</button>
          </div>
          <div className="widget widget-red">
            <h3>0</h3>
            <p>Comptes</p>
            <button>Voir Détails</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StationManagerDashboard;
