import {
  FaBars,
  FaCameraRetro,
  FaEdit,
  FaEnvelope,
  FaHistory,
  FaHome,
  FaMoneyCheck,
  FaPlusSquare,
  FaSearch,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { VscActivateBreakpoints } from "react-icons/vsc";
import {
  MdOutlineWorkHistory,
  MdOutlineWork,
  MdWorkOutline,
} from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import {Link, NavLink, Outlet } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { useGetApiQuery } from "../Redux/userApi/getApi";
import useUsers from "../API/UserApi/useUsers";
import Footer from "../SharedComponents/Footer";
import "./dasboard.css"

const Dashboard = () => {
  const { user, loading } = UseAuth();
  console.log(user);
  // const { data, isLoading } = useGetApiQuery(`/users/${user?.email}`);
  const[allUsers, isPending, refetch] = useUsers()
  console.log(allUsers);
  
  const isAdmin = allUsers?.filter(data => data?.role === "admin" && data?.email === user?.email)
  const isUser = allUsers?.filter(data => data?.role === "user" && data?.email === user?.email)
  const isWorker = allUsers?.filter(data => data?.role === "worker" && data?.email === user?.email)



  if (loading) {
    return (
      <div>
        <div className="text-center mt-20">
          <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }
  return (
    <div className="">
      <div className="drawer lg:drawer-open flex flex-col lg:flex-row font-andika">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content shadow p-2 lg:p-0 pl-3 lg:m-0 flex flex-row items-center justify-between">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
            <FaBars className="text-brand-color text-sm "></FaBars>
          </label>
          {/* open content */}
          <div className="p-3 flex gap-3 items-center lg:hidden ">
             {/* <h1 className="lg:text-3xl font-bold">
                <span className="bold text-brand-color">Eco</span>SmartBin
              </h1> */}
          <h2 className="font-semibold lg:text-xl"> {user?.displayName}</h2>
            <div className="">
                    <img
                      className="w-10 h-10 rounded-full border-2 border-brand-color"
                      src={user?.photoURL}
                      alt="https://i.ibb.co/8X8stTp/user.webp"
                    />
                </div>
                
          </div>
         
        </div>
        <div className="drawer-side z-20">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          
          <div className=" pr-2 lg:pr-0 w-52 lg:w-64 min-h-screen bg-gradient-to-r from-brand-color to-green-800 ... text-white overflow-hidden">
            <div className="card px-0 pt-8 pb-5 lg:pb-0 items-center mx-auto">
              <Link to={"/"} className="text-xl lg:text-3xl font-bold">
              Eco<span className="bold text-green-950">SmartBin</span>
              </Link>
              <div className="hidden lg:block">
              <figure className="px-10 py-3">
                <div className="">
                    <img
                      className="w-28 h-28 rounded-full border-2"
                      src={user?.photoURL}
                      alt="https://i.ibb.co/8X8stTp/user.webp"
                    />
                </div>
              </figure>
              </div>
              <div className="card-body px-0 pt-0 items-center text-center hidden lg:block">
                {/* {data?.role === "user" &&
                  (isLoading ? (
                    ""
                  ) : (
                    <p className="px-5 py-3 bg-white flex items-center gap-2 rounded-full">
                      <VscActivateBreakpoints className="text-brand-color text-xl" />{" "}
                      <p className="font-bold">{data?.points}</p>
                    </p>
                  ))} */}
              
                  <h2 className="font-bold lg:text-xl"> {user?.displayName}</h2>
                
                  <p className="text-sm lg:text-md font-bold">{user?.email}</p>
               
              </div>
            </div>

            <ul className="pl-2 lg:pl-4 menu px-0 font-semibold ">

            <li className="">
                <NavLink to="/dashboard/overview"
                 className={({ isActive, isPending }) =>
                 isActive ? " bg-white text-black lg:rounded-r-none" : isPending ? "pending"  : ""
               }
                >
                  <FaPlusSquare />
                  Overview
                </NavLink>
              </li>

              {/* admin routes */}
              {
                isAdmin?.length > 0 ?
                 <>
                  <li className="">
                <NavLink to="/dashboard/addServices"
                 className={({ isActive, isPending }) =>
                 isActive ? " bg-white text-black lg:rounded-r-none" : isPending ? "pending"  : ""
               }
                >
                  <FaPlusSquare />
                  Add Services
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/manageServices"
                 className={({ isActive, isPending }) =>
                 isActive ? " bg-white text-black lg:rounded-r-none" : isPending ? "pending"  : ""
               }
                >
                  <FaEdit />
                  Manage Services
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/addProducts"
                 className={({ isActive, isPending }) =>
                 isActive ? " bg-white text-black lg:rounded-r-none" : isPending ? "pending"  : ""
               }
                >
                  <FaPlusSquare />
                  Add Products
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/manageProducts"
                 className={({ isActive, isPending }) =>
                 isActive ? " bg-white text-black lg:rounded-r-none" : isPending ? "pending"  : ""
               }
                >
                  <FaEdit />
                  Manage Products
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/managePickup"
                 className={({ isActive, isPending }) =>
                 isActive ? " bg-white text-black lg:rounded-r-none" : isPending ? "pending"  : ""
               }
                >
                  <FaEdit />
                  Manage Pickup Request
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/manageShowcase"
                 className={({ isActive, isPending }) =>
                 isActive ? " bg-white text-black lg:rounded-r-none" : isPending ? "pending"  : ""
               }
                >
                  <FaEdit />
                  Manage Showcase
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/manageUser"
                 className={({ isActive, isPending }) =>
                 isActive ? " bg-white text-black lg:rounded-r-none" : isPending ? "pending"  : ""
               }
                >
                  <FaUsers />
                  Manage User
                </NavLink>
              </li>
             
                </> : ""
              }

              {/* worker routes */}

             {
              isWorker?.length > 0 ? <>
               <li className="">
                <NavLink to="/dashboard/PickupWork"
                 className={({ isActive, isPending }) =>
                 isActive ? " bg-white text-black lg:rounded-r-none" : isPending ? "pending"  : ""
               }
                >
                  <MdOutlineWorkHistory />
                  Pickup Work
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/OnGoingWork"
                 className={({ isActive, isPending }) =>
                 isActive ? " bg-white text-black lg:rounded-r-none" : isPending ? "pending"  : ""
               }
                >
                  <MdWorkOutline />
                  OnGoing Works
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/CompleteWorks"
                 className={({ isActive, isPending }) =>
                 isActive ? " bg-white text-black lg:rounded-r-none" : isPending ? "pending"  : ""
               }
                >
                  <MdOutlineWork />
                  Complete Works
                </NavLink>
              </li>
              </> : ""
             }

              {/* user routes */}

           { 
            isUser?.length > 0 ? 
              <>
               <li className="">
               <NavLink to="/dashboard/cart"
                className={({ isActive, isPending }) =>
                isActive ? " bg-white text-black lg:rounded-r-none" : isPending ? "pending"  : ""
              }
               >
                 <FaCartShopping></FaCartShopping> My Cart
               </NavLink>
             </li>
             <li className="">
               <NavLink to="/dashboard/addShowcase"
                className={({ isActive, isPending }) =>
                isActive ? " bg-white text-black lg:rounded-r-none" : isPending ? "pending"  : ""
              }
               >
                 <FaCameraRetro />
                 Add Showcase
               </NavLink>
              </li>
             <li className="">
               <NavLink to="/dashboard/feedback"
                className={({ isActive, isPending }) =>
                isActive ? " bg-white text-black lg:rounded-r-none" : isPending ? "pending"  : ""
              }
               >
                 <FaStar /> Feedback
               </NavLink>
             </li>
              <li className="">
               <NavLink to="/dashboard/RewardPoints"
                className={({ isActive, isPending }) =>
                isActive ? " bg-white text-black lg:rounded-r-none" : isPending ? "pending"  : ""
              }
               >
                 <VscActivateBreakpoints /> Reward Points
               </NavLink>
             </li> 
             <li className="">
               <NavLink to="/dashboard/payment"
                className={({ isActive, isPending }) =>
                isActive ? " bg-white text-black lg:rounded-r-none" : isPending ? "pending"  : ""
              }
               >
                 <FaMoneyCheck></FaMoneyCheck>
                 Make Payment
               </NavLink>
             </li>
             <li className="">
               <NavLink to="/dashboard/paymentHistory"
                className={({ isActive, isPending }) =>
                isActive ? " bg-white text-black lg:rounded-r-none" : isPending ? "pending"  : ""
              }
               >
                 <FaHistory></FaHistory>
                 Payment History
               </NavLink>
             </li> 
             </> : ""

            }

              {/* shared routes */}
             
              <li className="">
                <NavLink to="/">
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
              {/* <li className="">
                <NavLink to="/services">
                  <FaSearch></FaSearch>
                  Available Services
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/contact">
                  <FaEnvelope></FaEnvelope>
                  Contact
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="flex-1 p-5 md:p-8 z-0">
          <Outlet></Outlet>
        
        </div>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default Dashboard;
