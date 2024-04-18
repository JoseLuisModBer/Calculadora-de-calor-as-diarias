import '../componentes.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Desayuno({
  desayunos,
  setDesayunos,
  totalKcalDesayuno,
  setTotalKcalDesayuno,
}) {
  const [textoDelDesayuno, setTextoDelDesayuno] = useState('');
  const [caloriasDelDesayuno, setCaloriasDelDesayuno] = useState('');
  const [loading, setLoading] = useState();
  // Obtenemos referencia el elemento de App que muestra el resultado
  const resultadoCaloriasElement = document.getElementById(
    'resultado-calorias-restantes'
  );

  // Función que maneja el envío del formulario.
  const handleSubmitDesayuno = (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      // Creamos la nueva tarea. El id se calcula midiendo la longitud del array de objetos y sumando uno. El text lleva el valor de la variable text. el done está por defecto en false y cambia al pulsar el checkbox.
      const newDesayuno = {
        id: desayunos.length + 1,
        textoDelDesayuno,
        caloriasDelDesayuno: parseInt(caloriasDelDesayuno),
      };

      // Actualizamos el array de tareas. Es importante crear un nuevo array para que React recargue el componente y podamos visualizar los cambios.
      setDesayunos([...desayunos, newDesayuno]);

      // Vaciamos los inputs del formulario.
      setTextoDelDesayuno('');
      setCaloriasDelDesayuno('');
      // Ocultamos la sección de resultado final
      resultadoCaloriasElement.classList.add('doNotShow');
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  // Calcular el total de calorías una vez
  setTotalKcalDesayuno(
    desayunos.reduce(
      (total, desayuno) => total + desayuno.caloriasDelDesayuno,
      0
    )
  );

  //---------------------------------------------------------------

  const handleDeleteDesayuno = (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      // Borramos el array de desayunos de la variable y del localstorage
      setDesayunos([]);
      localStorage.setItem('desayunos', JSON.stringify(desayunos));
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  //---------------------------------------------------------------
  //---------------------------------------------------------------

  return (
    <div id="tarjeta">
      <h2>DESAYUNO:</h2>
      <div className="formulario-y-datos">
        <form className="formulario-tarjeta" onSubmit={handleSubmitDesayuno}>
          <label htmlFor="nuevoDesayuno">Introduce un nuevo desayuno:</label>
          <input
            id="nuevoDesayuno"
            type="text"
            className="text-input"
            value={textoDelDesayuno}
            maxLength="200"
            required
            autoFocus
            placeholder="Nuevo desayuno..."
            onChange={(e) => setTextoDelDesayuno(e.target.value)}
          />
          <label htmlFor="nuevoDesayunoKcal">...y sus kilocalorías:</label>
          <input
            id="nuevoDesayunoKcal"
            type="number"
            className="text-input"
            value={caloriasDelDesayuno}
            required
            autoFocus
            onChange={(e) => setCaloriasDelDesayuno(e.target.value)}
          />

          <button className="form-button" disabled={loading}>
            Añadir
          </button>
        </form>

        <section id="seccion-desayunos">
          <h3>Tu desayuno ha consistido en:</h3>
          {desayunos.length > 0 &&
            desayunos.map((desayuno) => {
              return (
                <p key={desayuno.id}>
                  <span>{desayuno.textoDelDesayuno}</span>:{' '}
                  <span>{desayuno.caloriasDelDesayuno}</span> kilocalorías
                </p>
              );
            })}
          <button
            className="borrar-limite-button button-borrar"
            onClick={handleDeleteDesayuno}
            disabled={loading}
          >
            Borrar
          </button>
        </section>
      </div>
      <hr></hr>
      <section id="sumatorio-desayunos">
        <h3>Total = {totalKcalDesayuno} kilocalorías</h3>
      </section>
    </div>
  );
}

Desayuno.propTypes = {
  desayunos: PropTypes.array.isRequired,
  setDesayunos: PropTypes.func.isRequired,
  totalKcalDesayuno: PropTypes.array.isRequired,
  setTotalKcalDesayuno: PropTypes.func.isRequired,
};
