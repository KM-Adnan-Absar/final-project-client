import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Logout Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => console.error("Error logging out:", error));
  };

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/shop/salad">Our Shop</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li>
        <Link to="/secrete">Secrete</Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="flex items-center gap-2">
            <FaShoppingCart />
            <div className="badge">+{cart.length}</div>
          </button>
        </Link>
      </li>

      {/* Conditional rendering for authenticated user */}
      {user ? (
        <>
          <span className="mr-4">Welcome, {user?.displayName}</span>
          <button onClick={handleLogOut} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-lg mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            aria-label="Open menu"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Bursas Restaurant
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/some-page" className="btn">
          Button
        </Link>
      </div>
    </div>
  );
};

export default Header;
