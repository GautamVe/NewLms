import React from "react";
const newObj = [
  {
    id: "1",
    coursedets: "Front-End/Nitin..",
    course: "Mern Stack",
    trainer: "Nitin bella",
    date: "1/may/2024 to 1/july/2024",
    time: "10 am",
  },
  {
    id: "2",
    coursedets: "Back-End/Raghav..",
    course: "Phyton",
    trainer: "Raghav",
    date: "1/may/2024 to 1/july/2024",
    time: "12 pm",
  },
  {
    id: "3",
    coursedets: "machine learning/pooja..",
    course: "machine learning",
    trainer: "pooja bisht",
    date: "1/july/2024 to 10/december/2024",
    time: "3 pm",
  },
  {
    id: "4",
    coursedets: "java/Gautam..",
    course: "java",
    trainer: "Gautam",
    date: "20/june/2024 to 1/december/2024",
    time: "2 pm ",
  },
];
const Course = () => {
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {newObj.map((val) => {
        {
          return (
            <div className="w-54 border-solid border-2 border-b-4 border-indigo-500 shadow-md shadow-indigo-600 rounded-lg p-2">
              <div className="flex justify-between">
                <div>{val.coursedets}</div>
                <div>
                  <button>View Details</button>
                </div>
              </div>
              <span>course:{val.course}</span>
              <br />
              <span>trainer :{val.trainer}</span>
              <br />
              <span>Start Date :{val.date}</span>
              <br />
              <span>Timming :{val.time}</span>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Course;
