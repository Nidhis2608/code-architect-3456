import React from 'react'
import "../CSS/about.css"
const AboutUs = () => {
  return (
    <div className="About-us">
      <div id="cover">
        <img
          src="https://intexsoft.com/app/uploads/2023/12/1920x568-Benefits-of-Choosing-Shopify-for-Ecommerce-Store-Development.jpg"
          alt="cover-img"
          id="cover-img"
        />
        <div id="cover-text">
          <h1>About Us </h1>
        </div>
      </div>
      <div className="about-container">
        <div className="our-story">
          <div>
            <h1 className="about-heading">Our Story</h1>
            <p className="about-content">
              In the vibrant pulse of New York City, our online marketplace
              springs from a vision of excellence and innovation. With
              meticulous care, we curate a collection of treasures that
              celebrate craftsmanship and creativity. Each product we offer
              tells a story of dedication and passion, inviting you to join us
              on a journey of discovery. From the finest fabrics to the most
              intricate designs, every detail is carefully chosen to ensure a
              blend of quality and inspiration. Welcome to our digital realm,
              where every click opens the door to a world of possibilities.
              Explore, indulge, and immerse yourself in the magic of our curated
              selection, knowing that behind each item lies a story waiting to
              be told. Join us on this adventure, where the thrill of
              exploration meets the joy of finding something truly
              extraordinary.
            </p>
          </div>
          <div className="about-img-container">
            <img
              src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nfGVufDB8fDB8fHww"
              alt=""
              className="about-img"
            />
          </div>
        </div>
        <div className="our-mission">
          <div className="about-img-container">
            <img
              src="https://images.unsplash.com/photo-1619473792839-1d3b0355a7c8?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="about-img"
            />
          </div>
          <div>
            <h1 className="about-heading">Our Mission</h1>
            <p className="about-content">
              Our mission is to redefine online shopping by offering a curated
              selection of products that embody quality, creativity, and
              innovation. We strive to create an immersive digital experience
              that inspires and delights our customers at every turn. By
              meticulously selecting each item, we aim to provide not just
              products, but stories – narratives of craftsmanship, passion, and
              dedication. We believe in fostering a sense of connection and
              discovery, inviting our customers to explore a diverse range of
              offerings that reflect their unique tastes and preferences.
              Through our commitment to excellence and customer satisfaction, we
              aim to build lasting relationships and become a trusted
              destination for those seeking exceptional goods and unforgettable
              experiences. With every purchase, we hope to make a positive
              impact, enriching lives and spreading joy one transaction at a
              time. Join us on our mission to elevate the online shopping
              experience and discover the extraordinary in the everyday.
            </p>
          </div>
        </div>
      </div>
      <div id="team-container">
        <h1 className="about-heading">Our Team</h1>
        <p className="about-content">
          "We are a group of innovative, experienced, and proficient teams. You
          will love to collaborate with us."
        </p>
        <div className="our-team">
          <div>
            <img
              src="https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg"
              alt=""
              className="our-team-img"
            />{" "}
            <h3>John Doe</h3> <p>CEO</p>
          </div>
          <div>
            <img
              src="https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg"
              alt=""
              className="our-team-img"
            />{" "}
            <h3>John Doe</h3> <p>CEO</p>
          </div>
          <div>
            <img
              src="https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg"
              alt=""
              className="our-team-img"
            />{" "}
            <h3>John Doe</h3> <p>CEO</p>
          </div>
          <div>
            <img
              src="https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg"
              alt=""
              className="our-team-img"
            />{" "}
            <h3>John Doe</h3> <p>CEO</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs