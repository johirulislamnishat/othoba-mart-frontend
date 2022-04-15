import { DeleteTwoTone, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
import UseLocalDB from "/components/hooks/useLocalDB";

const CartFull = () => {
	const { cart, UpdateQuantity } = UseLocalDB();
	console.log(cart);
	// const remove = (productId) => {
	//     useEffect(() => {
	//       let rest = cart?.filter((pd) => pd._id != productId);
	//       localStorage.setItem("cart", JSON.stringify(rest));
	//     }, [productId]);
	// };

	const handleQuantity = (dir, productId) => {
		UpdateQuantity(productId);
	};

	return (
		<div className="py-4 col-span-1 sm:col-span-2">
			<table
				className="w-full table-fixed border-2 border-gray-200 text-center"
				style={{ borderSpacing: "20px" }}
			>
				<thead className="py-2 border-2 border-b-gray-200 w-full">
					<tr className="">
						<th colSpan="3">Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Subtotal</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody className="">
					{cart?.map((product) => (
						<>
							<tr key={product._id} className="font-semibold">
								<td className="">
									<img
										src="/images/auth.png"
										alt=""
										className="block w-24 h-20 rounded-lg m-2"
									/>
								</td>
								<td colSpan="2" className="w-full">
									<p className="text-left break-words">
										{product.title}
									</p>
									<p className="text-left break-words">
										{product.farm}
									</p>
								</td>
								<td>{product.price}</td>
								<td>
									<div className="w-max flex items-center">
										<MinusOutlined
											onClick={() =>
												handleQuantity(
													"dec",
													product._id
												)
											}
											className="cursor-pointer p-0.5"
										/>
										<input
											value={product.quantity}
											readOnly
											className="w-10 font-semibold text-center border-2 border-gray-200 rounded-lg"
										/>
										<PlusOutlined
											onClick={() =>
												handleQuantity(
													"inc",
													product._id
												)
											}
											className=" p-0.5 cursor-pointer"
										/>
									</div>
								</td>
								<td>{product.price}</td>
								<td>
									<DeleteTwoTone
										twoToneColor="#dd1111"
										className="cursor-pointer"
										// onClick={() => remove(product._id)}
									/>
								</td>
							</tr>
						</>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CartFull;
