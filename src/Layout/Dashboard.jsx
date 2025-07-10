
import { FaHome, FaShoppingCart,FaCalendar, FaAd,FaList,FaSearch , FaEnvelope, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();
    
 const [isAdmin] = useAdmin();

    return (
        <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4 ">
            {/* Home  */}
       {
      isAdmin ? <>
      
      <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li> 

                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>  

      </> : <>
      <li>
             <NavLink to = '/dashboard/userHome'>
             <FaHome></FaHome>
             User Home</NavLink>
             </li>
{/* Reservation  */}
             <li>
             
             <NavLink to = '/dashboard/reservation'>
             <FaCalendar></FaCalendar>
             Reservation</NavLink>
             </li>

           {/* Cart  */}
<li>
             <NavLink to = '/dashboard/cart'>
            <FaShoppingCart></FaShoppingCart>
            My Cart ({cart.length}) </NavLink>
            </li>
            {/* Review  */}
            <li>
             <NavLink to = '/dashboard/reviews'>
           <FaAd></FaAd>
           My Review</NavLink>
            </li>
{/* Booking  */}

<li>
             <NavLink to = '/dashboard/bookings'>
          <FaList></FaList>
           My Bookings</NavLink>
            </li>
      </>

       }
            <div className="divider"></div>
{/* Home after divider  */}
            <li>
             <NavLink to = '/'>
             <FaHome></FaHome>
         Home</NavLink>
             </li>

             {/* Menu  */}
             <li>
             <NavLink to = '/menu'>
            <FaSearch></FaSearch>
    Menu</NavLink>
             </li>
             <li>
             <NavLink to = '/contact'>
           <FaEnvelope></FaEnvelope>
 Contact</NavLink>
             </li>
             
</ul>

            </div>
            <div className='flex-1'>
            <Outlet></Outlet>
            </div>
            </div>
    );
};

export default Dashboard;