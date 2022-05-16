import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import API, { endpoints } from "../configs/API";
import { dataPictures } from "../dataPicture";

const CatalogTours = () => {
   const [tours, setTours] = useState([]);

   useEffect(() => {
      const loadTours = async () => {
         const res = await API.get(endpoints["tags"]);
         setTours(res.data.results);
         console.log(res.data.results);
      };
      loadTours();
   }, []);
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
                           {item.id}
                        </div>
                        <div className="just-a-line-card"></div>
                        <div className="general-card-catalog-tours flex">
                           <div className="image-general-card">
                              <img src={item.url} alt="img-card" />
                           </div>
                           <div className="info-general-card">
                              <div className="dateoftour-info-general-card">
                                 8/5-10/5
                              </div>
                              <div className="price-info-general-card">
                                 <div className="labelprice-info-general-card">
                                    Adult Ticket:
                                 </div>
                                 <div className="valueprice-info-general-card">
                                    {item.price_for_adults}
                                 </div>
                                 <div className="labelprice-info-general-card">
                                    Child Ticket:
                                 </div>
                                 <div className="valueprice-info-general-card">
                                    {item.price_for_children}
                                 </div>
                              </div>
                           </div>
                        </div>
                        <Link
                           to={`/tours/1`}
                           className="mdbutton-catalog-tours"
                        >
                           More detail
                        </Link>
                     </div>
                  </Col>
               ))}
            </Row>
         </Container>
      </>
   );
};

export default CatalogTours;
