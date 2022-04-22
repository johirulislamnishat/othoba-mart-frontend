import HomeLayout from "./../components/layouts/homeLayout";
import CheckoutForm from "./../components/checkout/CheckoutForm";
import CheckoutCart from "./../components/checkout/CheckoutCart";

const Checkout = () => {
  return (
    <HomeLayout title="Othoba Mart | Checkout">
      <div className="p-4 lg:p-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">     
            <CheckoutForm />
          </div>    
      </div>
    </HomeLayout>
  );
};

export default Checkout;
