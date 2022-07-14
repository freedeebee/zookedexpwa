import React from "react";
import { Route, Routes } from "react-router-dom";
import ContentContainer from "./components/Containers/ContentContainer";
import DetailPage from "./pages/DetailPage/DetailPage";
import Homepage from "./pages/Homepage";
import MapPage from "./pages/MapPage";
import Profile from "./components/Profile/Profile";
import LoginPage from "./pages/LoginPage/LoginPage";
import DonationPage from "./pages/DonationPage/DonationPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<ContentContainer />}>
          <Route path='detail/:id' element={<DetailPage />} />
          <Route path='' element={<Homepage />} />
          <Route path='map' element={<MapPage />} />
          <Route path='profile' element={<Profile />} />
          <Route path='shop' element={<ShopPage />} />
        </Route>
        <Route path='login' element={<LoginPage />} />
        <Route path='donation/:id' element={<DonationPage />} />
        <Route path='register' element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
