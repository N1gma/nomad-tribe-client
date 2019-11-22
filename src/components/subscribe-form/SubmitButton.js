
import React from 'react';
import ArrowImg from './assets/img/left-arrow.svg';
import PropTypes from 'prop-types';

const SubmitButton = ({onSubmit}) => (
  <button type="button" onClick={onSubmit} >
    <img src={ArrowImg} className="left-arrow" alt="" />
  </button>
);


SubmitButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SubmitButton;
