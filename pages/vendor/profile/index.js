import VendorLayout from '/components/layouts/vendorLayout'

const inputFields = [
    {
      title: "First name",
      type: "text",
    },
    {
      title: "Last name",
      type: "text",
    },
    {
      title: "Email address",
      type: "text",
    },
    {
      title: "Phone number",
      type: "number",
    },
  ];
  const shopData = [
    {
      title: "Shop Name",
      type: "text",
    },
    {
      title: "Street",
      type: "text",
    },
    {
      title: "Town / City",
      type: "text",
    },
    {
      title: "State / Country",
      type: "text",
    },
    {
      title: "ZIP / Postal code",
      type: "text",
    },
    {
      title: 'Website',
      type: 'text'
    }
  ];
  
  const VendorProfile = () => {
    return (
      <VendorLayout>
      <div className="grid grid-cols-1 gap-4 lg:gap-x-8 p-2 lg:p-10 lg:pt-4">
        <form className="">
          <h3 className="font-semibold text-xl">Personal Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {inputFields.map((inp, i) => (
              <label key={i} className="flex flex-col font-semibold text-sm">
                {inp.title}
                <input
                  type={inp.type}
                  placeholder={inp.title}
                  className="p-1 border-2 border-gray-200 rounded-lg"
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
                {inp.title}
                <input
                  type={inp.type}
                  placeholder={inp.title}
                  className="p-1 border-2 border-gray-100 rounded-lg"
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
          </div>
        </form>
  
        <h3 className="font-semibold text-xl mt-12 mb-0">Your Bank Information</h3>
        <p className="text-xs text-gray-500 m-0">
          Account number you like to get paid
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      </div>
      </VendorLayout>
    );
  };
  
  export default VendorProfile;
  