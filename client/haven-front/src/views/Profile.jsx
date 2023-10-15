import React from "react";
import Navbar from "../components/Navbar";

function Profile() {
  return (
<div className="bg-blue-300 h-screen">
  <Navbar />
  <div className="grid grid-cols-3 my-5">
    <div className="text-5xl">
      <div className="flex flex-col">
        <div className="bg-white w-96 rounded-lg shadow-md p-5 mb-4">
          <h1 className="text-2xl  h-80 font-bold">Card 1</h1>
        </div>
        <div className="bg-white w-96 rounded-lg shadow-md p-5 mb-4">
          <h1 className="text-2xl h-96 font-bold">Card 2</h1>
        </div>
      </div>
    </div>

    <div className="text-5xl">
      <div className="flex flex-col -mx-56">
        <div className="bg-white h-screen rounded-lg shadow-md p-5 mb-4">
          <h1 className="text-2xl font-bold">Posts</h1>
        </div>
      </div>
    </div>
    <div className="text-5xl">
      <div className="flex flex-col mx-60 my-80">
        <div className="bg-white w-96 rounded-lg shadow-md p-5 mb-4">
          <h1 className="text-2xl font-bold">Card 5</h1>
          
        </div>
        <div className="bg-white w-96 h-96 rounded-lg shadow-md p-5 mb-4">
          <h1 className="text-2xl font-bold">Card 6</h1>

        </div>
      </div>
    </div>
  </div>
</div>


  );
}

export default Profile;
