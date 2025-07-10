import {  useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



const FoodCard = ({item}) => {
    const {_id , name, image, price, recipe} = item;
    const {user} = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [,refetch] = useCart()
    const handleOnclick = () => {
        if(user && user.email){
  //  send cart item 
const cartItem = {
menuId :_id,
email: user.email,
name,
image,
price
}
axiosSecure.post('/carts',cartItem)
.then(res => {
  console.log(res.data);
  if(res.data.insertedId){
    Swal.fire({
      title: `${name} added to your cart`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    // refetch update data
    refetch()
  }
})

        }
        else{
          Swal.fire({
            title: "Do you want to login",
            text: "Please login to Add to cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Login"
          }).then((result) => {
            if (result.isConfirmed) {
             navigate('/login',{state:{from:location}})
            }
          });
        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
            <p className="absolute right-0 mr-12  -mt-40 px-2 text-white bg-slate-900">${price}</p>
          <img
            src={image}
            alt="Food"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button onClick={() => handleOnclick(item)} className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;