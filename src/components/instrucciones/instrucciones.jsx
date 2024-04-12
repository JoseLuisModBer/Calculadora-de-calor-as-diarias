import './instrucciones.css';

/*------------------------COMPONENTE INSTRUCTIONS----------------------------*/

export const Instrucciones = () => {
  return (
    <main className="main-instructions">
      <img
        src="https://fontmeme.com/permalink/240206/ac8f1b9a067a4bb14c6c77bfbd83801a.png"
        alt="imagen-instrucciones"
        id="imagen-instrucciones"
      />
      <section>
        <h2>Instructions:</h2>
        <p>
          Welcome to Pokepedia. Here you will find all the knowledge stored by
          generations and generations of Pokemon trainers.
        </p>
        <p>Using Pokepedia is very easy. Just follow these simple steps:</p>
        <ol>
          <li>
            Use the search engine to enter the number or name of a pokemon.
          </li>
          <li>Click on the pokéball icon to search.</li>
          <li>
            A successful search means that the pokémon exists. You will be shown
            a card with the name, weight, height, type and other information
            about each pokémon, as well as one or more images of the pokemon.
          </li>
        </ol>
        <p>
          Now there&apos;s nothing to stop you! Remember to take care of your
          pokemon and other people&apos;s pokemon ^^
        </p>
      </section>
      <div className="separador"></div>
      <section>
        <h2>Instrucciones:</h2>
        <p>
          Bienvenido/a a la Pokepedia. Aquí encontrarás todo el conocimiento
          almacenado por generaciones y generaciones de entrenadores pokemon.
        </p>
        <p>
          Usar la Pokepedia es muy fácil. Basta con seguir estos sencillos
          pasos:
        </p>
        <ol>
          <li>
            Utiliza el buscador para introducir el número o el nombre de un
            pokemon.
          </li>
          <li>Pulsa en el icono de la pokeball para buscar.</li>
          <li>
            Si la búsqueda ha sido exitosa significa que dicho pokemon existe.
            Se te mostrará una tarjeta con el nombre, peso, altura, tipo y demás
            datos de cada pokemon, así como una o varias imágenes del mismo.
          </li>
        </ol>
        <p>
          Ahora ya no hay nada que te detenga! Recuerda cuidar a tus pokemon y a
          los de los demás ^^
        </p>
      </section>
    </main>
  );
};
