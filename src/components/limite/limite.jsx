import '../componentes.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function LimiteDiario({
  limiteDeCalorias,
  setLimiteDeCalorias,
}) {
  const [textoDelLimite, setTextoDelLimite] = useState('');
  const [loading, setLoading] = useState();

  // Función que maneja el envío del formulario.
  const handleSubmitLimite = (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      // Creamos la nueva tarea. El id se calcula midiendo la longitud del array de objetos y sumando uno. El text lleva el valor de la variable text. el done está por defecto en false y cambia al pulsar el checkbox.
      const newLimite = {
        limiteDeCalorias: parseInt(textoDelLimite),
      };

      // Actualizamos el array de tareas. Es importante crear un nuevo array para que React recargue el componente y podamos visualizar los cambios.
      setLimiteDeCalorias([newLimite]);

      // Vaciamos los inputs del formulario.
      setTextoDelLimite('');
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  //---------------------------------------------------------------
  //---------------------------------------------------------------

  return (
    <div id="tarjeta">
      {/*       <h2>LÍMITE:</h2> */}
      <div className="formulario-y-datos">
        <form className="formulario-tarjeta" onSubmit={handleSubmitLimite}>
          <label htmlFor="nuevoLimite">
            Introduce tu límite de calorías (kcal) diario:
          </label>
          <input
            id="nuevoLimite"
            type="number"
            className="text-input"
            value={textoDelLimite}
            required
            autoFocus
            onChange={(e) => setTextoDelLimite(e.target.value)}
          />

          <button className="form-button" disabled={loading}>
            Fijar
          </button>
        </form>

        <section id="seccion-desayunos">
          <h3>Tu límite diario de calorías es:</h3>
          {limiteDeCalorias.length > 0 &&
            limiteDeCalorias.map((limite) => {
              return (
                <p key={limite.id}>
                  <span>{limite.limiteDeCalorias}</span>: kilocalorías.
                </p>
              );
            })}
        </section>
      </div>
    </div>
  );
}

LimiteDiario.propTypes = {
  limiteDeCalorias: PropTypes.array.isRequired,
  setLimiteDeCalorias: PropTypes.func.isRequired,
};
