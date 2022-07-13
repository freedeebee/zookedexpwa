import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import ContentContainer from './components/Containers/ContentContainer';
import DetailPage from './pages/DetailPage/DetailPage';
import Homepage from './pages/Homepage';
import MapPage from './pages/MapPage';
import { Lorem } from './utils/Lorem';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ContentContainer />}>
          <Route path='detail/:id' element={<DetailPage/>}/>
          <Route path='' element={<Homepage />} />
          <Route path='map' element={<MapPage />} />
          <Route path='profile' element={<Profile/>}/>
        </Route>
      </Routes>
      <BottomNavigation />
    </div>
  );
}

export default App;
