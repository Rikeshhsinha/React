import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <h1 className="text-3xl font-bold text-red-500">
            Please Login
          </h1>
          <p className="text-gray-500 mt-3">
            You are not logged in.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className="w-28 h-28 rounded-full"
          />
        </div>

        <h1 className="text-3xl font-bold text-center mt-4">
          Welcome
        </h1>

        <div className="mt-8 space-y-4">

          <div>
            <p className="text-gray-500">Username</p>
            <h2 className="text-xl font-semibold">
              {user.username}
            </h2>
          </div>

          <div>
            <p className="text-gray-500">Password</p>
            <h2 className="text-xl font-semibold">
              {user.password}
            </h2>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile; 