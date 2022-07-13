import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import ContentContainer from './components/Containers/ContentContainer';
import DetailView from './pages/DetailView';
import Homepage from './pages/Homepage';
import MapPage from './pages/MapPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ContentContainer />}>
          <Route path='detail' element={<DetailView />} />
          <Route path='' element={<Homepage />} />
          <Route path='map' element={<MapPage />} />
        </Route>
      </Routes>
      <BottomNavigation />
    </div>
  );
}

export default App;
