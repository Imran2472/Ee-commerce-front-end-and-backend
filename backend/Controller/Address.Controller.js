import Address from "../Model/Address.Model.js";

export const AddAddress = async (req, res) => {
  try {
    let { fullname, address, city, state, country, zipcode, phonenumber } =
      req.body;

    let useraddress = await Address.create({
      userId: req.user,
      fullname,
      address,
      city,
      state,
      country,
      zipcode,
      phonenumber,
    });
    res.status(201).json({
      message: "Address added successfully",
      address: useraddress,
      success: true,
    });
  } catch (error) {
    res.status(error.code).json({
      message: error.message,
    });
  }
};

export const GetAddresses = async (req, res) => {
  try {
    let addresses = await Address.find({ userId: req.user }).sort({
      CreatedAt: -1,
    });
    res.status(200).json({
      message: "Addresses fetched successfully",
      useraddress: addresses[0],
    });
  } catch (error) {
    res.status(error.code).json({
      message: error.message,
    });
  }
};
