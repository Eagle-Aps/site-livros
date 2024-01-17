import Header from './componentes/Header'
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa';
import Lancamentos from './componentes/Lancamentos';

const AppComponents = styled.div`

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52, #326589);

`
function App() {
  return (
    <AppComponents>
      <Header />
      <Pesquisa />
      <Lancamentos />
    </AppComponents>
  );
}
export default App;
