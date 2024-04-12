import './calculadora.css';
import { useState, useEffect } from 'react';

import LimiteDiario from '../limite/limite';
import Desayuno from '../desayuno/desayuno';
import Comida from '../comida/comida';
import Cena from '../cena/cena';
import Deporte from '../deporte/deporte';

export default function Calculadora() {
  /*###########################
  #### VARIABLES INICIALES ####
  ###########################*/

  const [loading, setLoading] = useState();
  const resultadoCaloriasElement = document.getElementById(
    'resultado-calorias-restantes'
  );

  //---------------------------------------------------------------

  /*##############
  #### LÍMITE ####
  ##############*/
  const storedLimiteInLocalStorage =
    JSON.parse(localStorage.getItem('limiteDiario')) || [];

  const [limiteDeCalorias, setLimiteDeCalorias] = useState(
    storedLimiteInLocalStorage
  );

  useEffect(() => {
    localStorage.setItem('limiteDiario', JSON.stringify(limiteDeCalorias));
  }, [limiteDeCalorias]);

  // Almacenamos en una variable el límite de calorías establecido para poder hacer el cálculo final
  let limiteDeCaloriasFinal = '';

  {
    limiteDeCalorias.length > 0 &&
      limiteDeCalorias.map((limite) => {
        return limiteDeCaloriasFinal === parseInt(limite.limiteDeCalorias);
      });
  }
  //---------------------------------------------------------------

  /*################
  #### DESAYUNO ####
  ################*/

  //Almaceno en localStorage el contenido de desayunos:
  const storedDesayunosInLocalStorage =
    JSON.parse(localStorage.getItem('desayunos')) || [];

  // useState cuyo vaor inicial será lo que haya almacenado en el localStorage
  const [desayunos, setDesayunos] = useState(storedDesayunosInLocalStorage);

  // useEffect que recoge automáticamente el contenido del localStorage y lo almacena en tasks. Se actualizará cada vez que haya cambios en el array de dependencias [tasks]
  useEffect(() => {
    localStorage.setItem('desayunos', JSON.stringify(desayunos));
  }, [desayunos]);

  //---------------------------------------------------------------

  // Almaceno el total de kilocalorías del desayuno
  const [totalKcalDesayuno, setTotalKcalDesayuno] = useState(0);

  console.log('Desayunos', desayunos);
  console.log('totalKcalDesayuno', totalKcalDesayuno);

  //---------------------------------------------------------------

  /*##############
  #### COMIDA ####
  ##############*/

  //Almaceno en localStorage el contenido de desayunos:
  const storedComidasInLocalStorage =
    JSON.parse(localStorage.getItem('comidas')) || [];

  // useState cuyo vaor inicial será lo que haya almacenado en el localStorage
  const [comidas, setComidas] = useState(storedComidasInLocalStorage);

  // useEffect que recoge automáticamente el contenido del localStorage y lo almacena en tasks. Se actualizará cada vez que haya cambios en el array de dependencias [tasks]
  useEffect(() => {
    localStorage.setItem('comidas', JSON.stringify(comidas));
  }, [comidas]);

  //---------------------------------------------------------------

  // Almaceno el total de kilocalorías de la comida
  const [totalKcalComida, setTotalKcalComida] = useState(0);

  console.log('comidas', comidas);
  console.log('totalKcalComida', totalKcalComida);

  //---------------------------------------------------------------

  /*############
  #### CENA ####
  ############*/

  //Almaceno en localStorage el contenido de desayunos:
  const storedCenasInLocalStorage =
    JSON.parse(localStorage.getItem('cenas')) || [];

  // useState cuyo vaor inicial será lo que haya almacenado en el localStorage
  const [cenas, setCenas] = useState(storedCenasInLocalStorage);

  // useEffect que recoge automáticamente el contenido del localStorage y lo almacena en tasks. Se actualizará cada vez que haya cambios en el array de dependencias [tasks]
  useEffect(() => {
    localStorage.setItem('cenas', JSON.stringify(cenas));
  }, [cenas]);

  //---------------------------------------------------------------

  // Almaceno el total de kilocalorías de la comida
  const [totalKcalCena, setTotalKcalCena] = useState(0);

  console.log('cenas', cenas);
  console.log('totalKcalCena', totalKcalCena);

  //---------------------------------------------------------------

  /*################
  #### DEPORTES ####
  ################*/

  //Almaceno en localStorage el contenido de desayunos:
  const storedDeportesInLocalStorage =
    JSON.parse(localStorage.getItem('deportes')) || [];

  // useState cuyo vaor inicial será lo que haya almacenado en el localStorage
  const [deportes, setDeportes] = useState(storedDeportesInLocalStorage);

  // useEffect que recoge automáticamente el contenido del localStorage y lo almacena en tasks. Se actualizará cada vez que haya cambios en el array de dependencias [tasks]
  useEffect(() => {
    localStorage.setItem('deportes', JSON.stringify(deportes));
  }, [deportes]);

  //---------------------------------------------------------------

  // Almaceno el total de kilocalorías de la comida
  const [totalKcalDeporte, setTotalKcalDeporte] = useState(0);

  console.log('deportes', deportes);
  console.log('totalKcalDeporte', totalKcalDeporte);

  //---------------------------------------------------------------

  /*#################
  #### DELETEALL ####
  #################*/

  // Función que borra TODAS las tareas del localStorage:s
  const handleErraseAll = (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      // Ponemos el límete de calorías a cero.
      setLimiteDeCalorias([]);
      // Borramos el array de desayunos de la variable y del localstorage
      setDesayunos([]);
      localStorage.setItem('desayunos', JSON.stringify(desayunos));
      // Borramos el array de comidas de la variable y del localstorage
      setComidas([]);
      localStorage.setItem('desayunos', JSON.stringify(desayunos));
      // Borramos el array de cenas de la variable y del localstorage
      setCenas([]);
      localStorage.setItem('desayunos', JSON.stringify(desayunos));
      // Borramos el array de deporte de la variable y del localstorage
      setDeportes([]);
      localStorage.setItem('desayunos', JSON.stringify(desayunos));
      // Ocultamos la sección de resultado final
      resultadoCaloriasElement.classList.add('doNotShow');
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  //---------------------------------------------------------------

  /*#################
  #### CALCULAR ####
  #################*/
  const [caloriasRestantes, setCaloriasRestantes] = useState(0);

  const handleCalculateRemainingCalories = (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const limiteDiario =
        limiteDeCalorias.length > 0 ? limiteDeCalorias[0].limiteDeCalorias : 0;
      const caloriasRestantes =
        limiteDiario -
        (totalKcalDesayuno + totalKcalComida + totalKcalCena) -
        totalKcalDeporte;
      setCaloriasRestantes(caloriasRestantes);

      // Hacemos visible la sección de resultado final
      resultadoCaloriasElement.classList.remove('doNotShow');
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  //---------------------------------------------------------------
  //---------------------------------------------------------------

  return (
    <>
      <section id="contenedor-limite">
        <LimiteDiario
          limiteDeCalorias={limiteDeCalorias}
          setLimiteDeCalorias={setLimiteDeCalorias}
        />
      </section>

      <section id="contenedor-desayunos">
        <Desayuno
          desayunos={desayunos}
          setDesayunos={setDesayunos}
          totalKcalDesayuno={totalKcalDesayuno}
          setTotalKcalDesayuno={setTotalKcalDesayuno}
        />
      </section>

      <section id="contenedor-comidas">
        <Comida
          comidas={comidas}
          setComidas={setComidas}
          totalKcalComida={totalKcalComida}
          setTotalKcalComida={setTotalKcalComida}
        />
      </section>

      <section id="contenedor-cenas">
        <Cena
          cenas={cenas}
          setCenas={setCenas}
          totalKcalCena={totalKcalCena}
          setTotalKcalCena={setTotalKcalCena}
        />
      </section>

      <section id="contenedor-deportes">
        <Deporte
          deportes={deportes}
          setDeportes={setDeportes}
          totalKcalDeporte={totalKcalDeporte}
          setTotalKcalDeporte={setTotalKcalDeporte}
        />
      </section>

      <section id="seccion-botones-calcular-y-borrar">
        <button
          className="calcular-button"
          onClick={handleCalculateRemainingCalories}
          disabled={loading}
        >
          Calcular
        </button>

        <button
          className="erraseall-button"
          onClick={handleErraseAll}
          disabled={loading}
        >
          Borrar tareas
        </button>
      </section>

      <section id="resultado-calorias-restantes" className="doNotShow">
        <p>Las calorías que aún puedes consumir son: {caloriasRestantes}</p>
      </section>
    </>
  );
}
