import React, { useState } from 'react'; // Importation de React et du hook useState pour gérer l'état du composant
import { Link } from 'react-router-dom'; // Importation du composant Link de react-router-dom pour la navigation entre les pages
import './Navbar.css'; // Importation du fichier CSS pour styliser le composant Navbar

function NavBar({ links }) { // Définition du composant NavBar, qui reçoit une prop "links"
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Déclaration d'un état pour savoir si l'utilisateur est connecté ou non


    const handleLogin = () => { // Fonction pour gérer la connexion
        setIsLoggedIn(true); // Quand l'utilisateur se connecte, on passe isLoggedIn à true
    };

    const handleLogout = () => { // Fonction pour gérer la déconnexion
        setIsLoggedIn(false); // Quand l'utilisateur se déconnecte, on repasse isLoggedIn à false
    };



    return (
        <div className="navBar"> {/* Conteneur principal du Navbar */}
            <div className="navLeft"> {/* Section de gauche du Navbar */}
                <Link to="/">Accueil</Link> {/* Lien vers la page d'accueil */}
            </div>

            {/* Section centrale avec liens et image du menu hamburger */}
            <div className="navCenter" > {/* Section centrale qui affiche les liens */}
                {links.map((link, index) => ( // Parcours de chaque lien passé en prop "links"
                    <Link key={index} to={link.path}>{link.name}</Link> // Création d'un lien pour chaque élément du tableau
                ))}


                <div>


                    <input type="text" placeholder='Recherche' />
                    <button>GO</button>
                </div>
            </div>
            <img className='berger' src="_Assets/_images/134216_menu_lines_hamburger_icon.png" alt="Menu" />



            <div className="navRight"> {/* Section de droite du Navbar */}
                {!isLoggedIn ? ( // Si l'utilisateur n'est pas connecté
                    <button onClick={handleLogin}>Connexion</button> // Affiche un bouton pour se connecter
                ) : ( // Sinon, si l'utilisateur est connecté
                    <Link to="/_PersonalPage">Mon Profil</Link> // Affiche un lien vers la page personnelle
                )}
            </div>


        </div>
    );
}

export default NavBar; // Exportation du composant NavBar pour pouvoir l'utiliser dans d'autres fichiers
