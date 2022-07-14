import React from "react";
import { Route, Routes } from "react-router-dom";
import ContentContainer from "./components/Containers/ContentContainer";
import DetailPage from "./pages/DetailPage/DetailPage";
import Homepage from "./pages/Homepage";
import MapPage from "./pages/MapPage";
import Profile from "./components/Profile/Profile";
import LoginPage from "./pages/LoginPage/LoginPage";
import DonationPage from "./pages/DonationPage/DonationPage";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<ContentContainer />}>
          <Route path='detail/:id' element={<DetailPage />} />
          <Route path='donation' element={<DonationPage />} />
          <Route path='' element={<Homepage />} />
          <Route path='map' element={<MapPage />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
