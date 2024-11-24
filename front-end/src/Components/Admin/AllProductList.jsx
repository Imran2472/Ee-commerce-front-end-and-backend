import { useContext } from "react";
import Admin from "./Admin";
import AppContext from "../../../context/AppContext";
import { Link } from "react-router-dom";

function AllProductList() {
  const { product, deletProduct, getProductById } = useContext(AppContext);
  return (
    <div>
      <Admin />
      <div className="pl-[340px] p-8">
        <h1 className="text-center text-2xl text-slate-800 font-medium">
          All Product List
        </h1>
        {product ? (
          <>
            <div className="grid grid-cols-3 gap-2">
              {product.map((item) => (
                <div
                  key={item._id}
                  className="card p-4 rounded-md flex justify-center items-center flex-col"
                >
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className="w-[200px] h-[200px] bg-no-repeat bg-cover object-cover rounded-md"
                  />
                  <div className="card_info">
                    <h1 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h1>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-xs">Price : </span>
                      <span className="text-gray-600 text-xs">
                        {item.price}
                      </span>
                    </div>
                  </div>
                  <div className="buttons flex items-center gap-2 mt-2">
                    {/* Update and delet buttons */}
                    <Link
                      to={`/update-product/${item._id}`}
                      className="btn btn-sm btn-primary"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                        if (
                          confirm("Are you sure you want to delete this item?")
                        ) {
                          deletProduct(item._id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>loading ...</div>
        )}
      </div>
    </div>
  );
}

export default AllProductList;
