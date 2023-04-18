import './App.css';
import Testimonio from "./componentes/Testimonios.js"

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Este es lorem itsum jugloie WEB</h1>
        <Testimonio
          nombre="Emma"
          pais="Suecia"
          imagen="emma"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus luctus neque sit amet laoreet. Praesent rhoncus rhoncus lectus, ac consectetur risus porttitor sed. Vivamus nunc nulla, viverra vitae quam in, volutpat interdum dui. Nullam eget ultrices est, quis finibus orci. Integer egestas, massa vel finibus congue, risus metus hendrerit orci, ac gravida diam sapien eget orci. Donec leo nisl, mollis vitae libero eget, suscipit viverra nibh. Pellentesque id posuere felis. Nulla eu ex ac eros efficitur semper non non sapien. "
        />
        <Testimonio
          nombre="Sarah"
          pais="Tilaran"
          imagen="sarah"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus luctus neque sit amet laoreet. Praesent rhoncus rhoncus lectus, ac consectetur risus porttitor sed. Vivamus nunc nulla, viverra vitae quam in, volutpat interdum dui. Nullam eget ultrices est, quis finibus orci. Integer egestas, massa vel finibus congue, risus metus hendrerit orci, ac gravida diam sapien eget orci. Donec leo nisl, mollis vitae libero eget, suscipit viverra nibh. Pellentesque id posuere felis. Nulla eu ex ac eros efficitur semper non non sapien. "
        />
        <Testimonio
          nombre="Shawn"
          pais="Palmares"
          imagen="shawn"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus luctus neque sit amet laoreet. Praesent rhoncus rhoncus lectus, ac consectetur risus porttitor sed. Vivamus nunc nulla, viverra vitae quam in, volutpat interdum dui. Nullam eget ultrices est, quis finibus orci. Integer egestas, massa vel finibus congue, risus metus hendrerit orci, ac gravida diam sapien eget orci. Donec leo nisl, mollis vitae libero eget, suscipit viverra nibh. Pellentesque id posuere felis. Nulla eu ex ac eros efficitur semper non non sapien. "
        />
      </div>
    </div>
  );
}

export default App;
