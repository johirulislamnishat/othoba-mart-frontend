import { useForm } from "react-hook-form";
import axios from "axios";
import VendorLayout from "../../../components/layouts/vendorLayout";
import { API_BASE_URL } from "../../../apiconstants";
import useProvider from "../../../hooks/useProvider";

const inputFields = [
    {
        label: "First name",
        field: "fName",
        type: "text",
    },
    {
        label: "Last name",
        field: "lName",
        type: "text",
    },
    {
        label: "Email address",
        field: "email",
        type: "email",
    },
    {
        label: "Phone number",
        field: "phone",
        type: "number",
    },
];
const shopData = [
    {
        label: "Shop Name",
        field: "shop_name",
        type: "text",
        required: true,
    },
    {
        label: "Road",
        field: "road",
        type: "text",
        required: true,
    },
    {
        label: "Town / City",
        field: "city",
        type: "text",
        required: true,
    },
    {
        label: "Zip / Post Code",
        field: "zip_code",
        type: "text",
        required: true,
    },
    {
        label: "State / Country",
        field: "country",
        type: "text",
        required: true,
    },
    {
        label: "Shop Phone",
        field: "shop_phone",
        type: "number",
        required: true,
    },
    {
        label: "Shop Email",
        field: "shop_email",
        type: "email",
        required: false,
    },
    {
        label: "Shop Logo",
        field: "shop_logo",
        type: "file",
        required: false,
        accept: "image/png, image/jpeg, image/jpg",
        style: true,
    },
];
const bankData = [
    {
        label: "Account Number",
        field: "account",
        type: "text",
    },
    {
        label: "Bank Name",
        field: "bank",
        type: "text",
    },
    {
        label: "Country",
        field: "country",
        type: "text",
    },
    {
        label: "Swift Code",
        field: "swift",
        type: "text",
    },
];

const VendorProfile = () => {
    const { register, handleSubmit, reset } = useForm();
    const {
        state: {
            user: { accessToken },
        },
    } = useProvider();

    const onSubmit = (data) => {
        const formData = new FormData();

        // creating a shop
        formData.append("vendor_name", `${data.fName} ${data.lName}`);
        formData.append("vendor_email", data.email);
        // formData.append("shop_phone", data.phone);
        formData.append("shop_name", data.shop_name);
        formData.append("shop_city", data.city);
        formData.append("shop_country", data.country);
        formData.append("shop_address", data.road);
        formData.append("shop_phone", data.shop_phone);
        formData.append("shop_email", data.shop_email);
        formData.append("shop_logo", data.shop_logo[0]);

        axios
            // .post(API_BASE_URL + "/shop", formData, {
            .post(API_BASE_URL + "/shop", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    token: `Bearer ${accessToken}`,
                },
            })
            .then((res) => {
                console.log(res);
            })
            .then((err) => {
                () => console.log(err);
            });
    };

    return (
        <VendorLayout>
            <div className="grid grid-cols-1 gap-4 lg:gap-x-8 p-2 lg:p-10 lg:pt-4">
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <h3 className="font-semibold text-xl">
                        Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {inputFields.map((inp, i) => (
                            <label
                                key={i}
                                className="flex flex-col font-semibold text-sm"
                            >
                                {inp.label}
                                <input
                                    type={inp.type}
                                    placeholder={inp.label}
                                    className="p-1 border-2 border-gray-200 rounded-lg"
                                    {...register(inp.field, { required: true })}
                                />
                            </label>
                        ))}
                    </div>
                    <h3 className="font-semibold text-xl mt-10">
                        Your Shop Address
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {shopData.map((inp, i) => (
                            <label
                                key={i}
                                className="flex flex-col font-semibold text-sm"
                            >
                                {inp.label}
                                <input
                                    style={
                                        inp?.style && {
                                            border: "1px solid white",
                                            backroundColor: "white",
                                            cursor: "pointer",
                                        }
                                    }
                                    type={inp.type}
                                    accept={inp?.accept}
                                    placeholder={inp.label}
                                    className="p-1 border-2 border-gray-100 rounded-lg"
                                    {...register(inp.field, { required: true })}
                                />
                            </label>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                        <div>
                            <h3 className="font-semibold text-xl mt-10">
                                Write about your shop
                            </h3>
                            <textarea
                                placeholder="Write about your shop"
                                className="mt-3 w-full rounded-lg"
                                rows="4"
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl mt-10">
                                Write about yourself
                            </h3>
                            <textarea
                                placeholder="Write about yourself"
                                className="mt-3 w-full rounded-lg"
                                rows="4"
                            />
                        </div>
                    </div>
                    <h3 className="font-semibold text-xl mt-12 mb-0">
                        Your Bank Information
                    </h3>
                    <p className="text-xs text-gray-500 m-0">
                        Account number you like to get paid
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {bankData.map((inp, i) => (
                            <label
                                key={i}
                                className="flex flex-col font-semibold text-sm"
                            >
                                {inp.label}
                                <input
                                    type={inp.type}
                                    placeholder={inp.label}
                                    className="p-1 border-2 border-gray-100 rounded-lg"
                                    {...register(inp.field, { required: true })}
                                />
                            </label>
                        ))}
                    </div>
                    <button
                        type="submit"
                        className="w-max mt-7 py-2 px-16 bg-sky-500 
            text-lg text-white 
            font-semibold border-2 border-white rounded-lg hover:bg-transparent hover:text-sky-500 hover:border-2 hover:border-sky-500"
                    >
                        Save
                    </button>
                </form>
            </div>
        </VendorLayout>
    );
};

export default VendorProfile;
