import collection from "../../assets/images/pickup.png"
import time from "../../assets/images/time.png"
import shop from "../../assets/images/shop.png"
import { useDispatch, useSelector } from "react-redux"
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import { fetchService } from "../../Redux/ServiceSlice";
import { useEffect } from "react";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

const Service = () => {
  const dispatch = useDispatch()
  const { service: data, isLoading: dataLoaing } = useSelector((state) => state.services)
  useEffect(() => {
    dispatch(fetchService(6))
  }, [dispatch])

  return (
    <div className=" bg-cover bg-no-repeat bg-center relative bg-fixed" style={{backgroundImage: 'url(https://i.imgur.com/5tmRtTh.png)'}}>
      <div className="max-w-7xl mx-auto xl:px-0 px-5">
        <h2 className="text-center pt-5 lg:mt-20 text-4xl font-bold  text-[#101a30] mb-5">
          Our Services
        </h2>
        <p className="text-xl text-center text-brand-color font-semibold mb-10 ">
          Comprehensive Waste Solutions
        </p>

        {/* services */}
        <div className="md:flex gap-20 w-fit mx-auto bg-white">
          <motion.div
            className="w-80 text-center lg:p-10 relative"
            whileHover={{ scale: 1.05 }}
          >
            <img src={collection} alt="" className="w-20 mx-auto" />
            <h3 className="text-2xl font-bold my-2 ">Waste collection</h3>
            <p>Streamline your waste management with our efficient Waste Collection service.</p>
            <motion.div
              className="rounded-t-3xl absolute inset-0 flex items-center justify-center bg-brand-color bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              <Link to={"/services"}><button className="bg-white text-black px-4 py-2 rounded hover:text-brand-color hover:font-bold transition-colors duration-300">
                See Details
              </button></Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-80 text-center lg:p-10 relative"
            whileHover={{ scale: 1.05 }}
          >
            <img src={time} alt="" className="w-20 mx-auto" />
            <h3 className="text-2xl font-bold my-2 ">Pickup Schedule</h3>
            <p>Effortlessly schedule pickups for your waste with our convenient Pickup Schedule service</p>
            <motion.div
              className="rounded-t-3xl absolute inset-0 flex items-center justify-center bg-brand-color bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              <Link to={"/pickUpReq"}><button className="bg-white text-black px-4 py-2 rounded hover:text-brand-color hover:font-bold transition-colors duration-300">
                See Details
              </button></Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-80 text-center lg:p-10 relative"
            whileHover={{ scale: 1.05 }}
          >
            <img src={shop} alt="" className="w-20 mx-auto" />
            <h3 className="text-2xl font-bold my-2 ">Sustainable Store</h3>
            <p>Browse our curated collection of eco-friendly products designed to help you reduce, reuse, and recycle with ease.</p>
            <motion.div
              className="absolute rounded-t-3xl inset-0 flex items-center justify-center bg-brand-color bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              <Link to={"/shop"}><button className="bg-white text-black px-4 py-2 rounded hover:text-brand-color hover:font-bold transition-colors duration-300">
                See Details
              </button></Link>
            </motion.div>
          </motion.div>

        </div>


        {/* all services */}
        {dataLoaing ? (
          <div className="text-center py-20 ">
            <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 py-20 bg-white">
            {data?.map((item) => (
              <ServiceCard key={item?._id} data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;