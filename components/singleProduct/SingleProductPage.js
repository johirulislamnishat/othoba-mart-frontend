import {
  EyeOutlined,
  HeartOutlined,
  QuestionCircleOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import { Col, InputNumber, Row, Tabs } from "antd";
import Image from "next/image";
import { useRouter } from 'next/router'
import productImage from "../../public/images/Products/product-1.jpeg";
import RelateProducts from "../RelatedProducts/RelateProducts";
const SingleProductPage = () => {
  const [cartClicked, setCartClicked] = useState(false);
  const [wishClicked, setWishClicked] = useState(false);

  const router = useRouter();
  const {
    state: { user, cart, wish },
    dispatch,
  } = useProvider();

  const handleAddToWish = (item) => {
    if (user?.accessToken) {
      if (!cartClicked) {
        setWishClicked(true);
        dispatch(addToWish(wish, item));
      }
    } else {
      router.push("/auth/login");
    }
  };

  const handleAddToCart = (item) => {
    if (user?.accessToken) {
      if (!wishClicked) {
        setCartClicked(true);
        dispatch(addToCart(cart, item));
      }
    } else {
      router.push("/auth/login");
    }
  };
  
  function onChange(value) {
    console.log("changed", value);
  }
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="single-product-page">
      <Row>
        <Col sm={12} gutter={8} className="border rounded-md">
          <Image src={productImage} alt="" />
        </Col>
        <Col sm={12} className="pl-6">
          <h2>This is product title</h2>
          <div className="ratings mt-4">
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarOutlined />
            <span>1 customer review</span>
          </div>
          <p className="mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
            nobis assumenda exercitationem necessitatibus eaque fugiat veniam
            vel id cumque minima, ad suscipit reiciendis? Quibusdam minus nobis
            nam eum architecto, voluptatibus dolor
          </p>
          <table className="mt-6">
            <tbody>
              <tr>
                <td>SKU</td>
                <td>4353453453</td>
                <td>Freshness</td>
                <td>1 day old</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>Smartwatch</td>
                <td>Buy by</td>
                <td>Pcs, Kgs, box, pack</td>
              </tr>
              <tr>
                <td>Stock</td>
                <td>In Stock</td>
                <td>Delivery</td>
                <td>In 2 days</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>Xioami</td>
                <td>Delivery Area</td>
                <td>All Country</td>
              </tr>
            </tbody>
          </table>
          <div className="product-data flex justify-between items-center border p-3 my-6  rounded-lg">
            <div className="product-price">
              <h3>$570.00</h3>
              <small>$779.99</small>
            </div>
            <InputNumber
              size="large"
              min={1}
              max={100000}
              defaultValue={3}
              onChange={onChange}
            />
            <button className="custom-btn">
              <EyeOutlined style={cartClicked ? { color: "red" } : { color: "inherit" }} />
              <span>Add To Cart</span>
            </button>

            <button className="custom-btn grey-btn">
              <HeartOutlined style={wishClicked ? { color: "red" } : { color: "inherit" }} />
              <span> Add To Wishlist</span>
            </button>
          </div>

          <Tabs className="mt-6" defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Descriptions" key="1">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, ipsum officiis! Dolores debitis a veritatis ipsam,
                voluptas rem quos cupiditate ducimus! Laudantium, iusto
                accusantium quia corporis officiis beatae aliquid vero dolore
                iste adipisci fuga itaque architecto totam molestias facilis
                eius, quasi rem voluptatem fugiat. Ex quas dolores cum eum
                molestiae.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt itaque suscipit, esse delectus obcaecati tempora maxime
                nulla rem aliquam eligendi.
              </p>
            </TabPane>
            <TabPane tab="Reviews" key="2">
              No Reviews Available
            </TabPane>
            <TabPane tab="Questions" key="3">
              <button className="custom-btn">
                <QuestionCircleOutlined />
                <span>Ask Question</span>
              </button>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
      <Row>
        <RelateProducts></RelateProducts>
      </Row>
    </div>
  );
};

export default SingleProductPage;
