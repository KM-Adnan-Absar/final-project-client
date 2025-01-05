import { Link } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/menu">Our Menu</Link></li>
      <li><Link to="/shop/salad">Our Shop</Link></li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-lg mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" aria-label="Open menu" className="btn btn-ghost lg:hidden">
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
        <Link to="/" className="btn btn-ghost text-xl">Bursas Restaurent</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/some-page" className="btn">Button</Link>
      </div>
    </div>
  );
};

export default Header;
  