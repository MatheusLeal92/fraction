import styled from 'styled-components';
import tituloFracaoImagem from '../imagens/titulo-fracao.png'


const TituloHomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2vh 0;
`


const TituloHome = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F4B18C;
  height: calc(50px + 5vh);
`

function TituloDaHome() {
    return (
        <TituloHomeContainer>
          <TituloHome
            src={tituloFracaoImagem}
            alt='Titulo da Home'
            />
        </TituloHomeContainer>
    )
}

export default TituloDaHome