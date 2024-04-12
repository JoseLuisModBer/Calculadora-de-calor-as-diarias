import './Header.css';
/* Importo NavLink para poder establecer los enlaces a rutas de componentes */
import { NavLink } from 'react-router-dom';

/*------------------------COMPONENTE HEADER----------------------------*/

export const Header = () => {
  return (
    <header>
      <NavLink className="navlink-logo-pokepedia" to="/">
        <img
          id="logo-pokepedia"
          src="https://fontmeme.com/permalink/240412/51c4662bd1d6a87c5983d2d8b32ed1b9.png"
          alt="logo-pokepedia"
        ></img>
      </NavLink>
      <div id="menu-header">
        <NavLink className="menu-button-1" to="/">
          Calculadora
        </NavLink>
        <p className="menu-divider">|</p>
        <NavLink className="menu-button-2" to="instrucciones">
          Instructions
        </NavLink>
      </div>
    </header>
  );
};
