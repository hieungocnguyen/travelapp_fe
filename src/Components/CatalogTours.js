import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Moment from "react-moment";
import { Link, useParams, useSearchParams } from "react-router-dom";
import API, { endpoints } from "../configs/API";

const CatalogTours = () => {
   const [tours, setTours] = useState([]);
   const { tourId } = useParams();
   const [searchKey, setSearchKey] = useState();
   const [s] = useSearchParams(); // sort s
   let [pageNumber] = useSearchParams(); // paginator
   let [searchkw] = useSearchParams(); // search kw

   useEffect(() => {
      window.scrollTo(0, 0);
      const loadTours = async () => {
         try {
            let query = pageNumber.get("page");
            if (query !== null) {
               query = `?page=${query}`;
            } else {
               query = "";
            }

            const kw = searchkw.get("kw");
            if (kw !== null) query = `?kw=${kw}`;
            const priceFrom = searchkw.get("price_from");
            if (priceFrom !== null) query = `?price_from=${priceFrom}`;
            const priceTo = searchkw.get("price_to");
            if (priceTo !== null) query = `?price_to=${priceTo}`;
            const departureDay = searchkw.get("departure_date");
            if (departureDay !== null)
               query = `?departure_date=${departureDay}`;

            console.log(query);
            console.log(priceFrom);
            const res = await API.get(`${endpoints["tours"]}${query}`).then(
               (res) => {
                  if (s.get("s") == "sortInc") {
                     setTours(
                        res.data.results.sort(
                           (t1, t2) => t1.price_for_adults - t2.price_for_adults
                        )
                     );
                  } else {
                     if (s.get("s") == "sortDec") {
                        setTours(
                           res.data.results.sort(
                              (t1, t2) =>
                                 t2.price_for_adults - t1.price_for_adults
                           )
                        );
                     } else {
                        if (s.get("s") == "sortDate") {
                           setTours(
                              res.data.results.sort(
                                 (t1, t2) =>
                                    t1.departure_date - t2.departure_date
                              )
                           );
                        } else {
                           setTours(res.data.results);
                        }
                     }
                  }
               }
            );
         } catch (error) {
            setTours([]);
         }
      };
      loadTours();
   }, [pageNumber]);

   return (
      <>
         <Container fluid>
            <Row className="container-catalog-tours flex">
               {tours.map((item) => (
                  <Col
                     md={12}
                     lg={6}
                     key={item.id}
                     className="card-catalog-tours flex"
                  >
                     <div className="content-card-catalog">
                        <div className="title-card-catalog-tours">
                           {item.name}
                        </div>
                        <div className="just-a-line-card"></div>
                        <div className="general-card-catalog-tours flex">
                           <div className="image-general-card">
                              <img src={item.image_path} alt="img-card" />
                           </div>
                           <div className="info-general-card">
                              <div className="dateoftour-info-general-card">
                                 DD:{"  "}
                                 <Moment format="DD/MM">
                                    {item.departure_date}
                                 </Moment>
                              </div>
                              <div className="dateoftour-info-general-card">
                                 ED:{"  "}
                                 <Moment format="DD/MM">{item.end_date}</Moment>
                              </div>
                              <div className="price-info-general-card">
                                 <div className="labelprice-info-general-card">
                                    Adult Ticket:
                                    <span className="valueprice-info-general-card">
                                       {item.price_for_adults}
                                    </span>
                                 </div>

                                 <div className="labelprice-info-general-card">
                                    Child Ticket:
                                    <span className="valueprice-info-general-card">
                                       {item.price_for_children}
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <Link
                           to={`/tours/${item.id}`}
                           className="mdbutton-catalog-tours"
                        >
                           More detail
                        </Link>
                     </div>
                  </Col>
               ))}
            </Row>
         </Container>
         <div className="paginator-body-tours flex">
            <Link to="?page=1">1</Link>
            <Link to="?page=2">2</Link>
            <Link to="?page=3">3</Link>
            <Link to="?page=3">4</Link>
         </div>
      </>
   );
};

export default CatalogTours;
