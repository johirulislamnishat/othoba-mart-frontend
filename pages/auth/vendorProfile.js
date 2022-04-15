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
    } 
  ];
const shopData = [
    {
      title: "Shop Name",
      type: "text",
    },
    {
      title: "Street",
      type:'text'
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
]

const Shop = () => {
    return(
        <div className="grid grid-cols-1 gap-4 p-4 sm:p-6 md:p-16 lg:p-20">
        <form className="">
              <h3 className="font-semibold text-xl">Complete Your Profile</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {inputFields.map((inp, i) => (
                  <label
                    key={i}
                    className="flex flex-col font-semibold text-sm">
                    {inp.title}
                    <input
                      type={inp.type}
                      placeholder={inp.title}
                      className="p-1 bg-gray-100 border-2 border-gray-100 rounded-lg"
                    />
                  </label>
                ))}
              </div>
              <h3 className="font-semibold text-xl mt-10">Please Enter Shop Address</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {shopData.map((inp, i) => (
                  <label
                    key={i}
                    className="flex flex-col font-semibold text-sm">
                    {inp.title}
                    <input
                      type={inp.type}
                      placeholder={inp.title}
                      className="p-1 bg-gray-100 border-2 border-gray-100 rounded-lg"
                    />
                  </label>
                ))}
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
              <h3 className="font-semibold text-xl mt-10">Write about your shop</h3>
              <textarea  placeholder='Write about your shop'
                className="mt-3 bg-gray-100 w-full rounded-lg"
                rows="4"
              />
              </div>
              <div>
               <h3 className="font-semibold text-xl mt-10">Write about yourself</h3>
              <textarea  placeholder='Write about yourself'
                className="mt-3 bg-gray-100 w-full rounded-lg"
                rows="4"
              />
              </div>
              </div>
                </form>
                
              <h3 className="font-semibold text-xl mt-12">Your Accout Info</h3>
              <p className="text-xs text-gray-500">
                Account number you like to get paid
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label
                    
                    className="flex flex-col font-semibold text-sm">
                    Account Number
                    <input
                      placeholder='Accout number'
                      className="p-1 bg-gray-100 border-2 border-gray-200 rounded-lg"
                    />
                  </label>
              <label
                    
                    className="flex flex-col font-semibold text-sm">
                   Bank Name
                    <input
                      placeholder='Accout number'
                      className="p-1 bg-gray-100 border-2 border-gray-200 rounded-lg"
                    />
                  </label>
              <label
                    
                    className="flex flex-col font-semibold text-sm">
                   Country
                    <input
                      placeholder='Accout number'
                      className="p-1 bg-gray-100 border-2 border-gray-200 rounded-lg"
                    />
                  </label>
              <label
                    
                    className="flex flex-col font-semibold text-sm">
                    Swift Code
                    <input
                      placeholder='Accout number'
                      className="p-1 bg-gray-100 border-2 border-gray-200 rounded-lg"
                    />
                  </label>
                  </div>
              </div>
    )
}


export default Shop