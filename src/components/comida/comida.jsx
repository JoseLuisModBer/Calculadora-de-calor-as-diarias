import '../componentes.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Comida({
  comidas,
  setComidas,
  totalKcalComida,
  setTotalKcalComida,
}) {
  const [textoDeLaComida, setTextoDeLaComida] = useState('');
  const [caloriasDeLaComida, setCaloriasDeLaComida] = useState('');
  const [loading, setLoading] = useState();

  // Función que maneja el envío del formulario.
  const handleSubmitComida = (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      // Creamos la nueva tarea. El id se calcula midiendo la longitud del array de objetos y sumando uno. El text lleva el valor de la variable text. el done está por defecto en false y cambia al pulsar el checkbox.
      const newComida = {
        id: comidas.length + 1,
        textoDeLaComida,
        caloriasDeLaComida: parseInt(caloriasDeLaComida),
      };

      // Actualizamos el array de tareas. Es importante crear un nuevo array para que React recargue el componente y podamos visualizar los cambios.
      setComidas([...comidas, newComida]);

      // Vaciamos los inputs del formulario.
      textoDeLaComida('');
      setCaloriasDeLaComida('');
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  // Calcular el total de calorías una vez
  setTotalKcalComida(
    comidas.reduce((total, comida) => total + comida.caloriasDeLaComida, 0)
  );

  //---------------------------------------------------------------
  //---------------------------------------------------------------

  return (
    <div id="tarjeta">
      {/*       <h2>COMIDA:</h2> */}
      <div className="formulario-y-datos">
        <form className="formulario-tarjeta" onSubmit={handleSubmitComida}>
          <label htmlFor="nuevaComida">Introduce una nueva comida:</label>
          <input
            id="nuevaComida"
            type="text"
            className="text-input"
            value={textoDeLaComida}
            maxLength="200"
            required
            autoFocus
            placeholder="Nueva comida..."
            onChange={(e) => setTextoDeLaComida(e.target.value)}
          />
          <label htmlFor="nuevaComidaKcal">...y sus kilocalorías:</label>
          <input
            id="nuevaComidaKcal"
            type="number"
            className="text-input"
            value={caloriasDeLaComida}
            required
            autoFocus
            onChange={(e) => setCaloriasDeLaComida(e.target.value)}
          />

          <button className="form-button" disabled={loading}>
            Añadir
          </button>
        </form>

        <section id="seccion-comidas">
          <h3>Tu comida ha consistido en:</h3>
          {comidas.length > 0 &&
            comidas.map((comida) => {
              return (
                <p key={comida.id}>
                  <span>{comida.textoDeLaComida}</span>:{' '}
                  <span>{comida.caloriasDeLaComida}</span> kilocalorías
                </p>
              );
            })}
        </section>
      </div>

      <section id="sumatorio-comidas">
        <h3>Total = {totalKcalComida} kilocalorías</h3>
      </section>
    </div>
  );
}

Comida.propTypes = {
  comidas: PropTypes.array.isRequired,
  setComidas: PropTypes.func.isRequired,
  totalKcalComida: PropTypes.array.isRequired,
  setTotalKcalComida: PropTypes.func.isRequired,
};
