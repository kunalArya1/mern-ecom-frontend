import { useState } from "react";
import { HiPencil } from "react-icons/hi2";
import PropTypes from "prop-types";
import EditProducts from "./EditProducts";

const ProductList = ({ products, onProductUploaded }) => {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  return (
    <div className="py-8 px-6 bg-gray-100 min-h-screen">
      {products.length > 0 ? (
        <div className="h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full overflow-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow-lg bg-white overflow-hidden w-full flex flex-col"
              >
                <div className="flex justify-center items-center h-48 bg-gray-200">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="object-contain h-full mix-blend-multiply"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="font-bold text-lg text-gray-900 text-ellipsis line-clamp-2">
                    {product.productName}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-green-600 font-semibold">
                      ₹{product.sellingPrice}
                    </p>
                    <p className="line-through text-gray-400">
                      ₹{product.price}
                    </p>
                  </div>
                  <button
                    onClick={() => handleEdit(product)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex justify-center"
                  >
                    <HiPencil />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No products available</p>
      )}
      {editingProduct && (
        <EditProducts
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onProductUploaded={onProductUploaded}
        />
      )}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onProductUploaded: PropTypes.func.isRequired,
};

export default ProductList;
