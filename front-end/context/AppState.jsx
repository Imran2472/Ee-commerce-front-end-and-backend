import React from "react";
import AppContext from "./AppContext";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AppState = (props) => {
  const [product, setproduct] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);
  const [isAuthenticate, setisAuthenticate] = useState(false);
  const [cart, setCart] = useState();
  const [userAdrres, setUserAdres] = useState("");
  const [user, setUser] = useState();
  const [AllUser, setAllUser] = useState([]);
  const [reload, setReload] = useState(false);
  const [role, setRole] = useState("");
  const URL = "http://localhost:4002/api";

  useEffect(() => {
    const FetchProduct = async () => {
      const api = await axios.get(`${URL}/product/all`, {
        headers: {
          "content-type": "application/json",
        },
        withCredentials: true,
      });
      setproduct(api.data);
      setFilteredData(api.data);
    };
    FetchProduct();
    UserCart();
    GetUserAddress();
    UserProfile();
    GetAllUsers();
    // eslint-disable-next-line
  }, []);

  // ----get localStorage tokens

  useEffect(() => {
    let isToken = localStorage.getItem("token");
    if (isToken) {
      setisAuthenticate(true);
    }
    // eslint-disable-next-line
  }, [localStorage.getItem("token"), reload]);

  // register user functionality
  const RegisterUser = async (fullname, email, password) => {
    const api = await axios.post(
      `${URL}/users/register`,
      {
        fullname,
        email,
        password,
      },
      {
        headers: {
          "content-type": "application/json",
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
    return api.data;
  };

  const Login = async (email, password) => {
    const api = await axios.post(
      `${URL}/users/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "content-type": "application/json",
        },
        withCredentials: true,
      }
    );
    // getJwtToken(api.data.token)
    localStorage.setItem("token", api.data.token);
    setisAuthenticate(true);
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
    setTimeout(() => {
      toast.success(api.data.msg, {
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
    }, 3000);

    return api.data;
  };

  const Logout = () => {
    localStorage.removeItem("token");
    setisAuthenticate(false);
    toast.success("Logout successfully", {
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
    window.location.href = "/";
  };

  const UserProfile = async () => {
    const api = await axios.get(`${URL}/users/profile`, {
      headers: {
        "content-type": "application/json",
        Auth: localStorage.getItem("token"),
      },
      withCredentials: true,
    });
    setUser(api.data.user);
    setRole(api?.data?.user?.role);

    // console.log("Profile User", api.data.user)
    return api.data.user;
  };

  const AddtoCart = async (productId, title, quantity, price, imageSrc) => {
    const api = await axios.post(
      `${URL}/cart/add`,
      {
        productId,
        title,
        quantity,
        price,
        imageSrc,
      },
      {
        headers: {
          "content-type": "application/json",
          Auth: localStorage.getItem("token"),
        },
        withCredentials: true,
      }
    );
    setReload(!reload);
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
    // console.log("my Cart", api.data);
  };

  ////get Cart

  const UserCart = async () => {
    const api = await axios.get(`${URL}/cart/all`, {
      headers: {
        "content-type": "application/json",
        Auth: localStorage.getItem("token"),
      },
      withCredentials: true,
    });
    setReload(!reload);
    const data = api.data.cart;
    // console.log("User Cart", api.data.cart.items);
    setCart(data);
    // return api.data.cart
  };

  //Discrease Cart

  const DicreaseQuantity = async (productId, quantity) => {
    const api = await axios.post(
      `${URL}/cart/--quantity`,
      {
        productId,
        quantity,
      },
      {
        headers: {
          "content-type": "application/json",
          Auth: localStorage.getItem("token"),
        },
        withCredentials: true,
      }
    );
    setReload(!reload);
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
  };

  //remove Cart
  const RemoveItemstoCart = async (productId) => {
    const api = await axios.delete(`${URL}/cart/remove/${productId}`, {
      headers: {
        "content-type": "application/json",
        Auth: localStorage.getItem("token"),
      },
      withCredentials: true,
    });
    setReload(!reload);
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
  };

  //clear Cart
  const ClearCart = async () => {
    const api = await axios.delete(`${URL}/cart/clear`, {
      headers: {
        "content-type": "application/json",
        Auth: localStorage.getItem("token"),
      },
      withCredentials: true,
    });
    setReload(!reload);
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
  };

  //Address add
  const UserAddress = async (
    fullname,
    country,
    address,
    state,
    city,
    zipcode,
    phonenumber
  ) => {
    const api = await axios.post(
      `${URL}/cart/address`,
      {
        fullname,
        country,
        address,
        state,
        city,
        zipcode,
        phonenumber,
      },
      {
        headers: {
          "content-type": "application/json",
          Auth: localStorage.getItem("token"),
        },
        withCredentials: true,
      }
    );
    setReload(!reload);
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
    console.log(api.data);
    return api.data;
  };

  // Address add
  const GetUserAddress = async () => {
    const api = await axios.get(`${URL}/cart/getalladdress`, {
      headers: {
        "content-type": "application/json",
        Auth: localStorage.getItem("token"),
      },
      withCredentials: true,
    });
    setUserAdres(api.data.useraddress);
    return api;
  };

  const CreatProduct = async (formData) => {
    const api = await axios.post(`${URL}/product/add`, formData, {
      headers: {
        "content-type": "multipart/form-data",
        Auth: localStorage.getItem("token"),
      },
      withCredentials: true,
    });
    setReload(!reload);
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
    return api.data;
  };

  const deletProduct = async (id) => {
    const api = await axios.delete(`${URL}/product/${id}`, {
      headers: {
        "content-type": "application/json",
        Auth: localStorage.getItem("token"),
      },
      withCredentials: true,
    });
    setReload(!reload);
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
    return api.data;
  };

  // getProduct by id
  const getProductById = async (id) => {
    const api = await axios.get(`${URL}/product/${id}`, {
      headers: {
        "content-type": "application/json",
        Auth: localStorage.getItem("token"),
      },
      withCredentials: true,
    });
    setReload(!reload);
    return api.data;
  };

  const GetAllUsers = async () => {
    const api = await axios.get(`${URL}/users/all`, {
      headers: {
        "content-type": "application/json",
        Auth: localStorage.getItem("token"),
      },
      withCredentials: true,
    });
    setReload(!reload);
    setAllUser(api.data);
    console.log(AllUser);
    return api;
  };

  return (
    <AppContext.Provider
      value={{
        product,
        RegisterUser,
        Login,
        URL,
        setisAuthenticate,
        isAuthenticate,
        Logout,
        AddtoCart,
        cart,
        UserCart,
        DicreaseQuantity,
        RemoveItemstoCart,
        ClearCart,
        UserAddress,
        userAdrres,
        user,
        role,
        CreatProduct,
        deletProduct,
        getProductById,
        AllUser,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
