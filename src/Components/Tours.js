import { Dropdown } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.css";
import CatalogTours from "./CatalogTours";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API, { endpoints } from "../configs/API";

const Tours = () => {
   const [kw, setKw] = useState();
   const [priceFrom, setPriceFrom] = useState();
   const [priceTo, setPriceTo] = useState();
   const [departureDay, setDepartureDay] = useState();
   const nav = useNavigate();

   const search = (event) => {
      event.preventDefault();
      nav(`/tours?kw=${kw}`);
   };

   const priceFromSearch = (event) => {
      event.preventDefault();
      nav(`/tours?price_from=${priceFrom}`);
   };

   const priceToSearch = (event) => {
      event.preventDefault();
      nav(`/tours?price_to=${priceTo}`);
   };

   const departureDaySearch = (event) => {
      event.preventDefault();
      nav(`/tours?departure_date=${departureDay}`);
   };

   return (
      <>
         <div className="tours">
            <div className="top-tours">
               <div className="searchbar-tours">
                  <form className="form-searchbar-tours flex" onSubmit={search}>
                     <input
                        type="text"
                        value={kw}
                        placeholder="Type location here..."
                        className="input-searchbar-tours"
                        onChange={(evt) => setKw(evt.target.value)}
                     ></input>
                     <button
                        type="submit"
                        className="button-search-keyword--tours"
                     >
                        Search
                     </button>
                  </form>
                  <div className="filter-tours">
                     <Dropdown id="container-dropdown">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                           Sort
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-childs">
                           <Dropdown.Item href="/tours?s=sortDate">
                              Date of tour
                           </Dropdown.Item>
                           <Dropdown.Item href="/tours?s=sortInc">
                              Price Increase
                           </Dropdown.Item>
                           <Dropdown.Item href="/tours?s=sortDec">
                              Price Descende
                           </Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                  </div>
               </div>
               <div className="secondBar-filter-tours">
                  <form onSubmit={priceFromSearch}>
                     <input
                        className="input-searchBarSecond-tours"
                        type="number"
                        value={priceFrom}
                        onChange={(evt) => setPriceFrom(evt.target.value)}
                     ></input>
                     <button type="submit" className="button-secondBar-tours">
                        Price from
                     </button>
                  </form>
                  <form onSubmit={priceToSearch}>
                     <input
                        className="input-searchBarSecond-tours"
                        type="number"
                        value={priceTo}
                        onChange={(evt) => setPriceTo(evt.target.value)}
                     ></input>
                     <button type="submit" className="button-secondBar-tours">
                        Price to
                     </button>
                  </form>
                  <form onSubmit={departureDaySearch}>
                     <input
                        className="input-searchBarSecond-tours"
                        type="date"
                        value={departureDay}
                        onChange={(evt) => setDepartureDay(evt.target.value)}
                     ></input>
                     <button type="submit" className="button-secondBar-tours">
                        Select
                     </button>
                  </form>
               </div>
            </div>
            <div className="body-tours">
               <CatalogTours />
            </div>
         </div>
      </>
   );
};

export default Tours;
