import './Home.css';
import TituloDaHome from '../componentes/TituloDaHome'


function Home() {
  return (
      <header className="Home">
        <div className='bounce-in-right'>
          <TituloDaHome/> 
        </div>
        <div className='pokemon fadeInDown'>
          
        </div>
      </header>
  );
}

export default Home;
