import React, { useContext, useState } from "react";
import AppContext from "../../../context/AppContext";
import CategoryIcon from "@mui/icons-material/Category";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
function Admin() {
  const { user } = useContext(AppContext);
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      <div className="dash-board w-[300px] bg-gray-900 h-[100vh] flex flex-col items-center fixed top-0 left-0">
        <h1 className="text-center text-[25px] text-slate-100 font-normal pt-10">
          Admin Dashboard
        </h1>
        <div className="admin-name w-[50px] h-[50px] bg-primary rounded-full mt-5 flex justify-center items-center text-[26px] font-semibold text-slate-100">
          {user?.fullname.charAt(0)}
        </div>
        <div className="admin-name-full text-base text-slate-100 font-normal mt-3">
          Admin Name : <span className="font-bold">{user?.fullname}</span>
        </div>
        <div className="admin-name-full text-base text-slate-100 font-normal mt-3">
          Email : <span className="font-bold lowercase">{user?.email}</span>
        </div>
        <div className="buttons-na mt-4 w-[100%] py-3 px-5">
          <ul className="flex flex-col gap-4 border-2 border-red-700">
            <li
              className="text-base text-slate-100 cursor-pointer flex justify-around items-center p-2"
              onClick={() => setisOpen(!isOpen)}
            >
              <span>
                <CategoryIcon />
              </span>
              Product
              <span>
                {isOpen ? (
                  <span className="text-gray-400">
                    <ExpandLessIcon />
                  </span>
                ) : (
                  <span className="text-gray-400">
                    <ExpandMoreIcon />
                  </span>
                )}
              </span>
            </li>
            {isOpen && (
              <ul className="flex flex-col gap-2 pl-9">
                <li className="text-base text-slate-100">Add Product</li>
                <li className="text-base text-slate-100">Edit Product</li>
                <li className="text-base text-slate-100">Delete Product</li>
              </ul>
            )}
            <li className="text-base text-slate-100 ">Orders</li>
            <li className="text-base text-slate-100 ">Users</li>
            <li className="text-base text-slate-100 ">Logout</li>
            <li className="text-base text-slate-100 ">View Sales Report</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Admin;
