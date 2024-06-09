const Module = () => {
  return (
    <>
      <div>
        <div className=" p-2 shadow-md shadow-slate-500">
          <span className="font-bold">MERN STACK</span>
          <div className="flex justify-between">
            <span>remaining fees ($15000) Pay Now</span>
            <span className="text-sm text-gray-700">Your Progress</span>
          </div>
          <div className="w-full h-4 border rounded-md border-slate-100">
            <div className="w-2/4 h-full bg-orange-500	background-color: rgb(249 115 22);border-0 rounded-md "></div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-sm text-gray-300">80% Completed</span>
            <span className="text-sm text-gray-500">
              Registered on: 5 Feb,2024
            </span>
          </div>
        </div>
        <div className="flex flex-wrap p-8 ">
          <div className="flex flex-col gap-1 shadow-md shadow-blue-700 p-4 bg-gray-300">
            <div className="flex gap-4 col font-bold">
              <span>12pm/MERN/NITIN/5-FEB</span>
              <span>Attendance</span>
              <span>96%</span>
            </div>
            <span className="font-medium">Current Batch</span>
            <span>Course:MERN STACK</span>
            <span>Trainer:Nitin Bella</span>
            <span className="border-b-2 border-dashed border-slate-500">
              Duration:jan - Aug
            </span>
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
              </svg>
              Timming : 12:00pm - 2:00pm
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Module;
