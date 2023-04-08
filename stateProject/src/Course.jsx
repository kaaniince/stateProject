import Cyper from "./images/cyper.jpg";
import Data from "./images/data-science.jpg";
import Web from "./images/web.jpg";
import Game from "./images/game.png";
import "./Course.css";
const courseMap = {
  Cyper,
  Data,
  Web,
  Game,
};

function Course({ courseName }) {
  return (
    <div className="courseDiv ">
      <img
        className="course"
        src={courseMap[courseName]}
        alt={courseName}
        title={courseName}
      />
    </div>
  );
}

export default Course;
