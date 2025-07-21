import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import security from '../../assets/Secure.json'
import Lottie from "lottie-react";
const SignUp = () => {
const axiosPublic = useAxiosPublic()
const {createUser ,  updateUserProfile} = useContext(AuthContext)

  const {register,handleSubmit,reset,formState: { errors },
  } = useForm();
const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name , data.photoUrl)
        .then(() =>{
// create user entry in database 
const userInfo = {
name: data.name,
email: data.email

}

axiosPublic.post('/users',userInfo)
.then(res => {
  if(res.data.insertedId){
  console.log('user added successfully');
  
reset();
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "User Created Successfully",
  showConfirmButton: false,
  timer: 1500
});

navigate('/');
  }
})



        })
        
        .catch(error => console.log(error))
    })

  };

  return (
   <>
    <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            
    
      <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          
          <Lottie animationData={security}></Lottie>
        </div>
        <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl">
                  <h1 className="text-3xl font-bold text-center p-4">Sign Up</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="card-body">

            {/* Name  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
{/* photo URL  */}

<div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoUrl", { required: true })}
                placeholder="Photo Url"
                className="input input-bordered"
              />
              {errors.photoUrl && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>
{/* Email  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email?.type === "required" && (
                <span className="text-red-600">Email is required</span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-red-600">Invalid email address</span>
              )}
            </div>
            {/* Password  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600">
                  Password must be at least 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600">
                  Password cannot exceed 20 characters
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <input  className="btn btn-primary" type="submit" 
              value="Sign Up" />
               <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </div>
      
    </div>
    
    
   </>
  );
};

export default SignUp;
