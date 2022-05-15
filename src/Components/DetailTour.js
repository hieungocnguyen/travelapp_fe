import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { dataPictures } from "../dataPicture";
import { dataComments } from "../dataComment";

const DetailTour = () => {
   return (
      <>
         <Container>
            <Row lg={12} className="containerInfo-detail-tours">
               <Col>
                  <div className="thumbnail-container-detail-tours">
                     <div className="overlay-thumbnail-container-detail-tours"></div>
                     <img src={dataPictures.at(1).url} alt="thumnail" />
                  </div>
                  <div className="general-container-detail-tours">
                     <h4 className="title-container-detail-tours">
                        Visit Hoi An Ancient Town 7 days 7 nights
                     </h4>
                     <Row className="info-container-detail-tours">
                        <Col lg={5}>
                           <div className="info-container-detail-tours--label">
                              Location: <span>Hoi An</span>
                           </div>
                           <div className="info-container-detail-tours--label">
                              Duration: <span>10/05 - 15/06</span>
                           </div>
                        </Col>
                        <Col lg={4}>
                           <div className="info-container-detail-tours--label">
                              Adult ticket: <span>1.200.000</span>
                           </div>
                           <div className="info-container-detail-tours--label">
                              Child ticker: <span>800.000</span>
                           </div>
                        </Col>
                        <Col lg={3}>
                           <Link
                              to="/"
                              className="info-container-detail-tours--buttonBooking"
                           >
                              Booking
                           </Link>
                        </Col>
                     </Row>
                  </div>
               </Col>
            </Row>
            <Row className="descriptionAndTag-detail-tours">
               <Col lg={8} className="description-detail-tours">
                  <div className="description-detailTours--title">
                     Description
                  </div>
                  <div className="description-detailTours--content">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Hendrerit nec, enim sed in volutpat tortor viverra rhoncus.
                     Tellus arcu phasellus purus et, molestie et. Massa aliquet
                     amet id adipiscing. Vel at purus mi fusce tortor tempus
                     egestas quis commodo. Eu venenatis eget dui cursus
                     pharetra, mollis cursus in. Eu ac condimentum fermentum
                     volutpat leo adipiscing. Vestibulum bibendum netus
                     malesuada in quam ultrices. Rhoncus ipsum magna magna
                     dignissim at quis. Interdum et, scelerisque viverra turpis
                     blandit nunc est nunc ipsum.
                  </div>
               </Col>
               <Col lg={{ span: 3, offset: 1 }} className="tag-detail-tours">
                  <div className="tag-detailTours--title">Tag</div>
                  <div className="tag-detailTours--content">
                     #Sightseeing tour
                     <br />
                     #Discover
                     <br />
                     #Traditional
                  </div>
               </Col>
            </Row>
            <Row lg={12} className="feedback-detail-tours">
               <Col>
                  <div className="feedback-detailTour--title">Feedback</div>
                  <div className="feedback-detailTour--commentContainer">
                     {dataComments.map((item) => (
                        <div
                           key={item.id}
                           className="feedback-detailTour--comment"
                        >
                           <div className="comment-detailTour--userInfo flex">
                              <div
                                 style={{ background: `url(${item.url})` }}
                                 className="comment-detailTour--avatar-userInfo"
                              ></div>
                              <div className="comment-detailTour--detail-userInfo">
                                 <div className="comment-detailTour--username-userInfo">
                                    {item.username}
                                 </div>
                                 <div className="comment-detailTour--dayOfComment-userInfo">
                                    15/05/2022
                                 </div>
                              </div>
                           </div>
                           <div className="comment-detailTour-contentComment">
                              {item.comment}
                           </div>
                        </div>
                     ))}
                  </div>
               </Col>
            </Row>
            <Row lg={12} className="pictures-detail-tours">
               <Col>
                  <div className="pictures-detailTours--title">Pictures</div>
                  <div className="pictures-detailTours--album flex">
                     <div>
                        <div className="pictures-detailTours--singlePic"></div>
                     </div>
                     <div>
                        <div className="pictures-detailTours--singlePic"></div>
                     </div>
                     <div>
                        <div className="pictures-detailTours--singlePic"></div>
                     </div>
                     <div>
                        <div className="pictures-detailTours--singlePic"></div>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </>
   );
};
export default DetailTour;
