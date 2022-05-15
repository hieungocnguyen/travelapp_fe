import mapOfWorld from "../Images/Map.svg";
import appStoreBadge from "../Images/appStoreBadge.svg";
import playStoreBadge from "../Images/playStoreBadge.svg";
import "../GlobalStyle/styleGlobal.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataPictures } from "../dataPicture";
import { Link } from "react-router-dom";

const Home = () => {
   const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500,
   };
   return (
      <>
         <div className="home">
            <section className="map-home">
               <img src={mapOfWorld} alt="map" />
               <div className="element-map-home">
                  <h1 className="title-map-home">
                     Life is short <br />
                     and the world is wide!
                  </h1>
                  <Link to="/tours" className="button-map-home">
                     Explore now
                  </Link>
               </div>
            </section>
            <section className="slider-home">
               <div className="trending-check-slider">Trending check</div>
               <Slider {...settings}>
                  {dataPictures.map((i) => (
                     <div key={i.id} className="card-slick">
                        <img
                           src={i.url}
                           alt={i.id}
                           className="image-card-slick"
                        />
                     </div>
                  ))}
               </Slider>
               <Link to="/tours" className="buttonToTours-slide">
                  <div>View more</div>
               </Link>
            </section>
            <section className="download-home">
               <div className="stat-home flex">
                  <div className="container-stat-home">
                     <div className="number-container-stat">25K</div>
                     <div className="divine-container-stat"></div>
                     <div className="unit-container-stat">users</div>
                  </div>
                  <div className="container-stat-home">
                     <div className="number-container-stat">25K</div>
                     <div className="divine-container-stat"></div>
                     <div className="unit-container-stat">users</div>
                  </div>
                  <div className="container-stat-home">
                     <div className="number-container-stat">25K</div>
                     <div className="divine-container-stat"></div>
                     <div className="unit-container-stat">users</div>
                  </div>
               </div>
               <div className="slogan-stat-home">Best app for you trip</div>
               <div className="appstore-stat-home">
                  <img
                     className="store-badge"
                     src={playStoreBadge}
                     alt="playStore"
                  />
                  <img
                     className="store-badge"
                     src={appStoreBadge}
                     alt="appStore"
                  />
               </div>
            </section>
         </div>
      </>
   );
};

export default Home;
