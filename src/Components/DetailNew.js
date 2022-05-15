import { AiOutlineLike } from "react-icons/ai";
import avatarDemo from "../Images/3.jpg";

const DetailNew = () => {
   return (
      <>
         <div className="main-detailNews--container">
            <div className="main-detailNews--post">
               <div className="post-main--title">
                  Da Lat - Best place to refresh your soul
               </div>
               <div className="post-main--divineLine"></div>
               <div className="post-main--content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
                  suspendisse vel id eget felis. Turpis lorem congue egestas
                  sollicitudin aliquam laoreet et nisi, blandit. Nunc pretium
                  sit sem neque dignissim. Volutpat leo lorem eu sapien tempor
                  quam. Ut pellentesque nisl malesuada rhoncus ut molestie
                  cursus tempor.
                  <br />
                  Sed accumsan, mattis pulvinar vestibulum nulla massa sed. Non
                  lacus vitae ullamcorper pulvinar ut porta tempor, nunc. Eget
                  habitasse rhoncus dignissim in arcu. Tellus magna nec nisl sed
                  eget tristique habitasse arcu. Scelerisque mattis vulputate
                  tristique arcu aliquam enim quam semper pellentesque. Volutpat
                  curabitur lacus, lobortis adipiscing. Cras sit vulputate orci
                  egestas eu lectus a at. Diam sapien lacus eu sagittis sagittis
                  volutpat. Nibh eget cursus libero feugiat eget at auctor
                  lacus. Sit semper egestas ornare turpis. Aliquet sed blandit
                  velit tortor. Id orci nunc mi iaculis. Malesuada tellus arcu
                  eu bibendum in sit eu.
               </div>
               <div className="post-main--footer  flex">
                  <div className="footer-post--infoPost">
                     <div className="infoPost-footer--datePost">18/2</div>
                     <div className="infoPost-footer--nameAuthor">
                        HieuNguyen
                     </div>
                  </div>
                  <div className="footer-post--likeButton">
                     <AiOutlineLike />
                  </div>
               </div>
            </div>
         </div>
         <div className="comment-detailNews--container">
            <div className="comment-detailNews">
               <div className="comment-detailNews--title">Comment</div>
               <div className="comment-detailNews--content">
                  <div className="comment-content--item">
                     <div className="item-comment--infoUser">
                        <div className="infoUser-itemComment-avatar">
                           <img
                              src={avatarDemo}
                              alt="avatar-Demo"
                              className="infoUser-itemComment-avatarImage"
                           ></img>
                        </div>
                        <div className="infoUser-itemComment-userDate">
                           <div className="infoUser-itemComment-username">
                              Hieu Nguyen
                           </div>
                           <div className="infoUser-itemComment-dateOfComment">
                              04/05/2022
                           </div>
                           <div className="item-comment--commentText">
                              Nice post. I like it👍
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="comment-content--item">
                     <div className="item-comment--infoUser">
                        <div className="infoUser-itemComment-avatar">
                           <img
                              src={avatarDemo}
                              alt="avatar-Demo"
                              className="infoUser-itemComment-avatarImage"
                           />
                        </div>
                        <div className="infoUser-itemComment-userDate">
                           <div className="infoUser-itemComment-username">
                              Hieu Nguyen
                           </div>
                           <div className="infoUser-itemComment-dateOfComment">
                              04/05/2022
                           </div>
                           <div className="item-comment--commentText">
                              Nice post. I like it👍
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="comment-content--item">
                     <div className="item-comment--infoUser">
                        <div className="infoUser-itemComment-avatar">
                           <img
                              src={avatarDemo}
                              alt="avatar-Demo"
                              className="infoUser-itemComment-avatarImage"
                           ></img>
                        </div>
                        <div className="infoUser-itemComment-userDate">
                           <div className="infoUser-itemComment-username">
                              Hieu Nguyen
                           </div>
                           <div className="infoUser-itemComment-dateOfComment">
                              04/05/2022
                           </div>
                           <div className="item-comment--commentText">
                              Nice post. I like it👍
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="relatedNews-detailNews-container">
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
         </div>
      </>
   );
};

export default DetailNew;
