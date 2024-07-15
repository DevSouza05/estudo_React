import Banner from './componente/Banner/banner.js';
import CampoTexto from './componente/Banner/campoTexto/';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto  label="Nome"/>
      <CampoTexto  label="Cargo"/>
      <CampoTexto  label="Imagem"/>
    </div>
  );
}

export default App;
