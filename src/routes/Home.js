import TituloDaHome from '../componentes/tituloDaHome.js';
import styled from 'styled-components';

const HomeContainer = styled.div`
    background-color: #93E9BE;
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


function Home() {
  return (
      <HomeContainer>
        <div className='bounce-in-right'>
          <TituloDaHome/> 
        </div>
        <div className='pokemon fadeInDown'>
          
        </div>
      </HomeContainer>
  );
}

export default Home;
