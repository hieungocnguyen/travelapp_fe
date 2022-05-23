import { Col, Container, Form, Row, Spinner, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { dataPictures } from "../dataPicture";
import { dataComments } from "../dataComment";
import API, { authAxios, endpoints } from "../configs/API";
import { UserContext } from "../App";
import { useContext, useEffect, useState } from "react";
import Moment from "react-moment";
import ReactStars from "react-rating-stars-component";
import Rating from "@mui/material/Rating";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";

const DetailTour = () => {
   const [tour, setTour] = useState(null);
   const [tagTour, setTagTour] = useState(null);
   const [commentTour, setCommentTour] = useState(null);
   const [ratingTour, setRatingTour] = useState(null);
   const [comments, setComments] = useState([]);
   const [rates, setRates] = useState();
   const { tourId } = useParams();
   const [user, dispatch] = useContext(UserContext);
   const [imageTour, setImageTour] = useState([]);
   const [starAverage, setStarAverage] = useState([]);

   useEffect(() => {
      const loadLesson = async () => {
         let res = null;
         let tag = null;
         if (user != null) {
            res = await authAxios().get(endpoints["tour-detail"](tourId));
            tag = await authAxios().get(endpoints["tags"](tourId));
         } else {
            res = await API.get(endpoints["tour-detail"](tourId));
            tag = await API.get(endpoints["tags"](tourId));
         }
         setTour(res.data);
         setTagTour(tag.data);
      };

      loadLesson();
   }, []);

   useEffect(() => {
      const loadComments = async () => {
         const comment = await API.get(endpoints["comment-tour"](tourId));
         setCommentTour(comment.data.results.sort());
      };

      loadComments();
   }, [comments]);

   useEffect(() => {
      const loadRating = async () => {
         const rating = await API.get(endpoints["rating-tour"](tourId));
         setRatingTour(rating.data.results);
         console.log(rating.data.results);
      };
      loadRating();
   }, [rates]);

   useEffect(() => {
      const loadImage = async () => {
         const imageList = await API.get(endpoints["tour-images"](tourId));
         setImageTour(imageList.data);
         console.log(imageList.data);
      };
      loadImage();
   }, []);

   useEffect(() => {
      const loadStarAverage = async () => {
         const load = await API.get(endpoints["tours/rate_average"](tourId));
         console.log(load.data);
         setStarAverage(load.data);
      };

      loadStarAverage();
   }, [starAverage]);

   let bookingButton = (
      <>
         <Link
            to={`/booking/${tourId}`}
            className="info-container-detail-tours--buttonBooking"
         >
            Booking
         </Link>
      </>
   );
   if (user === null) {
      bookingButton = (
         <>
            <a
               to="/"
               className="info-container-detail-tours--buttonBooking"
               onClick={() => {
                  alert("Dang nhap de book tour");
               }}
            >
               Booking
            </a>
         </>
      );
   }

   if (tour === null)
      return (
         <Container>
            <Spinner animation="grow" />
         </Container>
      );
   function roundToTwo(num) {
      return +(Math.round(num + "e+1") + "e-1");
   }

   const settingsSlide = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
   };
   return (
      <>
         <Container>
            <Row lg={12} className="containerInfo-detail-tours">
               <Col>
                  <div className="thumbnail-container-detail-tours">
                     <div className="overlay-thumbnail-container-detail-tours"></div>
                     <img src={tour.image_path} alt="thumnail" />
                  </div>
                  <div className="general-container-detail-tours">
                     <h4 className="title-container-detail-tours">
                        {tour.name}
                     </h4>
                     <Row className="info-container-detail-tours">
                        <Col lg={5}>
                           <div className="info-container-detail-tours--label">
                              Location: <span>{tour.attraction.location}</span>
                           </div>
                           <div className="info-container-detail-tours--label">
                              Duration:{" "}
                              <span>
                                 <Moment format="DD/MM">
                                    {tour.departure_date}
                                 </Moment>
                                 -
                                 <Moment format="DD/MM">{tour.end_date}</Moment>
                              </span>
                           </div>
                        </Col>
                        <Col lg={4}>
                           <div className="info-container-detail-tours--label">
                              Adult ticket: <span>{tour.price_for_adults}</span>
                           </div>
                           <div className="info-container-detail-tours--label">
                              Child ticker:
                              <span> {tour.price_for_children}</span>
                           </div>
                        </Col>
                        <Col lg={3}>
                           {/* <Link
                              to="/booking/1"
                              className="info-container-detail-tours--buttonBooking"
                           >
                              Booking
                           </Link> */}
                           {bookingButton}
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
                  <div
                     className="description-detailTours--content"
                     dangerouslySetInnerHTML={{
                        __html: tour.note,
                     }}
                  ></div>
               </Col>
               <Col lg={{ span: 3, offset: 1 }} className="tag-detail-tours">
                  <div className="tag-detailTours--title">Tag</div>
                  <div className="tag-detailTours--content">
                     {tagTour.map((i) => (
                        <div key={i.id}>#{i.name}</div>
                     ))}
                  </div>
               </Col>
            </Row>
            <Row lg={12} className="feedback-detail-tours">
               <Col>
                  <div className="feedback-detailTour--title">Feedback</div>
                  {user != null && (
                     <CommentForm
                        tourId={tourId}
                        comments={comments}
                        setComments={setComments}
                        rates={rates}
                        setRates={setRates}
                     />
                  )}
                  {user == null && <div>Dang nhap de binh luan</div>}
                  <div className="feedback-detailTour--commentContainer">
                     {commentTour.map((item) => (
                        <div
                           key={item.id}
                           className="feedback-detailTour--comment"
                        >
                           <div className="comment-detailTour--userInfo flex">
                              <div
                                 style={{
                                    background: `url(${item.user.avatar_path})`,
                                 }}
                                 className="comment-detailTour--avatar-userInfo"
                              ></div>
                              <div className="comment-detailTour--detail-userInfo">
                                 <div className="comment-detailTour--username-userInfo">
                                    {item.user.username}
                                 </div>
                                 <div className="comment-detailTour--dayOfComment-userInfo">
                                    <Moment format="DD/MM/YYYY">
                                       {item.updated_date}
                                    </Moment>
                                 </div>
                              </div>
                           </div>
                           <div className="comment-detailTour-contentComment">
                              {item.content}
                           </div>
                        </div>
                     ))}
                  </div>
               </Col>
            </Row>
            <Row lg={12} className="pictures-detail-tours">
               <Col>
                  <div className="pictures-detailTours--title">Pictures</div>
                  {/* <div className="pictures-detailTours--album flex">
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
                  </div> */}
                  <Slider {...settingsSlide}>
                     {imageTour.map((item) => (
                        <div className="pictures-tour-slick-detailTour">
                           <img src={item.image_path} alt="picture-tour"></img>
                        </div>
                     ))}
                  </Slider>
               </Col>
            </Row>
            <Row lg={12} className="rating-detail-tours">
               <Col>
                  <div className="feedback-detailTour--title">
                     Rating{" "}
                     <span className="starAverage-rating">
                        {roundToTwo(starAverage.star_avg)}
                        <AiFillStar className="icon-star-avarage" />
                     </span>
                  </div>
                  {user != null && (
                     <RatingForm
                        tourId={tourId}
                        rates={rates}
                        setRates={setRates}
                     />
                  )}
                  {user == null && <div>Login to rating</div>}
                  <div className="rating-detailTour--ratingContainer">
                     {ratingTour.map((i) => (
                        <div className="rating-user-item-detailTour">
                           <div className="comment-detailTour--userInfo flex">
                              <div
                                 style={{
                                    background: `url(${i.user.avatar_path})`,
                                 }}
                                 className="comment-detailTour--avatar-userInfo"
                              ></div>
                              <div className="comment-detailTour--detail-userInfo">
                                 <div className="comment-detailTour--username-userInfo">
                                    {i.user.username}
                                 </div>
                                 <div className="comment-detailTour--dayOfComment-userInfo">
                                    <Moment format="DD/MM/YYYY">
                                       {i.updated_date}
                                    </Moment>
                                 </div>
                              </div>
                           </div>
                           <Rating
                              name="read-only"
                              value={i.star_rate}
                              readOnly
                           />
                        </div>
                     ))}
                  </div>
               </Col>
            </Row>
         </Container>
      </>
   );
};
const CommentForm = ({ tourId, comments, setComments }) => {
   const [content, setContent] = useState();
   const [user] = useContext(UserContext);

   const addComment = async (event) => {
      event.preventDefault();

      const res = await authAxios().post(endpoints["tour-comment"], {
         content: content,
         tour: tourId,
      });

      setComments([...comments, res.data]);
   };

   return (
      <>
         <Form onSubmit={addComment}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Control
                  type="text"
                  value={content}
                  onChange={(evt) => setContent(evt.target.value)}
                  placeholder="Nhap binh luan"
               />
            </Form.Group>

            <Button variant="primary" type="submit">
               Them binh luan
            </Button>
         </Form>
      </>
   );
};

const RatingForm = ({ tourId, rates, setRates }) => {
   const [starRate, setStarRate] = useState(0);
   const [user] = useContext(UserContext);

   const addRating = async (event) => {
      event.preventDefault();

      const rat = await authAxios().post(endpoints["rate"], {
         star_rate: starRate,
         tour: tourId,
      });
      setRates(rat.data);
      console.log(rat.data);
   };
   const ratingChanged = (newRating) => {
      setStarRate(newRating);
   };
   return (
      <>
         <div className="rating-container-detailTour">
            <div>Your Rating</div>
            <ReactStars
               count={5}
               onChange={ratingChanged}
               size={42}
               emptyIcon={<i className="far fa-star"></i>}
               fullIcon={<i className="fa fa-star"></i>}
               activeColor="#124efe"
            />
            <button onClick={addRating} className="button-rating-detailTour">
               Rating
            </button>
         </div>
      </>
   );
};
export default DetailTour;
