import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { API_BASE_URL } from "../../../../apiconstants";
import AdminLayout from "../../../../components/layouts/adminLayout";

const UserDetails = () => {
  const router = useRouter();
  const id = router.query.details;

  useEffect(() => {
    if (typeof window !== "undefined") {
      // setToken(localStorage.getItem("token"));

      axios
        .get(`${API_BASE_URL}/user/${id}`, {
          headers: {
            token: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          // const arr = [];
          // for (const value of res.data.result) {
          // 	arr.push({ ...value, key: value._id });
          // }
          // setData(arr);
          //   console.log(res.data.result);
        })
        .catch((e) => console.log(e));
    }
  }, [id]);

  return (
    <AdminLayout title={"Admin | User details"}>
      <p>User Details</p>
    </AdminLayout>
  );
};

export default UserDetails;
