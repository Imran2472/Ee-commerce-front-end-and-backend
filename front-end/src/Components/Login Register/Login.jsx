import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../../../context/AppContext";
const btn = "log in";

function Login() {
  const navigate = useNavigate();
  const { Login } = useContext(AppContext);
  const [FromData, setFormData] = useState({
    email: "",
    password: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FromData, [name]: value });
  };

  const { email, password } = FromData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await Login(email, password);

    if (result.success) {
      navigate("/");
    }
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <div className="flex justify-center items-center w-[100%] h-[100%] py-[6rem]">
        <div className="w-[400px] max-[454px]:w-[100%] max-[454px]:p-[1rem] border-[1px] border-gray-200 rounded-lg p-[2rem]">
          {/* if there is a button in form, it will close the modal */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
          <form method="dialog" onSubmit={handleSubmit}>
            <h3 className="font-bold text-2xl text-center">Login Form</h3>
            <div className="inputs-fields flex flex-col gap-3 p-0">
              <div className="email flex flex-col">
                <label
                  htmlFor="Email"
                  className="text-sm font-medium text-white-light py-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  placeholder="Enter Your Email"
                  className="text-sm normal-case font-medium px-[13px] py-[10px] border rounded-md w-[100%] m-0"
                  name="email"
                  value={FromData.email}
                  onChange={HandleChange}
                  required={true}
                />
              </div>
              <div className="password flex flex-col">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-white-light py-2"
                >
                  password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Your password"
                  className="text-sm normal-case font-medium px-[13px] py-[10px] border rounded-md w-[100%] m-0"
                  name="password"
                  value={FromData.password}
                  onChange={HandleChange}
                  required={true}
                />
              </div>
              <div className="button text-right">
                <button
                  className="bg-primary hover:bg-pink-ho text-base px-[20px] py-[7px] capitalize cursor-pointer text-white rounded-lg"
                  type="submit"
                >
                  {btn}
                </button>
              </div>
              <div className="info flex items-center gap-2 justify-center text-center text-sm font-medium text-white-light">
                not registered ?
                <Link
                  to="/register"
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
