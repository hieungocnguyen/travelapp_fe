import { Dropdown } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.css";
import CatalogTours from "./CatalogTours";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API, { endpoints } from "../configs/API";

const Tours = () => {
   return (
      <>
         <div className="tours">
            <div className="top-tours flex">
               <div className="searchbar-tours">
                  <form className="form-searchbar-tours flex">
                     <input
                        type="text"
                        placeholder="Type location here..."
                        className="input-searchbar-tours"
                     ></input>
                  </form>
               </div>
               <div className="filter-tours">
                  <Dropdown id="container-dropdown">
                     <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Sort
                     </Dropdown.Toggle>

                     <Dropdown.Menu className="dropdown-childs">
                        <Dropdown.Item href="#/action-1">
                           Date of tour
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                           Price Increase
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                           Price Descende
                        </Dropdown.Item>
                     </Dropdown.Menu>
                  </Dropdown>
               </div>
            </div>
            <div className="body-tours">
               <CatalogTours />
               <div className="paginator-body-tours flex">
                  <Link to="/" className="active">
                     1
                  </Link>
                  <Link to="/">2</Link>
                  <Link to="/">3</Link>
                  <Link to="/">4</Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default Tours;
