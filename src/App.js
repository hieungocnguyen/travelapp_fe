import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route></Route>
         </Routes>
         <Footer />
      </BrowserRouter>
   );
}

export default App;
