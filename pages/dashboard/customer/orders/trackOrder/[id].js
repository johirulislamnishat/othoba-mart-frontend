import { useRouter } from "next/router";
import React from "react";
import AdminLayout from "../../../../../components/layouts/adminLayout";
import OrderTracking from "../../../../../components/shared/orderTracking";

const TrackOrder = () => {
  const router = useRouter();
  return (
    <AdminLayout title="Admin | Order Details" pageTitle="Order Details">
      <OrderTracking id={router.query.id} />
    </AdminLayout>
  );
};

export default TrackOrder;
