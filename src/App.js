import './App.css';
import { Navbar, Header, Experiences, Projects, HireMe, Footer } from './containers';

function App() {
  return (
    <div className="App">
      <div className='portfolio__app-header'>
        <Navbar/>
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
