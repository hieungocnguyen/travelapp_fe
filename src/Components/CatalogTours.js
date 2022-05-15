import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dataPictures } from "../dataPicture";

const CatalogTours = () => {
   return (
      <>
         <Container fluid>
            <Row className="container-catalog-tours flex">
               {dataPictures.map((item) => (
                  <Col
                     md={12}
                     lg={6}
                     key={item.id}
                     className="card-catalog-tours flex"
                  >
                     <div className="content-card-catalog">
                        <div className="title-card-catalog-tours">
                           Title tour
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
                                    1200000
                                 </div>
                                 <div className="labelprice-info-general-card">
                                    Child Ticket:
                                 </div>
                                 <div className="valueprice-info-general-card">
                                    1200000
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
