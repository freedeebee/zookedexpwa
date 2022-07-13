import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import ContentContainer from './components/Containers/ContentContainer';
import DetailPage from './pages/DetailPage/DetailPage';
import CameraPage from './pages/CameraPage';
import Homepage from './pages/Homepage';
import MapPage from './pages/MapPage';
import { Lorem } from './utils/Lorem';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ContentContainer />}>
          <Route path='detail' element={<DetailPage imageSrc={'../../assets/images/photo-1614027164847-1b28cfe1df60.jpg'} animalName={'Katze'} location={'Ghana, Accra'} date={'01.01.1970'} text={Lorem}  />} />
          <Route path='camera' element={<CameraPage />} />
          <Route path='' element={<Homepage />} />
          <Route path='map' element={<MapPage />} />
        </Route>
      </Routes>
      <BottomNavigation />
    </div>
  );
}

export default App;
