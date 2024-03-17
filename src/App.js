import './App.css';
import { Header, Experiences, Projects, HireMe, Footer } from './containers';
import Loader from './components/loader/Loader';
import { useEffect, useState } from 'react';
import { Fade } from '@mui/material';
function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1100);
  })
  return (
    loader ? <Loader /> : (
      <Fade in={true} timeout={{enter: 2000, exit: 2000}}>
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
      </Fade>
    )
  );
}

export default App;
