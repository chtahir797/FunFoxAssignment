import "./Story2.css";
import Scene1 from "../assets/Scene1.png";
import Scene2 from "../assets/Scene2.png";
import Clock from "../assets/Clock.png";
import Home from "../assets/Home.png";
const Story2 = () => {
  return (
    <>
      <div className="story2-parent">
        <div className="heading-story2">
          <div className="head">
            <p>
              Can you figure out the definition of setting from the following
              examples?
            </p>
          </div>
          <div className="para">
            <p>(take a minute to think about this)</p>
          </div>

          <div className="frames">
            <div className="frame1">
              <div className="img01">
                <img src={Scene1} alt="Scene 1 Image" />
              </div>
              <p>Sunny day at a beach</p>
            </div>
            <div className="frame02">
              <div className="img02">
                <img src={Scene2} alt="Scene 2 Image" />
              </div>
              <p>
                A cold rainy night in a <br />
                haunted house in October
              </p>
            </div>
          </div>

          <div className="setting">
            <p>So, what do you think the definition of setting is?</p>
          </div>

          <div className="question">
            <div className="quest-text">
              <p>Any guesses?</p>
            </div>
            <div className="quest-input">
              <input type="text" name="" id="" />
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

          <div className="quotes">
            <p>
              Setting is the time <img src={Clock} alt="Clock Image" /> and
              place <img src={Home} alt="" /> of a story. It often answers the
              questions: when? and where?
            </p>
          </div>

          <div className="end-story">
            <p>
            The time of the story could be in the past, future, day, night, summer or winter.
A story may take place in a school, a mall, a desert, an airplane or in a variety
of other places.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Story2;
