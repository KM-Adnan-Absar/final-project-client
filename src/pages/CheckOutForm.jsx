import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const CheckOutForm = () => {
const [error , setError] = useState('')
const [transectionId , setTransectionId] = useState('')
const {user} = useAuth()
const [clientSecret , setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements()
    const axiosSecure = useAxiosSecure();
    const [cart , refetch] = useCart();
    const totalPrice = cart.reduce((total ,item) => total + item.price , 0)

useEffect( ()=> {
   if(totalPrice > 0){
     axiosSecure.post('/create-payment-intent',{price: totalPrice })
    .then(res  =>{
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
    })
   }
} , [axiosSecure , totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        const {error , paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if(error){
            console.log('[error]',error);
            setError(error.message)
        }
        else{
            console.log('[PaymentMethod]',paymentMethod);
            setError('')
        }

        // confirm payment 
        const {paymentIntent , error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
             
                payment_method: {
                    card: card ,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous',
                    }
                }
            
        })
        if(confirmError){
            console.log('confirm error');
            
        }
        else{
            console.log('payment intent',paymentIntent );
            if(paymentIntent.status === 'succeeded') {
                console.log('transaction id',paymentIntent.id);
                setTransectionId(paymentIntent.id)

                const payment = {
                    email:user.email,
                    price: totalPrice,
                    transectionId: paymentIntent.id,
                    date: new Date(),
                    cartId: cart.map(item => item._id ),
                    menuItemId: cart.map( item => item.menuId ),
                    status: 'pending'   
                }
const res = await axiosSecure.post('/payments', payment)
console.log('payment saved', res.data);
refetch();
if(res.data?.paymentResult?.insertedId){
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
}
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
           <p className="text-red-600">{error}</p>
      {
        transectionId && <p className="text-green-500">
            Your transection id:{transectionId}
        </p>
      }
        </form>
    );
};
export default CheckOutForm;