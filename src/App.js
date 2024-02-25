import './App.css';
import { Header, Experiences, Projects, HireMe, Footer } from './containers';

function App() {
  return (
    <div className="App">
      <div className='portfolio__app-header'>
        <Header/>
        <div className='portfolio__app-footer'>
          <Experiences/>
          <Projects/>
          <HireMe/>
          <Footer/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
