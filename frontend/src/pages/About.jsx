import React from "react";
import "../styles/about.css";


const AboutPage = () => {
  return (
   <>
      <div className="about-page">
        <div className="company-intro">
          <h2>Welcome to Adventure Expeditions</h2>
          <p>
            At Adventure Expeditions, we transform every journey into an
            unforgettable adventure. Specializing in immersive travel
            experiences, our expert team tailors each trip to your
            desires—whether it's trekking rugged landscapes, diving into vibrant
            cultures, or indulging in luxury escapes. Committed to
            sustainability and responsible tourism, we ensure you can explore
            with peace of mind and leave a positive impact. Join us for
            thrilling expeditions and create lasting memories.
          </p>
        </div>

        <div className="mission-values">
          <h2>Our Mission</h2>
          <p>
            Our mission is to inspire exploration, crafting journeys that
            transcend boundaries and foster a deep appreciation for diverse
            cultures and natural wonders. We aim to create lasting memories
            through personalized itineraries and unparalleled service, all while
            promoting sustainability and respect for our planet.
          </p>
        </div>
       
        <div className="expertise-services">
          <h2>Our Expertise</h2>
          <p>
            With over a decade of experience, we specialize in personalized
            travel experiences. From adventurous expeditions to serene retreats,
            our dedicated team ensures your trip is seamless and unforgettable,
            guiding you through breathtaking landscapes and vibrant cultures.
          </p>
        </div>
      </div>
      <hr className="custom-line" /> 
 
      <div className="about-page1">
        <div className="our-values">
          <h3>Services We Offer</h3>
          <ul>
            <li>Guided Tours</li>
            <li>Customized Itineraries</li>
            <li>Transportation & Accommodation</li>
            <li>Travel Insurance</li>
          </ul>
        </div>

        <div className="our-values">
          <h3>Our Values</h3>
          <ul>
            <li>Customer Satisfaction</li>
            <li>Sustainability</li>
            <li>Adventure</li>
            <li>Cultural Respect</li>
          </ul>
        </div>

        <div className="tour-types">
          <h3>Types of Tours</h3>

          <ul>
            <li>Incentive Tours</li>
            <li>Family Tours</li>
            <li>Solo Safaris</li>
            <li>Adventure Tours</li>
          </ul>
        </div>
      </div>
      </>
  );
};

export default AboutPage;
