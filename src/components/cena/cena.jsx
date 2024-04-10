import '../componentes.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Cena({
  cenas,
  setCenas,
  totalKcalCena,
  setTotalKcalCena,
}) {
  const [textoDeLaCena, setTextoDeLaCena] = useState('');
  const [caloriasDeLaCena, setCaloriasDeLaCena] = useState('');
  const [loading, setLoading] = useState();

  // Función que maneja el envío del formulario.
  const handleSubmitCena = (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      // Creamos la nueva tarea. El id se calcula midiendo la longitud del array de objetos y sumando uno. El text lleva el valor de la variable text. el done está por defecto en false y cambia al pulsar el checkbox.
      const newCena = {
        id: cenas.length + 1,
        textoDeLaCena,
        caloriasDeLaCena: parseInt(caloriasDeLaCena),
      };

      // Actualizamos el array de tareas. Es importante crear un nuevo array para que React recargue el componente y podamos visualizar los cambios.
      setCenas([...cenas, newCena]);

      // Vaciamos los inputs del formulario.
      textoDeLaCena('');
      setCaloriasDeLaCena('');
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  // Calcular el total de calorías una vez
  setTotalKcalCena(
    cenas.reduce((total, cena) => total + cena.caloriasDeLaCena, 0)
  );

  //---------------------------------------------------------------
  //---------------------------------------------------------------

  return (
    <div id="tarjeta">
      {/*       <h2>CENA:</h2> */}
      <div className="formulario-y-datos">
        <form className="formulario-tarjeta" onSubmit={handleSubmitCena}>
          <label htmlFor="nuevaCena">Introduce una nueva cena:</label>
          <input
            id="nuevaCena"
            type="text"
            className="text-input"
            value={textoDeLaCena}
            maxLength="200"
            required
            autoFocus
            placeholder="Nueva cena..."
            onChange={(e) => setTextoDeLaCena(e.target.value)}
          />
          <label htmlFor="nuevaCenaKcal">...y sus kilocalorías:</label>
          <input
            id="nuevaCenaKcal"
            type="number"
            className="text-input"
            value={caloriasDeLaCena}
            required
            autoFocus
            onChange={(e) => setCaloriasDeLaCena(e.target.value)}
          />

          <button className="form-button" disabled={loading}>
            Añadir
          </button>
        </form>

        <section id="seccion-cenas">
          <h3>Tu cena ha consistido en:</h3>
          {cenas.length > 0 &&
            cenas.map((cena) => {
              return (
                <p key={cena.id}>
                  <span>{cena.textoDeLaCena}</span>:{' '}
                  <span>{cena.caloriasDeLaCena}</span> kilocalorías
                </p>
              );
            })}
        </section>
      </div>

      <section id="sumatorio-cenas">
        <h3>Total = {totalKcalCena} kilocalorías</h3>
      </section>
    </div>
  );
}

Cena.propTypes = {
  cenas: PropTypes.array.isRequired,
  setCenas: PropTypes.func.isRequired,
  totalKcalCena: PropTypes.array.isRequired,
  setTotalKcalCena: PropTypes.func.isRequired,
};
