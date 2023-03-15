import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomeCompany,
  LandingPages,
  HomeWorker,
  HireWorker,
  HireCompany,
  EditProfileWrk,
  EditProfilCmpny,
  RegistWorker,
  RegistCompany,
  ProfileWorker,
  ProfileCompany,
} from "./pages";
import "./assets/css/index.css";
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import ForgotPassword from "./pages/forgotPassword";
import LoginWorker from "./pages/Login/loginWorker";
import LoginCompany from "./pages/Login/loginCompany";

const App = () => {
  const { store } = configureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPages />} />
          <Route path="/homecompany" element={<HomeCompany />} />
          <Route path="/homeworker" element={<HomeWorker />} />
          <Route path="/hireworker/:id" element={<HireWorker />} />
          <Route path="/hirecompany/:id" element={<HireCompany />} />
          <Route path="/loginworker" element={<LoginWorker />} />
          <Route path="/logincompany" element={<LoginCompany />} />
          <Route path="/editprofilework/:id" element={<EditProfileWrk />} />
          <Route path="/editprofilecompany/:id" element={<EditProfilCmpny />} />
          <Route path="/registworker" element={<RegistWorker />} />
          <Route path="/registcompany" element={<RegistCompany />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/profileworker/:id" element={<ProfileWorker />} />
          <Route path="/profilecompany/:id" element={<ProfileCompany />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
