import HomeLayout from "./../components/layouts/homeLayout";
import CheckoutForm from "./../components/checkout/CheckoutForm";
import CheckoutCart from "./../components/checkout/CheckoutCart";

const Checkout = () => {
  return (
    <HomeLayout title="Othoba Mart | Checkout">
      <div className="lg:p-8">
        <p className="mb-3">
          <span className="text-gray-400">Homepage /</span> Checkout page
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          
            <CheckoutForm />
          </div>
          
        
      </div>
    </HomeLayout>
  );
};

export default Checkout;
