import '../componentes.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Deporte({
  deportes,
  setDeportes,
  totalKcalDeporte,
  setTotalKcalDeporte,
}) {
  const [textoDelDeporte, setTextoDelDeporte] = useState('');
  const [caloriasDelDeporte, setCaloriasDelDeporte] = useState('');
  const [loading, setLoading] = useState();
  // Obtenemos referencia el elemento de App que muestra el resultado
  const resultadoCaloriasElement = document.getElementById(
    'resultado-calorias-restantes'
  );

  // Función que maneja el envío del formulario.
  const handleSubmitDeporte = (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      // Creamos la nueva tarea. El id se calcula midiendo la longitud del array de objetos y sumando uno. El text lleva el valor de la variable text. el done está por defecto en false y cambia al pulsar el checkbox.
      const newDeporte = {
        id: deportes.length + 1,
        textoDelDeporte,
        caloriasDelDeporte: parseInt(caloriasDelDeporte),
      };

      // Actualizamos el array de tareas. Es importante crear un nuevo array para que React recargue el componente y podamos visualizar los cambios.
      setDeportes([...deportes, newDeporte]);

      // Vaciamos los inputs del formulario.
      textoDelDeporte('');
      setCaloriasDelDeporte('');
      // Ocultamos la sección de resultado final
      resultadoCaloriasElement.classList.add('doNotShow');
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  // Calcular el total de calorías una vez
  setTotalKcalDeporte(
    deportes.reduce((total, deporte) => total + deporte.caloriasDelDeporte, 0)
  );

  //---------------------------------------------------------------

  const handleDeleteDeporte = (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      // Borramos el array de deporte de la variable y del localstorage
      setDeportes([]);
      localStorage.setItem('desayunos', JSON.stringify(deportes));
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  //---------------------------------------------------------------
  //---------------------------------------------------------------

  return (
    <div id="tarjeta">
      <h2>DEPORTE:</h2>
      <div className="formulario-y-datos">
        <form className="formulario-tarjeta" onSubmit={handleSubmitDeporte}>
          <label htmlFor="nuevaCena">Introduce un nuevo deporte:</label>
          <input
            id="nuevaCena"
            type="text"
            className="text-input"
            value={textoDelDeporte}
            maxLength="200"
            required
            autoFocus
            placeholder="Nuevo deporte..."
            onChange={(e) => setTextoDelDeporte(e.target.value)}
          />
          <label htmlFor="nuevaCenaKcal">...y las kilocalorías gastadas:</label>
          <input
            id="nuevaCenaKcal"
            type="number"
            className="text-input"
            value={caloriasDelDeporte}
            required
            autoFocus
            onChange={(e) => setCaloriasDelDeporte(e.target.value)}
          />

          <button className="form-button" disabled={loading}>
            Añadir
          </button>
        </form>

        <section id="seccion-deportes">
          <h3>Tu deporte ha consistido en:</h3>
          {deportes.length > 0 &&
            deportes.map((deporte) => {
              return (
                <p key={deporte.id}>
                  <span>{deporte.textoDelDeporte}</span>:{' '}
                  <span>{deporte.caloriasDelDeporte}</span> kilocalorías
                </p>
              );
            })}
          <button
            className="borrar-limite-button button-borrar"
            onClick={handleDeleteDeporte}
            disabled={loading}
          >
            Borrar
          </button>
        </section>
      </div>
      <hr></hr>
      <section id="sumatorio-deportes">
        <h3>Total = {totalKcalDeporte} kilocalorías</h3>
      </section>
    </div>
  );
}

Deporte.propTypes = {
  deportes: PropTypes.array.isRequired,
  setDeportes: PropTypes.func.isRequired,
  totalKcalDeporte: PropTypes.array.isRequired,
  setTotalKcalDeporte: PropTypes.func.isRequired,
};
