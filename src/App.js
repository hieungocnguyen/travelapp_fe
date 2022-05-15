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

function App() {
   return (
      <BrowserRouter>
         <Header logo={logoBrand} />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/news" element={<News />} />
            <Route path="/tours/1" element={<DetailTour />} />
            <Route path="/news/1" element={<DetailNew />} />
         </Routes>
         <Footer logo={logoBrand} />
      </BrowserRouter>
   );
}

export default App;
