import React from 'react';
import './assets/css/StepsDesc.css';
import step1 from './assets/img/1.svg';
import step2 from './assets/img/2.svg';
import step3 from './assets/img/3.svg';
import step4 from './assets/img/4.svg';
import step5 from './assets/img/5.svg';
import step6 from './assets/img/6.svg';
import ellipse from './assets/img/ellipse.svg';

const StepsDesc = () => (
  <div className="steps-flow">
    <div className="step-block odd">
      <div className="step-images-container">
        <img src={step1} alt="" />
      </div>
      <div className="step-content">
        <img className="step-desc-bullet" alt="" src={ellipse} />
        <p className="step-desc">
                    Read our up-to-date articles
          <br />
                    with useful tips for digital nomads.
        </p>
      </div>
    </div>
    <div className="step-block">
      <div className="step-content">
        <img className="step-desc-bullet" alt="" src={ellipse} />
        <p className="step-desc">
                    Search through our travel
          <br />
                    itineraries and pick the most
          <br />
                    appealing route.
        </p>
      </div>
      <div className="step-images-container">
        <img src={step2} alt="" />
      </div>
    </div>
    <div className="step-block odd">
      <div className="step-images-container">
        <img src={step3} alt="" />
      </div>
      <div className="step-content">
        <img className="step-desc-bullet" alt="" src={ellipse} />
        <p className="step-desc">
                Invite other fellow nomads to join
          <br />
                you or simply come in on
          <br />
                somebody’s trip.
        </p>
      </div>
    </div>
    <div className="step-block">
      <div className="step-content">
        <img className="step-desc-bullet" alt="" src={ellipse} />
        <p className="step-desc">
                    Discuss travel details
          <br />
with your new travel buddies.
        </p>
      </div>
      <div className="step-images-container">
        <img src={step4} alt="" />
      </div>
    </div>
    <div className="step-block odd">
      <div className="step-images-container">
        <img src={step5} alt="" />
      </div>
      <div className="step-content">
        <img className="step-desc-bullet" alt="" src={ellipse} />
        <p className="step-desc">
                No worries!
          <br />
Our city guides will help you out.
        </p>
      </div>
    </div>
    <div className="step-block">
      <div className="step-content">
        <img className="step-desc-bullet" alt="" src={ellipse} />
        <p className="step-desc">
                Have an adventure
          <br />
of your lifetime together!
        </p>
      </div>
      <div className="step-images-container">
        <img src={step6} alt="" />
      </div>
    </div>
  </div>
);

export default StepsDesc;
