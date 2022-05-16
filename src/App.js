import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Layout/Header/header";
import Footer from "./Layout/Footer/footer";
import logoBrand from "./Images/Logo.svg";
import Home from "./Components/Home";
import Tours from "./Components/Tours";
import News from "./Components/News";
import DetailTour from "./Components/DetailTour";
import DetailNew from "./Components/DetailNew";
import API, { endpoints } from "./configs/API";
import { createContext, useEffect, useReducer, useState } from "react";
import myReducer from "./Reducers/MyReducer";
import cookies from "react-cookies";
import RecoveryPassword from "./Components/RecoveryPassword";

export const UserContext = createContext();

function App() {
   const [user, dispatch] = useReducer(myReducer, cookies.load("current_user"));

   return (
      <BrowserRouter>
         <UserContext.Provider value={[user, dispatch]}>
            <Header logo={logoBrand} />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/tours" element={<Tours />} />
               <Route path="/news" element={<News />} />
               <Route path="/tours/1" element={<DetailTour />} />
               <Route path="/news/1" element={<DetailNew />} />
               <Route path="/recovery/" element={<RecoveryPassword />} />
            </Routes>
            <Footer logo={logoBrand} />
         </UserContext.Provider>
      </BrowserRouter>
   );
}

export default App;
