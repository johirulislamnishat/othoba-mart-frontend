import React from "react";
import Link from "next/link";
import AdminLayout from "../../../../components/layouts/adminLayout";

const thankyou = () => {
    return (
        <AdminLayout>
            <div className="thanksyou">
                <h2>Thanks You for Submitting the form.</h2>
                <h5>Waiting for admin approval for the store.</h5>
                <h5>Please check your email for Store status updates. </h5>
                <button className="homebtn-thankyou">
                    <Link href="/" passHref>
                        Back to Home
                    </Link>
                </button>
            </div>
        </AdminLayout>
    );
};

export default thankyou;
