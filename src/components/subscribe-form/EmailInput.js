import React from 'react';
import './assets/css/EmailInput.css';
import './assets/css/SubmitButton.css';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton';
import userService from '../../services/network/user';

const EmailInput = ({ value, setEmail, showPopup }) => (
  <div className="email-wrapper">
    <input
      size="35"
      maxLength="320"
      className="input"
      placeholder="email address"
      type="text"
      value={value}
      name="email"
      onChange={async (e) => {
        setEmail(e.target.value);
      }}
      // onChange={onChange}
      required
    />
    {/* <span className="underline" /> */}
    <SubmitButton
      onSubmit={() => {
        if (value.length) {
          userService.set(value);
          // this.props.value = '';
          setEmail('');
          showPopup();
        }
      }}
    />
  </div>

);

EmailInput.propTypes = {
  value: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  showPopup: PropTypes.func.isRequired,
};

export default EmailInput;
