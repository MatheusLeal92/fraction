import styled from 'styled-components';


const TituloHomeContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2vh;
`


const TituloHome = styled.div`
  width: calc(150px + 20vw);
`

function TituloDaHome() {
    return (
        <TituloHomeContainer>
          <TituloHome>
            <p>Frações</p>
          </TituloHome>
        </TituloHomeContainer>
    )
}

export default TituloDaHome