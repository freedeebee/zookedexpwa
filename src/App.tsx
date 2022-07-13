import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import ContentContainer from './components/Containers/ContentContainer';
import DetailPage from './pages/DetailPage/DetailPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ContentContainer />}>
          <Route path='detail' element={<DetailPage />} />
        </Route>
      </Routes>
      <BottomNavigation />
    </div>
  );
}

export default App;
