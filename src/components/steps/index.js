import React from 'react';
import './assets/css/Steps.css';
import StepsDesc from './StepsDesc';
import Header from '../common/Header';


const Steps = () => (
  <section className="steps-section">
    <Header textValue={['Just follow these', <br />, 'simple steps:']} />
    <StepsDesc />
  </section>
);

export default Steps;
