import React from "react"
import "./Popup.css"
import Clock from "../assets/Clock.png"
import Home from "../assets/Home.png"
import Cross from '../assets/Cross.png'
import { useState } from "react"
const Popup = ({ onClose }) => {
  const [defaultText, setDefaultText] = useState('Setting is the time and place of a story');

  // Handle input change
  const handleInputChange = (e) => {
    setDefaultText(e.target.value);
  };
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          <img src={Cross} alt="" />
        </span>
        <div className="popup-heading">
          <h1>Guide Sheet</h1>
        </div>
        <div className="popup-input">
        <div className="popup-ques">
          <p>So, what do you think the definition of setting is?</p>
        </div>
        
        <div className="question2">
          <div className="quest-text">
            <p>Any guesses?</p>
          </div>
          <div className="quest2-input">
          <input type="text" value={defaultText} onChange={handleInputChange} />
          </div>
          <div className="hint">
            <div className="hint-text">
              <p>Hint:</p>
            </div>
            <div className="hint-img1">
              <img src={Clock} alt="Clock image" />
            </div>
            <div className="hint-img2">
              <img src={Home} alt="Home Image" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
