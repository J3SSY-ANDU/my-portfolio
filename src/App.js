import './App.css';
import { Header, Experiences, Projects, HireMe, Footer } from './containers';
import Loader from './components/loader/Loader';
import { useEffect, useState } from 'react';
import profileImage from './assets/profile-photo.png';
import { Fade } from '@mui/material';
function App() {
  const [profileImageLoaded, setProfileImageLoaded] = useState(false);
  const [imageLoadTime, setImageLoadTime] = useState(0);

    useEffect(() => {
        const img = new Image();
        const startTime = performance.now();
        img.src = profileImage;
        img.onload = () => {
          const endTime = performance.now();
          setImageLoadTime(endTime - startTime)
          setProfileImageLoaded(true);
        };
    }, []);
  return (
    !profileImageLoaded ? <Loader imageLoadTime={imageLoadTime} /> : (
      <Fade in={true} timeout={{enter: 2000, exit: 2000}}>
        <div className="App">
          <div className='portfolio__app-header'>
            <Header profileImage={profileImage}/>
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
