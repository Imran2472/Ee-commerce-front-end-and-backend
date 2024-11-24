import React, { useContext, useEffect, useState } from "react";
import Admin from "./Admin";
import AppContext from "../../../context/AppContext";

function ProductAdd() {
  const { CreatProduct } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageSrc, setImageSrc] = useState();
  const [imageSrc1, setImageSrc1] = useState();
  const [imageSrc2, setImageSrc2] = useState();
  const [imageSrc3, setImageSrc3] = useState();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("quantity", quantity);
    formData.append("imageSrc", imageSrc);
    formData.append("imageSrc1", imageSrc1);
    formData.append("imageSrc2", imageSrc2);
    formData.append("imageSrc3", imageSrc3);

    const response = await CreatProduct(formData);
    console.log(response);
    if (response.success) {
      window.location.href = "/all-products";
    }
  };

  return (
    <>
      <Admin />
      <div className="bg-[#F7F7F7] w-[100%] flex justify-center items-center py-20 pl-[300px]">
        <div className="content">
          <form
            className="w-[550px] max-w-[100%] bg-white rounded-xl p-5"
            onSubmit={HandleSubmit}
          >
            <h1 className="text-2xl font-medium text-gray-800 mb-8">
              Add New Product
            </h1>
            {/* Product Name */}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Product Name
              </label>
              <input
                className="w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 py-1 px-4"
                type="text"
                placeholder="Enter product name"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="mb-4 w-full">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Quantity
                </label>
                <input
                  className="w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 py-1 px-4"
                  type="text"
                  placeholder="Enter Quantity"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Price
                </label>
                <input
                  className="w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 py-1 px-4"
                  type="text"
                  placeholder="Enter Price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Product Category
              </label>
              <input
                className="w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 py-1 px-4"
                type="text"
                placeholder="Enter Category name"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            {/* Product Description */}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Product Description
              </label>
              <textarea
                className="w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 py-1 px-4"
                rows="5"
                placeholder="Enter product description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            {/* Product Image */}

            <div className="">
              <label
                htmlFor="file"
                className="mb-4 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex flex-col justify-center items-center py-5"
              >
                {imageSrc ? imageSrc.name : "Upload Photo"}
                <input
                  className="hidden"
                  type="file"
                  id="file"
                  name="imageSrc"
                  onChange={(e) => setImageSrc(e.target.files[0])}
                />
                <i className="fa-solid fa-cloud-arrow-up text-3xl"></i>
              </label>
            </div>

            {imageSrc && (
              <div className="image-preview flex justify-center">
                <img
                  src={URL.createObjectURL(imageSrc)}
                  alt="preview"
                  className="object-cover w-[200px] h-[200px]"
                />
              </div>
            )}

            <div className="">
              <label
                htmlFor="myfile"
                className="mb-4 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex flex-col justify-center items-center py-5"
              >
                {imageSrc1 ? imageSrc1.name : "Upload Photo"}
                <input
                  className="hidden"
                  type="file"
                  id="myfile"
                  name="imageSrc1"
                  onChange={(e) => setImageSrc1(e.target.files[0])}
                />
                <i className="fa-solid fa-cloud-arrow-up text-3xl"></i>
              </label>
            </div>

            {imageSrc1 && (
              <div className="image-preview flex justify-center">
                <img
                  src={URL.createObjectURL(imageSrc1)}
                  alt="preview"
                  className="object-cover w-[200px] h-[200px]"
                />
              </div>
            )}
            <div className="">
              <label
                htmlFor="myfile1"
                className="mb-4 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex flex-col justify-center items-center py-5"
              >
                {imageSrc2 ? imageSrc2.name : "Upload Photo"}
                <input
                  className="hidden"
                  type="file"
                  id="myfile1"
                  name="imageSrc2"
                  onChange={(e) => setImageSrc2(e.target.files[0])}
                />
                <i className="fa-solid fa-cloud-arrow-up text-3xl"></i>
              </label>
            </div>

            {imageSrc2 && (
              <div className="image-preview flex justify-center">
                <img
                  src={URL.createObjectURL(imageSrc2)}
                  alt="preview"
                  className="object-cover w-[200px] h-[200px]"
                />
              </div>
            )}
            <div className="">
              <label
                htmlFor="myfile2"
                className="mb-4 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex flex-col justify-center items-center py-5"
              >
                {imageSrc3 ? imageSrc3.name : "Upload Photo"}
                <input
                  className="hidden"
                  type="file"
                  id="myfile2"
                  name="imageSrc3"
                  onChange={(e) => setImageSrc3(e.target.files[0])}
                />
                <i className="fa-solid fa-cloud-arrow-up text-3xl"></i>
              </label>
            </div>

            {imageSrc3 && (
              <div className="image-preview flex justify-center">
                <img
                  src={URL.createObjectURL(imageSrc3)}
                  alt="preview"
                  className="object-cover w-[200px] h-[200px]"
                />
              </div>
            )}

            {/* Submit Button */}

            <div className="mt-5">
              <button
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProductAdd;
