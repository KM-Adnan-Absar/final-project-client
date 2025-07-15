import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../Components/SectionTitle";
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from "../CheckOutForm";
const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_key)

    return (
        <div>
            <SectionTitle heading={'payment'} subHeading={'Please pay here'}></SectionTitle>
            <div>
             <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
             </Elements>
            </div>
        </div>
    );
};

export default Payment;