import BannerProduct from "../components/BannerProduct";
import CategoryList from "../components/CategoryList";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />
      <HorizontalCardProduct
        categoryName={"airpodes"}
        heading={"Top's Airpods"}
      />
      <HorizontalCardProduct
        categoryName={"watches"}
        heading={"Popular's Watches"}
      />
      <VerticalCardProduct categoryName={"mobiles"} heading={"Mobiles"} />
      <VerticalCardProduct categoryName={"Mouse"} heading={"Mouse"} />
      <VerticalCardProduct
        categoryName={"televisions"}
        heading={"Television"}
      />
      <VerticalCardProduct
        categoryName={"earphones"}
        heading={"Wired Earphones"}
      />
      <VerticalCardProduct categoryName={"processor"} heading={"Processor"} />
      <VerticalCardProduct
        categoryName={"refrigerator"}
        heading={"Refrigerator"}
      />
      <VerticalCardProduct categoryName={"trimmers"} heading={"Trimmers"} />
      <VerticalCardProduct
        categoryName={"camera"}
        heading={"Camera & Photography"}
      />
      <VerticalCardProduct
        categoryName={"speakers"}
        heading={"Bluetooth Speakers"}
      />
    </div>
  );
};

export default Home;
