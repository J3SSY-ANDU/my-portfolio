import './App.css';
import { Header, Experiences, Projects, HireMe, Footer } from './containers';
import Loader from './components/loader/Loader';
import { useEffect, useState } from 'react';
import profileImage from './assets/profile-photo.webp';
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
      <div className="App">
        <div className='portfolio__app-header'>
          <Header profileImage={profileImage}/>
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
    )
  );
}

export default App;
