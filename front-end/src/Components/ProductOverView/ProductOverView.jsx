import { useContext, useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import RelatedProduct from "./RelatedProduct";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Reviews_cart from "../Reviews_and_Prograssive_bar/Reviews_cart";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AppContext from "../../../context/AppContext";
const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProductOverView() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const { AddtoCart } = useContext(AppContext);
  const [ProductOverViewss, setProductOverViewss] = useState([]);

  const { productId } = useParams();
  const URL = "http://localhost:4002/api";
  useEffect(() => {
    const FetchProduct = async () => {
      const api = await axios.get(`${URL}/product/${productId}`, {
        headers: {
          "content-type": "application/json",
        },
        withCredentials: true,
      });
      setProductOverViewss(api.data.product);
    };
    FetchProduct();
  }, [productId]);

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="lg:px-20 px-[1rem] mt-5">
        <div className="pt-6">
          <nav aria-label="Breadcrumb" className="">
            <ol
              role="list"
              className="flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              {product.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a
                      href={breadcrumb.href}
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      {breadcrumb.name}
                    </a>
                    <svg
                      fill="currentColor"
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a
                  href={product.href}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600 max-[331px]:text-[10px]"
                >
                  {ProductOverViewss.title}
                </a>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-2 gap-[4rem] pt-6 max-[951px]:gap-[2rem] max-[730px]:grid-cols-1 items-center">
            {/* Image gallery */}

            <div className="image_gallery">
              <div className="flex justify-center items-center">
                <img
                  alt={ProductOverViewss.imageSrc}
                  src={ProductOverViewss.imageSrc}
                  className="w-[100%] cursor-pointer rounded-md"
                />
              </div>
              <div className="small_images flex items-center gap-2 mt-3">
                <div className="image-one">
                  <img
                    alt={ProductOverViewss.imageSrc1}
                    src={ProductOverViewss.imageSrc1}
                    className="w-[100px] h-[100px] rounded-md cursor-pointer object-cover object-top"
                  />
                </div>
                <div className="image-one">
                  <img
                    alt={ProductOverViewss.imageSrc2}
                    src={ProductOverViewss.imageSrc2}
                    className="w-[100px] h-[100px] rounded-md cursor-pointer object-cover object-top"
                  />
                </div>
                <div className="image-one">
                  <img
                    alt={ProductOverViewss.imageSrc3}
                    src={ProductOverViewss.imageSrc3}
                    className="w-[100px] h-[100px] rounded-md cursor-pointer object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Product info */}
            <div className="">
              <div className="space-y-6">
                <p className="text-[20px] text-gray-600 font-medium">
                  Category : {ProductOverViewss.category}
                </p>
              </div>
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="lg:text-3xl text-xl font-semibold text-gray-700 py-3">
                  {ProductOverViewss.title}
                </h1>
              </div>

              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>

                <div className="py-1 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pr-8 lg:pt-4">
                  {/* Description and details */}
                  <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                      <p className="text-[16px] text-gray-900">
                        {ProductOverViewss.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <span className="new_price text-[19px] text-slate-700 font-semibold">
                      ${ProductOverViewss.price}
                    </span>
                  </div>
                </div>

                <form className="mt-1">
                  <button
                    type="button"
                    className="mt-8 flex w-[max-content] capitalize items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() =>
                      AddtoCart(
                        ProductOverViewss._id,
                        ProductOverViewss.title,
                        1,
                        ProductOverViewss.price,
                        ProductOverViewss.imageSrc
                      )
                    }
                  >
                    Add to Cart
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product_overview_product py-5 mt-20">
        <h1 className="text-2xl text-gray-800 font-semibold lg:px-[100px] px-[1rem]">
          Related Products
        </h1>
        <div className="row grid grid-cols-4 gap-3 py-5 lg:px-[100px] px-[1rem] max-[750px]:grid-cols-3 max-[550px]:grid-cols-2">
          <RelatedProduct category={ProductOverViewss.category} />
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default ProductOverView;
