import './App.css';
import { Navbar, Header, Experiences, Projects, HireMe, Footer } from './containers';

function App() {
  return (
    <div className="App">
      <div className='portfolio__app-header'>
        <Navbar/>
        <Header/>
        <Experiences/>
        <Projects/>
        <HireMe/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
