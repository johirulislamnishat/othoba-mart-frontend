import Image from "next/image";
import product1 from "../../../public/images/Products/product-1.jpeg";
import productSm1 from "../../../public/images/Products/product-sm-1.jpeg";

const ProductCards = () => {
  return (
    <div className="container">
      <div>
        <h3 className="text-3xl">Best Sellers on Electronics</h3>
      </div>
      <div className="product-card-grid bg-white">
        <div className="single-product-left border-4 p-4">
          <div className="single-product">
            <Image src={product1} alt="" />
            <h4>Smart Watches</h4>
            <h3> $299.00</h3>
          </div>
        </div>
        <div className="grid-product-right">
          <div className="single-product border-4 p-3">
            <Image className="grid-product-image" src={productSm1} alt="" />
            <h4>Smart Watches</h4>
            <h3> $299.00</h3>
          </div>
          <div className="single-product border-4  p-3">
            <Image src={productSm1} alt="" />
            <h4>Smart Watches</h4>
            <h3> $299.00</h3>
          </div>
          <div className="single-product  border-4 p-3">
            <Image src={productSm1} alt="" />
            <h4>Smart Watches</h4>
            <h3> $299.00</h3>
          </div>
          <div className="single-product border-4 p-3">
            <Image src={productSm1} alt="" />
            <h4>Smart Watches</h4>
            <h3> $299.00</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
