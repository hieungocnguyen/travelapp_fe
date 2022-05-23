import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import API, { endpoints } from "../configs/API";
import imageTest from "../Images/2.jpg";

const News = () => {
   const [news, setNews] = useState(null);

   useEffect(() => {
      const loadNews = async () => {
         const res = await API.get(endpoints["news"]);
         console.log(res.data.results);
         setNews(res.data.results);
      };
      loadNews();
   }, []);

   if (news === null)
      return (
         <Container>
            <Spinner animation="grow" />
         </Container>
      );
   return (
      <>
         <Container className="container-news">
            <Row className="otherNews-container">
               {news.map((i) => (
                  <Col className="childNews-container" lg={6}>
                     <Link
                        to={`/news/${i.id}`}
                        className="hotNews-container--link"
                     >
                        <div className="hotNews-container--content">
                           <img
                              src={i.image_path}
                              alt="image-hotNews"
                              className="hotNews-container--image"
                           ></img>
                           <div className="hotNews-container-author">
                              <div className="author-hotNews-dayUpload">
                                 <Moment format="DD/MM/YYYY">
                                    {i.updated_date}
                                 </Moment>
                              </div>
                              <div className="author-otherNews-title">
                                 {i.title}
                              </div>
                              <div className="author-hotNews-nameAuthor">
                                 By {i.author.username}
                              </div>
                           </div>
                        </div>
                     </Link>
                  </Col>
               ))}
            </Row>
         </Container>
      </>
   );
};

export default News;
