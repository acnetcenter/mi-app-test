import React from "react";
import "../styles-sheets/Testimonio.css";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/testimonio-emma.jpg")}
        alt="Foto de Emma"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
        <p className="texto-testimonio">Aliquam odio nisl, finibus sit amet urna vel, pretium ultricies tortor. Maecenas in porttitor purus. Integer venenatis semper fringilla. Cras sollicitudin ut erat nec eleifend. Ut dui odio, feugiat vel feugiat vitae, semper in ex. Duis condimentum ac velit sed suscipit. Praesent egestas tortor sed dictum vestibulum. Curabitur commodo tristique ante non tristique. Duis finibus non sem nec laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt nibh</p>
      </div>
    </div>
  );
}

export default Testimonio; 