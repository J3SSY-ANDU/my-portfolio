import './App.css';
import { Header, Experiences, Projects, HireMe, Footer } from './containers';

function App() {
  return (
    <div className="App">
      <div className='portfolio__app-header'>
        <Header/>
        <div className='portfolio__app-body'>
          <div style={{marginBottom: '5%'}}>
            <Experiences/>
          </div>
          <div style={{margin: '5% 0'}}>
            <Projects/>
          </div>
          <div style={{margin: '5% 0'}}>
            <HireMe/>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
