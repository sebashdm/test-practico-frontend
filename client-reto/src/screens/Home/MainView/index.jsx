import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import Slider from "react-slick";
import img1 from "../../../assets/slide1.jpg";
import img2 from "../../../assets/slide2.jpg";
import img3 from "../../../assets/slide3.jpg";
import img4 from "../../../assets/slide4.jpg";
import img5 from "../../../assets/slide5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [img1, img2, img3, img4, img5];

const MainView = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Agregar esta propiedad
    autoplaySpeed: 3000,
  };

  return (
    <main>
      <div className={styles.flexContainer}>
        <Slider {...settings}>
          {images.map((image) => (
            <div key={image}>
              <img src={image} alt="slide" />
            </div>
          ))}
        </Slider>
        {children}
      </div>
    </main>
  );
};

MainView.propTypes = {
  children: PropTypes.node,
};

export default MainView;
