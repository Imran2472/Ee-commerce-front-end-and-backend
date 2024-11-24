import React, { useContext, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Stepper_bar from "../Stepper_bar";
import AppContext from "../../../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

function DeveleryForm() {
  const { UserAddress , userAdrres} = useContext(AppContext);
  const navigate = useNavigate();
  const [Address, setAddress] = useState({
    fullname: "",
    country: "",
    address: "",
    state: "",
    city: "",
    zipcode: "",
    phonenumber: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...Address, [name]: value });
  };
  const { fullname, country, address, state, city, zipcode, phonenumber } =
    Address;
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const result = await UserAddress(
      fullname,
      country,
      address,
      state,
      city,
      zipcode,
      phonenumber
    ); // save address to context
    
    console.log(result);
    
    if (result?.success) {
      window.location.href = "http://localhost:5173/checkout?step=3"
    }
    setAddress({
        fullname: "",
        country: "",
        address: "",
        state: "",
        city: "",
        zipcode: "",
        phonenumber: "",
      });
  };

  return (
    <>
      <div>
        <div className="row grid grid-cols-3 gap-4 items-start max-[723px]:grid-cols-1 max-[723px]:gap-10 max-[723px]:flex max-[723px]:flex-col-reverse py-6">

            {
                userAdrres && (
          <Link to="http://localhost:5173/checkout?step=3" className="col_address_form max-[723px]:w-[100%] border-[1px] border-gray-200 rounded-xl shadow-lg pb-10">
            <div className="content flex flex-col gap-2">
              <div className="boxes p-5 border-b-[1px] border-gray-200 flex flex-col gap-2 cursor-pointer">
                <div className="name text-[15px] font-medium text-gray-800">
                  Name : {" "} {userAdrres?.fullname}
                </div>
                <div className="address text-[13px] text-gray-400 font-medium py-[3px]">
                 <span className="text-gray-800 text-[15px] ">Address : {" "}</span>
                 {userAdrres?.address}
                </div>
                <div className="phone text-[12px] text-gray-500 font-medium pt-[3px]">
                <span className="text-gray-800 text-[15px] ">Country : {" "}</span>
                {userAdrres?.country}
                </div>
                <div className="num_title text-[13px] text-gray-800 font-semibold">
                <span className="text-gray-800 text-[15px] ">City : {" "}</span>
                {userAdrres?.city}
                </div>
                <div className="num_title text-[13px] text-gray-800 font-semibold">
                <span className="text-gray-800 text-[15px] ">State : {" "}</span>
                {userAdrres?.state}
                </div>
                <div className="num_title text-[13px] text-gray-800 font-semibold">
                <span className="text-gray-800 text-[15px] ">Phone Number : {" "}</span>
                {userAdrres?.phonenumber}
                </div>
                <div className="num_title text-[13px] text-gray-800 font-semibold">
                <span className="text-gray-800 text-[15px] ">Zip Code : {" "}</span>
                {userAdrres?.zipcode}
                </div>
                
              
              </div>
            </div>
          </Link>
                )
            }


          <div className="col_address_form max-[723px]:w-[100%] col-span-2 max-[723px]:col-span-1 border-[1px] border-gray-200 rounded-lg shadow-lg">
            <form
              action=""
              onSubmit={HandleSubmit}
              className="p-5 max-[400px]:px-[10px] flex flex-col gap-3"
            >
              <div className="frist_and_last_name flex items-center gap-2 w-full justify-between max-[400px]:flex-col">
                <div className="frist w-[100%]">
                  <input
                    type="text"
                    className="w-[100%] px-[16px] py-[8px] border-[1px] border-gray-200 rounded-md focus:outline-[1px] focus:outline-primary"
                    placeholder="Full Name"
                    required={true}
                    value={Address.fullname}
                    onChange={handleChange}
                    name="fullname"
                  />
                </div>
                <div className="city w-[100%]">
                  <input
                    type="text"
                    className="w-[100%] px-[16px] py-[8px] border-[1px] border-gray-200 rounded-md focus:outline-[1px] focus:outline-primary"
                    placeholder="Country"
                    required={true}
                    name="country"
                    value={Address.country}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="textarea w-[100%] p-0">
                <textarea
                  className="w-[100%] px-[16px] py-[8px] border-[1px] border-gray-200 rounded-md focus:outline-[1px] focus:outline-primary resize-none"
                  id="address"
                  rows={5}
                  cols={15}
                  name="address"
                  placeholder="address"
                  onChange={handleChange}
                  value={Address.address}
                ></textarea>
              </div>
              <div className="city_state flex items-center gap-2 w-full justify-between max-[400px]:flex-col">
                <div className="state w-[100%]">
                  <input
                    type="text"
                    className="w-[100%] px-[16px] py-[8px] border-[1px] border-gray-200 rounded-md focus:outline-[1px] focus:outline-primary"
                    placeholder="state/Region"
                    required={true}
                    name="state"
                    value={Address.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="City w-[100%]">
                  <input
                    type="text"
                    className="w-[100%] px-[16px] py-[8px] border-[1px] border-gray-200 rounded-md focus:outline-[1px] focus:outline-primary"
                    placeholder="City"
                    required={true}
                    name="city"
                    value={Address.city}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="zip_phone_number flex items-center gap-2 w-full justify-between max-[400px]:flex-col">
                <div className="zip w-[100%]">
                  <input
                    type="text"
                    className="w-[100%] px-[16px] py-[8px] border-[1px] border-gray-200 rounded-md focus:outline-[1px] focus:outline-primary"
                    placeholder="Zip / Postal Code"
                    required={true}
                    name="zipcode"
                    value={Address.zipcode}
                    onChange={handleChange}
                  />
                </div>
                <div className="number w-[100%]">
                  <input
                    type="number"
                    className="w-[100%] px-[16px] py-[8px] border-[1px] border-gray-200 rounded-md focus:outline-[1px] focus:outline-primary"
                    placeholder="Number"
                    required={true}
                    name="phonenumber"
                    value={Address.phonenumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="button flex flex-col justify-end">
                <button className="bg-primary text-white text-[14px] font-medium py-[7px] px-[16px] rounded-lg">
                  Deliverd Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeveleryForm;
