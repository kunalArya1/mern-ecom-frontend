import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const categoryLoading = new Array(13).fill(null);

  const fetchCategoryProduct = async () => {
    try {
      const res = await axios.get("/api/get-categoryProduct/");
      setCategoryProduct(res.data.data);
    } catch (error) {
      console.error("Error fetching category products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  // console.log(categoryProduct);

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center gap-4 justify-between overflow-scroll scroll-none">
        {loading
          ? categoryLoading.map((_, index) => (
              <div
                key={index}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 animate-pulse"
              ></div>
            ))
          : categoryProduct.map((product, index) => (
              <Link
                to={`/product-category?category=${product?.category}`}
                key={index}
                className="cursor-pointer"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center">
                  <img
                    src={product?.images[0]}
                    alt={product?.category}
                    className="h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all"
                  />
                </div>
                <p className="text-center text-sm md:text-base capitalize">
                  {product?.category}
                </p>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default CategoryList;
