import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocialLogin from '../../../Components/SocialLogin/SocialLogin';
import signin from '../../../assets/signin.json'
import Lottie from 'lottie-react';
const Login = () => {

const captchaRef = useRef(null)
const [disabled,setDisabled] = useState(true)

const navigate = useNavigate()
const location = useLocation()

const {signIn} = useContext(AuthContext);

const from = 
location.state?.from?.pathname || "/";

useEffect(() => {
    loadCaptchaEnginge(6); 
},[])

const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password= form.password.value;
    console.log(email,password);

    signIn(email,password)
    .then(result => {
        const user = result.user
        console.log(user);
       
        Swal.fire({
          title: "User Log in Successfully",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });

navigate(from , {replace: true });
})
}

const handleValidateCaptcha = () => {
   
    const user_captcha_value = captchaRef.current.value;
    if(validateCaptcha(user_captcha_value)){
   setDisabled(false)
    }
   
    
}

return (
            <>
            <Helmet>
                <title>Bistro Boss | Log in</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
     <Lottie animationData={signin}></Lottie>
      
    </div>
    
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold text-center p-4">Sign in</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name = 'email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name = 'password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="captcha" ref={captchaRef} 
          name = 'captcha' placeholder="Type the text avobe" className="input input-bordered" required />

          <button onClick={handleValidateCaptcha} className="btn mt-2">Validate</button>

         
        </div>
        <div className="form-control mt-6">
          
          <input className="btn btn-primary" disabled={false} type="submit" value="Log in" />
        </div>
      </form>
      <p className="px-6 text-center"><small>Already have an account <Link to="/login">Login</Link></small></p>
      <SocialLogin></SocialLogin>

    </div>
  </div>
</div>
</>
    );
};

export default Login;


