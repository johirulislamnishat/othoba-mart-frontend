import HomeLayout from "./../components/layouts/homeLayout";
import CheckoutForm from './../components/checkout/CheckoutForm'
import CheckoutCart from './../components/checkout/CheckoutCart'

const Checkout = () => {
  

  return (
    <HomeLayout title='Othoba Mart | Checkout'>
      <div className="sm:p-8">
        <p className="mb-3"><span className='text-gray-400'>Homepage /</span> Checkout page</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="col-span-2 order-2 sm:order-1">
            <CheckoutForm />
          </div>
          <div className="h-max col-span-2 sm:col-span-1 order-1 sm:order-2 border-2 border-gray-200 rounded-lg p-4 ">
           <CheckoutCart />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Checkout;
