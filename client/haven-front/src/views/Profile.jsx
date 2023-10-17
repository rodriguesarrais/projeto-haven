import React from "react";
import Navbar from "../components/Navbar";

function Profile() {
  return (
    <div class="bg-blue-300 h-screen">
      <Navbar />
      <div class="grid grid-cols-1 md:grid-cols-3 my-5">
        <div class="text-5xl">
          <div class="flex flex-col">
            <div class="bg-white w-full md:w-96 rounded-lg shadow-md p-5 mb-4">
              <h1 class="text-2xl md:h-80 font-bold">Card 1</h1>
            </div>
            <div class="bg-white w-full md:w-96 rounded-lg shadow-md p-5 mb-4">
              <h1 class="text-2xl md:h-96 font-bold">Card 2</h1>
            </div>
          </div>
        </div>
        <div class="text-5xl">
          <div class="flex flex-col -mx-56">
            <div class="bg-white h-screen rounded-lg shadow-md p-5 mb-4">
              <h1 class="text-2xl font-bold">Posts</h1>
            </div>
          </div>
        </div>
        <div class="text-5xl">
          <div class=" border-t-2 flex flex-col mx-60 my-80">
            <div class="bg-white w-full md:w-64 rounded-lg shadow-md p-5 mb-4">
              <h1 class="text-2xl font-bold">Card 5</h1>
            </div>
            <div class="bg-white w-full md:w-64 h-full rounded-lg shadow-md p-5 mb-4">
              <h1 class="text-2xl font-bold">Card 6</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
