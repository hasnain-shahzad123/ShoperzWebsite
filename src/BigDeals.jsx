import image1 from './images-icons/p1.svg'
import ima from './images-icons/p2.svg'
import image3 from './images-icons/p32.svg'
import image4 from './images-icons/p4.svg'
import image5 from './images-icons/p3.svg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue",color:"red",  fontSize: "24px"}}
        onClick={onClick}
      />
    );
  }

const data=[
    {
      image:image1
    },
    {
        image:ima
    },
    {
        image:image3
    },{
        image:image4
    },
    {
       image:image5
    }
]
const BigDeals=()=>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
    <>
    <div className="HeadingBenefit">
        <h1>Big Deals</h1>
    </div>
    <div className="CardContainer">
    <Slider {...settings}>
    {data.map((d) => (
          <div className='Cards'>
            <img src={d.image} alt="ggg" />
          </div>
    ))}
    </Slider>
    </div>
    </>
    )
}
export default BigDeals;