import "./Story.css";
import Thinking from "../assets/Thinking.png";
import Cloud1 from "../assets/Cloud1.png";
import Cloud2 from "../assets/Cloud2.png";
import Cloud3 from "../assets/Cloud3.png";
import Cloud4 from "../assets/Cloud4.png";
// import rectangle from "../assets/rectangle.png";
// import Cloud5 from '../assets/Cloud5.png'
const Story = () => {
  return (
    <>
      <div className="story-parent">
        <div className="heading">
          <p>Elements of Story Writing</p>
        </div>

        <div className="description">
          <p>
            Welcome to term 2 of Writers Club. Are you excited for this amazing
            journey?
          </p>
          <p>
            Over the next week, we will be practicing the different elements of
            story writing.
          </p>
          <p>Our aim is to make stories more interesting and exciting.</p>
        </div>

        <div className="story-elements">
          <div className="description1">
            <p>
              There are elements which make the foundation for story writing. An
              element is an essential part of something and every fiction story
              has the same key elements:
            </p>
          </div>
          <div className="thinking">
            <img src={Thinking} alt="Man Thinking" />
          </div>
        </div>

        <div className="clouds">
          <div className="cloud1">
            <img src={Cloud1} alt="" srcset="" />
            <p>Setting</p>
          </div>
          <div className="cloud2">
            <img src={Cloud2} alt="" srcset="" />
            <p>Character</p>
          </div>
          <div className="cloud3">
            <img src={Cloud1} alt="" srcset="" />
            <p>Plot</p>
          </div>
          <div className="cloud4">
            <img src={Cloud3} alt="" srcset="" />
            <p>Problem OR Conflict</p>
          </div>
          <div className="cloud5">
            <img src={Cloud4} alt="" srcset="" />
            <p>Resolution</p>
          </div>
        </div>

        <div className="description2">
          <p>
            You must be familiar with some of these. If not, do not worry! we
            will cover all these elements as we go along.
          </p>
        </div>

        <div className="rectangle">
          <div className="back-image">
            <p>
              For today’s lesson, we will try to understand and practice writing
              the setting for our stories.
            </p>
            <p>The setting is an important element of every fiction story.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Story;
