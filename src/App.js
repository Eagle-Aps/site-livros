import Header from './componentes/Header'
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa';

const AppComponents = styled.div `
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52, #326589);

`
function App() {
  return (
    <AppComponents>
      <Header />
      <Pesquisa />
    </AppComponents>
  );
}
export default App;
