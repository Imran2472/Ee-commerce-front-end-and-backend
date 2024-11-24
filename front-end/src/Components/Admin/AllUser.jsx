import React, { useContext } from "react";
import Admin from "./Admin";
import AppContext from "../../../context/AppContext";

function AllUser() {
  const { AllUser } = useContext(AppContext);

  return (
    <>
      <Admin />
      <div className="user flex justify-center items-center py-[5rem]">
        imran khan
      </div>
    </>
  );
}

export default AllUser;
