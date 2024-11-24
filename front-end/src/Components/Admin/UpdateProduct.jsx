import React, { useContext, useEffect, useState } from "react";
import Admin from "./Admin";
import AppContext from "../../../context/AppContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function UpdateProduct() {
  const { getProductById } = useContext(AppContext);
  const params = useParams();
  const [productId, setProductId] = useState(params.id);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [imageSrc1, setImageSrc1] = useState("");
  const [imageSrc2, setImageSrc2] = useState("");
  const [imageSrc3, setImageSrc3] = useState("");
  const [Speicific, setSpecific] = useState("");
  const [Speicific1, setSpecific1] = useState("");
  const [Speicific2, setSpecific2] = useState("");
  const [Speicific3, setSpecific3] = useState("");

  useEffect(() => {
    const GetSingleProduct = async () => {
      const response = await getProductById(productId);
      setTitle(response?.product?.title);
      setDescription(response?.product?.description);
      setPrice(response?.product?.price);
      setCategory(response?.product?.category);
      setQuantity(response?.product?.quantity);
      setSpecific(response?.product?.imageSrc);
      setSpecific1(response?.product?.imageSrc1);
      setSpecific2(response?.product?.imageSrc2);
      setSpecific3(response?.product?.imageSrc3);
      console.log(response);
      // console.log(response.p);
    };
    GetSingleProduct();
  }, [productId]);

  const handleImage1Change = (event) => {
    setImageSrc(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setSpecific(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleImage2Change = (event) => {
    setImageSrc1(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setSpecific1(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleImage3Change = (event) => {
    setImageSrc2(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setSpecific2(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  const handleImage4Change = (event) => {
    setImageSrc3(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setSpecific3(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    newProduct.append("quantity", quantity);
    newProduct.append("imageSrc", imageSrc);
    newProduct.append("imageSrc1", imageSrc1);
    newProduct.append("imageSrc2", imageSrc2);
    newProduct.append("imageSrc3", imageSrc3);
    const api = await axios.put(
      `http://localhost:4002/api/product/${productId}`,
      newProduct,
      {
        headers: {
          "content-type": "multipart/form-data",
          Auth: localStorage.getItem("token"),
        },
        withCredentials: true,
      }
    );
    toast.success(api.data.message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    console.log(api);
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
              Update Product
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
                  onChange={handleImage1Change}
                />
                <i className="fa-solid fa-cloud-arrow-up text-3xl"></i>
              </label>
            </div>

            {Speicific && (
              <div className="image-preview flex justify-center">
                <img
                  src={Speicific}
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
                  onChange={handleImage2Change}
                />
                <i className="fa-solid fa-cloud-arrow-up text-3xl"></i>
              </label>
            </div>

            {Speicific1 && (
              <div className="image-preview flex justify-center">
                <img
                  src={Speicific1}
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
                  onChange={handleImage3Change}
                />
                <i className="fa-solid fa-cloud-arrow-up text-3xl"></i>
              </label>
            </div>

            {Speicific2 && (
              <div className="image-preview flex justify-center">
                <img
                  src={Speicific2}
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
                  onChange={handleImage4Change}
                />
                <i className="fa-solid fa-cloud-arrow-up text-3xl"></i>
              </label>
            </div>

            {Speicific3 && (
              <div className="image-preview flex justify-center">
                <img
                  src={Speicific3}
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
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateProduct;
