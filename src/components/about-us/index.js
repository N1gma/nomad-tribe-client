import React from 'react';
import './assets/css/About.css';
import { NavLink } from 'react-router-dom';
import InstagramEmbed from 'react-instagram-embed';

const About = () => (
  <>
    <NavLink to="/" className="back-nav-button">back</NavLink>
    <div className="about-us-cont">
      <div className="about-us">
        <p>
          Hey guys,
        </p>
        <br/>
        <p>
          We are <span className="color-highlight">the family of digital nomads</span> who strive to make this world a better place.
        </p>
        <br/>
        <p>
          <span className="color-highlight">We are not a travel agency. </span>
          In fact, you don&apos;t need one to explore the world. Just enjoy using our simple app to <span className="color-highlight">plan your journey</span> and <span className="color-highlight">find travel buddies.</span>
        </p>
        <br/>
        <p>
          We invite all of you - entrepreneurs, engineers, creative people and others
          who work remotely and travel - to join our community and help us build a great product.
        </p>
        <br/>
        <p>
         And see you in the next city, fellows!
        </p>
      </div>
      <div className="insta-container">
        <InstagramEmbed
          url='https://www.instagram.com/p/Bw4VJblA4ER/'
          maxWidth={320}
          hideCaption={true}
          containerTagName='span'
          protocol=''
          injectScript
        />
        <InstagramEmbed
          url='https://www.instagram.com/p/BvwofjNAMue/'
          maxWidth={320}
          hideCaption={true}
          containerTagName='span'
          protocol=''
          injectScript
        />
        <InstagramEmbed
          url='https://www.instagram.com/p/Bwor1seAbXB/'
          maxWidth={320}
          hideCaption={true}
          containerTagName='span'
          protocol=''
          injectScript
        />
      </div>


    </div>
  </>
);

export default About;
