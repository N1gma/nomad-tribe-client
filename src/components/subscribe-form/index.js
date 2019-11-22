import React, { useState } from 'react';
import './assets/css/Subscribe.css';
import Header from '../common/Header';
import EmailInput from './EmailInput';
import SubscriptionModal from './SubscriptionModal';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [popupOpened, setPopup] = useState(false);

  function showSubscrPopup(state) {
    setPopup(state);
  }

  return (
    <>
      {popupOpened ? <div id="overlay"></div> : ''}
      <div>
        <form className="subscribe-container">
          <Header textValue={['Subscribe now for our ', <span style={{ color: '#0452fa' }}>FREE</span>, ' beta version']} />
          <EmailInput
            value={email}
            showPopup={() => showSubscrPopup(true)}
            // onChange={async (e) => {
            //   setEmail(e.target.value);
            // }}
            setEmail={setEmail}
          />
        </form>
        {popupOpened ? <SubscriptionModal onSubscrModalClick={() => showSubscrPopup(false)} /> : ''}
      </div>
    </>
  );
};

export default SubscribeForm;
