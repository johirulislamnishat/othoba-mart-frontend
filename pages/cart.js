import CartFull from "../components/cart/CartFull";
import CartTotal from "../components/cart/CartTotal";
import HomeLayout from "../components/layouts/homeLayout";

const Cart = () => {
	return (
		<HomeLayout title="Othoba Mart | Cart">
				<CartFull />
		</HomeLayout>
	);
};

export default Cart;
