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
import Booking from "./Components/Booking";
import FbLogin from "./Components/FacebookButton";
import Apptest from "./Components/Apptest";
import ProfileUser from "./Components/ProfileUser";
import Bill from "./Components/Bill";
import Momo from "./Components/Momo";

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
               <Route path="/tours/:tourId" element={<DetailTour />} />
               <Route path="/booking/:tourId" element={<Booking />} />
               <Route path="/news/:newsId" element={<DetailNew />} />
               <Route path="/fblogin/" element={<FbLogin />} />
               <Route path="/apptest/" element={<Apptest />} />
               <Route path="/recovery/" element={<RecoveryPassword />} />
               <Route path="/profile/:userId" element={<ProfileUser />} />
               <Route path="/bill/:userId" element={<Bill />} />
               {/* <Route path="/momo/" element={<Momo />} /> */}
            </Routes>
            <Footer logo={logoBrand} />
         </UserContext.Provider>
      </BrowserRouter>
   );
}

export default App;
