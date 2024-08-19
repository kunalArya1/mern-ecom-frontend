import { scrollTop } from "../helper/scrollTop";
import { Link } from "react-router-dom";
import Context from "../context";
import { addToCart } from "../helper/addToCart";
import { useContext } from "react";
import PropTypes from "prop-types";
const VerticalCart = ({ loading, data }) => {
  const loadingList = new Array(13).fill(null);
  const { fetchUserCart } = useContext(Context);
  const handleAddItem = async (e, item) => {
    await addToCart(e, item._id);

    fetchUserCart();
  };
  return (
    <div className="container mx-auto px-4 my-6 relative">
      {loading ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Search Results:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loadingList.map((product, index) => (
              <div className="w-full bg-white rounded-sm shadow" key={index}>
                <div className="bg-slate-200 h-48 p-4 flex justify-center items-center animate-pulse"></div>
                <div className="p-4 grid gap-3">
                  <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-slate-200"></h2>
                  <p className="capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200 py-2"></p>
                  <div className="flex gap-3">
                    <p className="text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full py-2"></p>
                    <p className="text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full py-2"></p>
                  </div>
                  <button className="text-sm text-white px-3 rounded-full bg-slate-200 py-2 animate-pulse"></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {data.length > 0 && (
            <h2 className="text-xl font-semibold mb-4">
              Search Results: {data.length}
            </h2>
          )}
          {data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.map((product, index) => (
                <Link
                  to={"/product/" + product?._id}
                  className="w-full bg-white rounded-sm shadow"
                  key={index}
                  onClick={scrollTop}
                >
                  <div className="bg-slate-200 h-48 p-4 flex justify-center items-center">
                    <img
                      src={product.images[0]}
                      className="object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply"
                      alt={product.productName}
                    />
                  </div>
                  <div className="p-4 grid gap-3">
                    <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
                      {product?.productName}
                    </h2>
                    <p className="capitalize text-slate-500">
                      {product?.category}
                    </p>
                    <div className="flex gap-3">
                      <p className="text-red-600 font-medium">
                        ₹{product?.sellingPrice}
                      </p>
                      <p className="text-slate-500 line-through">
                        ₹{product?.price}
                      </p>
                    </div>
                    <button
                      className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full"
                      onClick={(e) => handleAddItem(e, product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No products found.</p>
          )}
        </>
      )}
    </div>
  );
};
VerticalCart.propTypes = {
  loading: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default VerticalCart;
