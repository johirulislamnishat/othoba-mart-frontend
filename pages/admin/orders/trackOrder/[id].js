import { useRouter } from "next/router";
import React from "react";
import AdminLayout from "../../../../components/layouts/adminLayout";
import OrderTracking from "../../../../components/shared/orderTracking";

const TrackOrder = () => {
	const router = useRouter();
	return (
		<AdminLayout>
			<OrderTracking id={router.query.id} />
		</AdminLayout>
	);
};

export default TrackOrder;
