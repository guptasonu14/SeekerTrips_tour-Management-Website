import React from 'react';
import Slider from 'react-slick';
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";



const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>
                Our tour experience was absolutely phenomenal! The guides were knowledgeable, the scenery was breathtaking, and every moment was magical.
            </p>
            <div className="d-flex align-items-center gap-3 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">James Wilson</h6>
                   
                </div>
            </div>
        </div>
    
        <div className="testimonial py-4 px-3">
            <p>
                I had the best time on our tour. Everything was perfectly organized, and the personalized attention made it unforgettable.
            </p>
            <div className="d-flex align-items-center gap-3 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">Sophia Martinez</h6>
                    
                </div>
            </div>
        </div>
    
        <div className="testimonial py-4 px-3">
            <p>
                This was a once-in-a-lifetime adventure! From start to finish, the tour was seamless, enjoyable, and packed with amazing experiences.
            </p>
            <div className="d-flex align-items-center gap-3 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">Liam Johnson</h6>
                   
                </div>
            </div>
        </div>
    </Slider>
    
    );
};

export default Testimonials;
