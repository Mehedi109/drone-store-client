import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import './Banner.css';

// const Banner = () => {
//   return (
//     <div>
//       {/* <Container> */}
//       {/* <Row> */}
//       <div className="banner mb-2">
//         {/* <Row> */}
//         <Col sm={12} md={12} lg={12}>
//           <img
//             src="https://i.ibb.co/7rdrZhM/3d-drone-flying-sunset-sea-1048-12782.jpg"
//             alt=""
//           />
//         </Col>
//         {/* </Row> */}
//       </div>
//       {/* </Row> */}
//       {/* </Container> */}
//     </div>
//   );
// };

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Container>
        <div>
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div>
              <img
                src="https://i.ibb.co/7rdrZhM/3d-drone-flying-sunset-sea-1048-12782.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/7rdrZhM/3d-drone-flying-sunset-sea-1048-12782.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/7rdrZhM/3d-drone-flying-sunset-sea-1048-12782.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/7rdrZhM/3d-drone-flying-sunset-sea-1048-12782.jpg"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </Container>
    );
  }
}

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
