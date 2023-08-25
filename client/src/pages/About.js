import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - TrendHaven"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-5">
        <div className="about-us-container">
        <div className="about-us-content">
          <h1 className="text-center">About TrendHaven</h1>
          <p>
          Welcome to TrendHaven, your go-to destination for the latest and most fashionable clothing trends. At TrendHaven, we believe that fashion is more than just clothing; it's a form of self-expression. Our mission is to empower individuals to express their unique style and personality through their wardrobe choices.
        </p>
        <p>
          We create a wide range of clothing items that cater to diverse tastes and preferences.
          Whether you're into casual chic, urban streetwear, or elegant evening attire, we have something for everyone.
          Our collection is carefully selected to ensure that you're always on the cutting edge of fashion.
        </p>
        <h2>Our Values</h2>
        <p>
          <strong>Quality:</strong> We are committed to providing clothing of the highest quality, ensuring your wardrobe is built to last.
        </p>
        <p>
          <strong>Diversity:</strong> We celebrate diversity and inclusivity. Our clothing range is designed to suit people of all backgrounds and sizes.
        </p>
        <p>
          <strong>Sustainability:</strong> We believe in responsible fashion. We work towards offering sustainable and eco-friendly options to minimize our environmental impact.
        </p>
        <h2>Meet the Team</h2>
        <p>
          Behind TrendHaven is a passionate team of fashion enthusiasts, designers, and tech experts.
          We're dedicated to bringing you the best shopping experience and ensuring you're always in style.
          Our team is constantly researching trends, sourcing quality clothing, and innovating to enhance your journey with us.
        </p>
          <p>
            Thank you for choosing TrendHaven for all your fashion needs.
            Join us in embracing the world of fashion and expressing yourself through your wardrobe.
          </p>
          </div>
        </div>
          
        </div>
      </div>
    </Layout>
  );
};

export default About