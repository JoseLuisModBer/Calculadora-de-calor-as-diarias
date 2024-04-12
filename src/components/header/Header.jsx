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
          src="/Recursos/imagenes/logo-pokepedia.png"
          alt="logo-pokepedia"
        ></img>
      </NavLink>
      <div id="menu-header">
        <NavLink className="menu-button-1" to="/">
          Pokepedia
        </NavLink>
        <p className="menu-divider">|</p>
        <NavLink className="menu-button-2" to="instructions">
          Instructions
        </NavLink>
        <p className="menu-divider">|</p>
        <NavLink className="menu-button-3" to="all">
          All
        </NavLink>
      </div>
    </header>
  );
};
