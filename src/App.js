import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './_Pages/_Home/Home';
import Registrations from './_Pages/_Registrations/Registrations';
import ProfilePanel from './_Pages/_Profile_panel/ProfilePanel';
import PersonalPage from './_Pages/_Personal_page/PersonalPage';
import BusinessPanel from './_Pages/_Business_panel/BusinessPanel';

import NavBar from './_Components/_Layout/_Navbar/Navbar';
import './App.css';

function App() {
  const links = [
    // { name: 'Inscription', path: '/_Registrations' },
    { name: 'Panel Profil', path: '/_ProfilePanel' },
    { name: 'Panel Entreprise', path: '/_BusinessPanel' },
    // Ajoute d'autres liens ici si nécessaire
  ];

  return (
    <div className='containerApp'>
      <NavBar links={links} /> {/* Utilise le composant NavBar */}
      <div className='app'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/_ProfilePanel" element={<ProfilePanel />} />
          <Route path="/_BusinessPanel" element={<BusinessPanel />} />
          <Route path="/_Registrations" element={<Registrations />} />
          <Route path="/_PersonalPage" element={<PersonalPage />} />
        </Routes>
      </div>
      <div className='footer'>
        {/* Footer content here */}
      </div>
    </div>
  );
}

export default App;

