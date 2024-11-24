import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../../context/AppContext";

function RelatedProduct({ category }) {
  const { product } = useContext(AppContext);
  const [RelatedProduct, setRelatedProduct] = useState([]);

  const handleClick = () => {
    // navigate(`/product/${product._id}`)
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setRelatedProduct(
      product.filter(
        (data) => data.category.toLowerCase() == category.toLowerCase()
      )
    );
  }, [category, product]);

  return (
    <>
      {RelatedProduct?.map((data) => (
        <Link to={`/product/${data._id}`} key={data._id} onClick={handleClick}>
          <div className="card-col">
            <div className="cards border cursor-pointer shadow-md lg:p-5 p-2 hover:shadow-2xl">
              <div className="image-card flex justify-center items-center">
                <img
                  src={data.imageSrc}
                  alt=""
                  className="w-[200px] h-[180px] bg-fixed bg-cover bg-no-repeat max-[400px]:w-[100%] max-[400px]:h-[100%] rounded-xl"
                />
              </div>
              <div className="details pt-2 relative">
                <h5 className="sub-title font-medium text-slate-600 max-[365px]:text-[12px] home_Pages_slider_title">
                  {data.title}
                </h5>
                <p className="text-sm font-normal text-slate-500 py-1 max-[365px]:text-[10px] home_Pages_slider_discription">
                  {data.description}
                </p>
                <div className="price flex items-center gap-3 max-[365px]:flex-wrap gap-y-0">
                  <span className=" text-base font-medium max-[365px]:text-[12px]">
                    {data.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default RelatedProduct;
