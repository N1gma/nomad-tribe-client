
import React from 'react';
import subscriptionConfirmImg from './assets/img/subscription-confirm.png';
import PropTypes from 'prop-types';

const SubscriptionConfirmModal = ({onSubscrModalClick}) => (
  <div className="subscr-modal">
      <img src={subscriptionConfirmImg} className="subscr-img" alt="" />
      <button onClick={onSubscrModalClick} className="btn-agree">OKAY</button>
   </div>
);

SubscriptionConfirmModal.propTypes = {
  onSubscrModalClick: PropTypes.func.isRequired,
};

export default SubscriptionConfirmModal;
