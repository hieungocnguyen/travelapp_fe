import { async } from "@firebase/util";
import { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row, Spinner, Button } from "react-bootstrap";
import { AiOutlineLike, AiFillLike, AiOutlineEye } from "react-icons/ai";
import Moment from "react-moment";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import API, { authAxios, endpoints } from "../configs/API";
import avatarDemo from "../Images/3.jpg";

const DetailNew = () => {
   const { newsId } = useParams();
   const [news, setNews] = useState(null);
   const [user, dispatch] = useContext(UserContext);
   const [commentTour, setCommentTour] = useState(null);
   const [comments, setComments] = useState([]);
   const [likeStatus, setLikeStatus] = useState(false);
   const [countLike, setCountLike] = useState(0);
   const [view, setView] = useState();

   useEffect(() => {
      const loadStatusLike = async () => {
         let like = null;
         like = await authAxios().get(endpoints["news-like-status"](newsId));
         if (like.data.like_status === true) {
            setLikeStatus(true);
         }
      };
      loadStatusLike();
   }, []);

   useEffect(() => {
      const loadNews = async () => {
         let res = null;
         if (user != null) {
            res = await authAxios().get(endpoints["news-detail"](newsId));
         } else {
            res = await API.get(endpoints["new-detail"](newsId));
         }
         const countLike = await API.get(endpoints["count-like-news"](newsId));
         setCountLike(countLike.data);
         console.log(countLike.data);
         setNews(res.data);
      };
      loadNews();
   }, [likeStatus]);

   useEffect(() => {
      const loadComments = async () => {
         const comment = await API.get(endpoints["new-comments"](newsId));
         setCommentTour(comment.data.results);
         console.log(comment.data.results);
      };

      loadComments();
   }, [comments]);

   useEffect(() => {
      const loadView = async () => {
         const load = await API.get(endpoints["news-views"](newsId));
         setView(load.data);
      };
      loadView();
   }, []);

   const clickLike = async () => {
      const like = await authAxios().post(endpoints["new-click-like"](newsId));
      console.log(like.status);
      setLikeStatus(!likeStatus);
   };

   let likeButton = (
      <>
         <div className="footer-post--likeButton" onClick={clickLike}>
            <AiOutlineLike /> {countLike.total_like}
         </div>
      </>
   );

   if (likeStatus === true) {
      likeButton = (
         <>
            <div className="footer-post--likeButton" onClick={clickLike}>
               <AiFillLike />
               {countLike.total_like}
            </div>
         </>
      );
   }

   if (news === null || countLike === null)
      return (
         <Container>
            <Spinner animation="grow" />
         </Container>
      );

   return (
      <>
         <div className="main-detailNews--container">
            <div className="main-detailNews--post">
               <div className="view-count">
                  {view.views}
                  <AiOutlineEye />
               </div>
               <div className="post-main--title">{news.title}</div>
               <div className="post-main--divineLine"></div>
               <div
                  className="post-main--content"
                  dangerouslySetInnerHTML={{
                     __html: news.content,
                  }}
               ></div>
               <div className="post-main--footer  flex">
                  <div className="footer-post--infoPost">
                     <div className="infoPost-footer--datePost">
                        <Moment format="DD/MM/YYYY">{news.updated_date}</Moment>
                     </div>
                     <div className="infoPost-footer--nameAuthor">
                        {news.author.username}
                     </div>
                  </div>
                  {likeButton}
               </div>
            </div>
         </div>
         <Row
            lg={12}
            className="feedback-detail-tours"
            style={{ width: "90%", margin: "0 auto" }}
         >
            <Col>
               <div className="feedback-detailTour--title">Feedback</div>
               {user != null && (
                  <CommentForm
                     newsId={newsId}
                     comments={comments}
                     setComments={setComments}
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

         {/* <div className="relatedNews-detailNews-container">
            <div className="relatedNews-detailNews">
               <div className="relatedNews-detailNews--title">Related news</div>
               <div className="relatedNews-detailNews--content">
                  <div className="relatedNews-detailNews--news">
                     <img src={avatarDemo} alt="avatar-demo" />
                  </div>
                  <div className="relatedNews-detailNews--news">
                     <img src={avatarDemo} alt="avatar-demo" />
                  </div>
               </div>
            </div>
         </div> */}
      </>
   );
};
const CommentForm = ({ newsId, comments, setComments }) => {
   const [content, setContent] = useState();
   const [user] = useContext(UserContext);

   const addComment = async (event) => {
      event.preventDefault();

      const res = await authAxios().post(endpoints["comment-news"], {
         content: content,
         news: newsId,
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
export default DetailNew;
