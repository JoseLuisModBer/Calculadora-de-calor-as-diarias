import './Footer.css';
import { useEffect } from 'react';
/*------------------------COMPONENTE FOOTER----------------------------*/

export const Footer = () => {
  useEffect(() => {
    // Obtenemos el año actual
    const hoy = new Date();
    const año = hoy.getFullYear();

    // Actualizamos el contenido del elemento con la clase "ano-footer"
    const añoFooter = document.querySelector('.ano-footer');
    añoFooter.textContent = año;
  }, []); // El segundo argumento del useEffect es un arreglo vacío para asegurar que el efecto se ejecute solo una vez, similar a componentDidMount en clases.

  return (
    <footer>
      <p>
        &copy;{' '}
        <a
          className="link-footer"
          href="https://www.linkedin.com/in/joseluismodro%C3%B1oberdi%C3%B1as/"
        >
          Jose Luis Modroño
        </a>{' '}
        <span className="ano-footer"></span>
      </p>
    </footer>
  );
};
