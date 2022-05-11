import React from "react";
import ProductTable from "../../../components/admin/productTable";
import AdminLayout from "../../../components/layouts/adminLayout";

const Products = () => {
	return (
		<AdminLayout title="Admin | Products" pageTitle="Products">
			<ProductTable />
		</AdminLayout>
	);
};

export default Products;
