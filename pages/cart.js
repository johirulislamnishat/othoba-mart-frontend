import CartFull from "../components/cart/CartFull";
import CartTotal from "../components/cart/CartTotal";
import HomeLayout from "../components/layouts/homeLayout";

const Cart = () => {
	return (
		<HomeLayout title="Othoba Mart | Cart">
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
				<CartFull />
				<CartTotal />
			</div>
		</HomeLayout>
	);
};

export default Cart;
