import React from "react";
import ServiceCard from "./ServiceCard";
import {Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl: weatherImg,
        title: "Plan Your Journey",
        desc: "Get real-time weather updates to plan your adventures wisely and stay prepared for any conditions.",
      },
      {
        imgUrl: guideImg,
        title: "Expert Local Guides",
        desc: "Discover hidden treasures and local insights with our knowledgeable tour guides for an unforgettable experience.",
      },
      {
        imgUrl: customizationImg,
        title: "Tailored Experiences",
        desc: "Create your dream vacation with our customizable options, ensuring every detail matches your desires.",
      },



]

const ServiceList = () => {
    return( <>
    {
        servicesData.map((item,index)=> (<Col lg='3' md='6'sm='12
        ' className="mb-4" key={index}>
            <ServiceCard item={item}/>
        </Col>
    ))}
    </>
    );
};

export default ServiceList;
