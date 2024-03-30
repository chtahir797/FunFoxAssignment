import React, { useState } from "react";
import "./MainBody.css";
import Story from "./Story";
import Story2 from "./Story2";
import Pencil from "../assets/Pencil.png";
import Bag from "../assets/Bag.png";
import Book1 from "../assets/Book1.png";
import Scale from "../assets/Scale.png";
import Book2 from "../assets/Book2.png";
import Graduation from "../assets/Graduation-Cap.png";
import Footer from "./Footer";
import Question from "../assets/Question.png";
import Popup from "./Popup";

const MainBody = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? 2 : prevPage));
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 2 ? 1 : prevPage));
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const totalPages = 2;

  return (
    <>
      {/* Left section */}
      <div className="lines">
        <div className="line1">
          <img src={Pencil} alt="Pencil svg" />
          <img src={Bag} alt="Bag svg" />
          <img src={Book1} alt="Book 1 svg" />
        </div>

        {/* Right section */}
        <div className="line2">
          <img src={Scale} alt="Pencil svg" />
          {/* Display Book2 or Question based on the current page */}
          {currentPage === 1 ? (
            <img src={Book2} alt="Bag svg" />
          ) : (
            <img
              src={Question}
              alt="Question svg"
              onClick={togglePopup}
              className="question-image"
            />
          )}
          <img src={Graduation} alt="Book 1 svg" />
        </div>
      </div>

      {/* center section */}
      <div className="main-component">
        {currentPage === 1 ? <Story /> : <Story2 />}
      </div>

      {/* footer section */}
      <Footer
        nextPage={nextPage}
        previousPage={previousPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      {/* popup section  */}
      {showPopup && <Popup onClose={togglePopup} />}
    </>
  );
};

export default MainBody;
