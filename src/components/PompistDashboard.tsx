import React, { useState } from 'react';
import '../PompistDashboard.css';
import { FaGasPump, FaClipboardList, FaTachometerAlt } from 'react-icons/fa';

const PompistDashboard: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(prevSection => (prevSection === section ? null : section));
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>QUICK DATA Stock</h2>
          <p>Bienvenue Pompiste</p>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="#sell-fuel" onClick={() => toggleSection('sell-fuel')}><FaGasPump /> Vendre du carburant</a>
              {openSection === 'sell-fuel' && (
                <ul className="submenu">
                  <li><a href="#">Enregistrer une vente de carburant</a></li>
                  <li><a href="#">Enregistrer une vente d'articles</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#transactions" onClick={() => toggleSection('transactions')}><FaClipboardList /> Enregistrer les transactions</a>
              {openSection === 'transactions' && (
                <ul className="submenu">
                  <li><a href="#">Listes vente carburant</a></li>
                  <li><a href="#">Listes vente d'articles</a></li>
                  <li><a href="#">Gérer les paiements</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#tanks" onClick={() => toggleSection('tanks')}><FaTachometerAlt /> Suivre les niveaux des cuves</a>
              {openSection === 'tanks' && (
                <ul className="submenu">
                  <li><a href="#">Consulter les niveaux des cuves</a></li>
                  <li><a href="#">Signaler les niveaux bas des cuves</a></li>
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
          <div className="widget widget-blue">
            <h3>0</h3>
            <p>Ventes de carburant</p>
            <button>Voir Détails</button>
          </div>
          <div className="widget widget-orange">
            <h3>0</h3>
            <p>Transactions enregistrées</p>
            <button>Voir Détails</button>
          </div>
          <div className="widget widget-green">
            <h3>0</h3>
            <p>Niveaux des cuves</p>
            <button>Voir Détails</button>
          </div>
        </div>
        <div className="charts">
        </div>
        <div className="data-table">
        </div>
      </main>
    </div>
  );
};

export default PompistDashboard;
