import Cyper from "./images/cyper.jpg";
import Data from "./images/data-science.jpg";
import Web from "./images/web.jpg";
import Game from "./images/game.png";

const courseMap = {
  Cyper,
  Data,
  Web,
  Game,
};

function Course({ courseName }) {
  return (
    <div>
      <img src={courseMap[courseName]} alt={courseName} title={courseName} />
    </div>
  );
}

export default Course;
