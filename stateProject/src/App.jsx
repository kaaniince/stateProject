import { useState } from "react";
import "./App.css";
import { Button } from "./Button";
import Course from "./Course";

function getRandomCourse() {
  const courseArray = ["Web", "Game", "Cyper", "Data"];

  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };

  const courseList = courses.map((course, index) => {
    return <Course courseName={course} key={index} />;
  });
  return (
    <div className="App">
      <div className="flex min-h-screen flex-col items-center justify-top gap-20 bg-black">
        <Button onClick={handleClick} string="Add Course"></Button>
        <div>{courseList}</div>
      </div>
    </div>
  );
}

export default App;
