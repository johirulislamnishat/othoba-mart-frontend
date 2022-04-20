import { useForm } from 'react-hook-form'
import VendorLayout from '/components/layouts/vendorLayout'

const inputFields = [
    {
      label:'First name',
      field: "fName",
      type: "text",
    },
    {
      label:'Last name',
      field: "lName",
      type: "text",
    },
    {
      label:'Email address',
      field: "email",
      type: "email",
    },
    {
      label:'Phone number',
      field: "phone",
      type: "number",
    },
  ];
  const shopData = [
    {
      label:'Shop Name',
      field: "shop",
      type: "text",
      required: true,
    },
    {
      label:'Road',
      field: "road",
      type: "text",
      required: true,
    },
    {
      label:'Town / City',
      field: "city",
      type: "text",
      required: true,
    },
    {
      label:'State / Country',
      field: "country",
      type: "text",
      required: true,
    },
    {
      label:'ZIP / Postal code',
      field: "zip_code",
      type: "text",
      required: true,
    },
    {
      label:'Website',
      field: 'website',
      type: 'text',
      required: false,
    }
  ];
  
  const VendorProfile = () => {
    const { register, handleSubmit, reset } = useForm();
   const onSubmit = data => console.log(data)
    return (
      <VendorLayout>
      <div className="grid grid-cols-1 gap-4 lg:gap-x-8 p-2 lg:p-10 lg:pt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-semibold text-xl">Personal Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {inputFields.map((inp, i) => (
              <label key={i} className="flex flex-col font-semibold text-sm">
                {inp.label}
                <input
                  type={inp.type}
                  placeholder={inp.label}
                  className="p-1 border-2 border-gray-200 rounded-lg"
                  {...register(inp.field, {required: true})}
                />
              </label>
            ))}
          </div>
          <h3 className="font-semibold text-xl mt-10">
            Your Shop Address
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {shopData.map((inp, i) => (
              <label key={i} className="flex flex-col font-semibold text-sm">
                {inp.label}
                <input
                  type={inp.type}
                  placeholder={inp.label}
                  className="p-1 border-2 border-gray-100 rounded-lg"
                  {...register(inp.field,{ required: true })}
                />
              </label>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
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
            <div>
            <h3 className="font-semibold text-xl mt-12 mb-0">Your Bank Information</h3>
        <p className="text-xs text-gray-500 m-0">
          Account number you like to get paid
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col font-semibold text-sm">
            Account Number
            <input
              placeholder="Accout number"
              className="p-1 border-2 border-gray-200 rounded-lg"
            />
          </label>
          <label className="flex flex-col font-semibold text-sm">
            Bank Name
            <input
              placeholder="Accout number"
              className="p-1 border-2 border-gray-200 rounded-lg"
            />
          </label>
          <label className="flex flex-col font-semibold text-sm">
            Country
            <input
              placeholder="Accout number"
              className="p-1 border-2 border-gray-200 rounded-lg"
            />
          </label>
          <label className="flex flex-col font-semibold text-sm">
            Swift Code
            <input
              placeholder="Accout number"
              className="p-1 border-2 border-gray-200 rounded-lg"
            />
          </label>
          </div>
          <button
            type="submit"
            className="w-max mt-7 py-2 px-16 bg-orange-600 
            text-lg text-white 
            font-semibold border-2 border-white rounded-lg hover:bg-transparent hover:text-orange-600 hover:border-2 hover:border-orange-600">
            Save
          </button>
          </div>
          </div>
        </form>
      </div>
      </VendorLayout>
    );
  };
  
  export default VendorProfile;
  