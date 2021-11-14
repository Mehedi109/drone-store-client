import React, { Component } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/7rdrZhM/3d-drone-flying-sunset-sea-1048-12782.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>
              Drone store is a drone selling website in online with varoius
              model of drones.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/fx4BLrr/photo-1623041997614-064bb5b95af6-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>
              Drone store is a drone selling website in online with varoius
              model of drones.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/KqkrFpv/photo-1515849430397-7aee921bbea1-ixlib-rb-1-2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Drone store is a drone selling website in online with varoius
              model of drones.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Banner extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//     return (
//       <Container>
//         <div>
//           <h2> Single Item</h2>
//           <Slider {...settings}>
//             <div>
//               <img
//                 src="https://i.ibb.co/7rdrZhM/3d-drone-flying-sunset-sea-1048-12782.jpg"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 src="https://i.ibb.co/7rdrZhM/3d-drone-flying-sunset-sea-1048-12782.jpg"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 src="https://i.ibb.co/7rdrZhM/3d-drone-flying-sunset-sea-1048-12782.jpg"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 src="https://i.ibb.co/7rdrZhM/3d-drone-flying-sunset-sea-1048-12782.jpg"
//                 alt=""
//               />
//             </div>
//           </Slider>
//         </div>
//       </Container>
//     );
//   }
// }

export default Banner;

// export default class Banner extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
