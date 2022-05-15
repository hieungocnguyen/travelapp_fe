import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import imageTest from "../Images/2.jpg";

const News = () => {
   return (
      <>
         <Container className="container-news">
            <Row className="hotNews-container">
               <Col lg={12}>
                  <Link to="/news/1" className="hotNews-container--link">
                     <div className="hotNews-container--content">
                        <img
                           src={imageTest}
                           alt="image-hotNews"
                           className="hotNews-container--image"
                        ></img>
                        <div className="hotNews-container-author">
                           <div className="author-hotNews-dayUpload">
                              11/12/2021
                           </div>
                           <div className="author-hotNews-title">
                              Da Lat - a best place to refresh your soul
                           </div>
                           <div className="author-hotNews-nameAuthor">
                              By Hieu Nguyen
                           </div>
                        </div>
                     </div>
                  </Link>
               </Col>
            </Row>
            <Row className="otherNews-container">
               <Col className="childNews-container" lg={6}>
                  <Link to="/news/2" className="hotNews-container--link">
                     <div className="hotNews-container--content">
                        <img
                           src={imageTest}
                           alt="image-hotNews"
                           className="hotNews-container--image"
                        ></img>
                        <div className="hotNews-container-author">
                           <div className="author-hotNews-dayUpload">
                              11/12/2021
                           </div>
                           <div className="author-otherNews-title">
                              Da Lat - a best place to refresh your soul
                           </div>
                           <div className="author-hotNews-nameAuthor">
                              By Hieu Nguyen
                           </div>
                        </div>
                     </div>
                  </Link>
               </Col>
               <Col className="childNews-container" lg={6}>
                  <Link to="/news/3" className="hotNews-container--link">
                     <div className="hotNews-container--content">
                        <img
                           src={imageTest}
                           alt="image-hotNews"
                           className="hotNews-container--image"
                        ></img>
                        <div className="hotNews-container-author">
                           <div className="author-hotNews-dayUpload">
                              11/12/2021
                           </div>
                           <div className="author-otherNews-title">
                              Da Lat - a best place to refresh your soul
                           </div>
                           <div className="author-hotNews-nameAuthor">
                              By Hieu Nguyen
                           </div>
                        </div>
                     </div>
                  </Link>
               </Col>
               <Col className="childNews-container" lg={6}>
                  <Link to="/news/4" className="hotNews-container--link">
                     <div className="hotNews-container--content">
                        <img
                           src={imageTest}
                           alt="image-hotNews"
                           className="hotNews-container--image"
                        ></img>
                     </div>
                  </Link>
               </Col>
               <Col className="childNews-container" lg={6}>
                  <Link to="/news/5" className="hotNews-container--link">
                     <div className="hotNews-container--content">
                        <img
                           src={imageTest}
                           alt="image-hotNews"
                           className="hotNews-container--image"
                        ></img>
                     </div>
                  </Link>
               </Col>
               <Col className="childNews-container" lg={6}>
                  <Link to="/news/6" className="hotNews-container--link">
                     <div className="hotNews-container--content">
                        <img
                           src={imageTest}
                           alt="image-hotNews"
                           className="hotNews-container--image"
                        ></img>
                     </div>
                  </Link>
               </Col>
               <Col className="childNews-container" lg={6}>
                  <Link to="/news/1" className="hotNews-container--link">
                     <div className="hotNews-container--content">
                        <img
                           src={imageTest}
                           alt="image-hotNews"
                           className="hotNews-container--image"
                        ></img>
                     </div>
                  </Link>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default News;
