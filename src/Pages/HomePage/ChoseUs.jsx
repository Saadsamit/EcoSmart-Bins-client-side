import { Link } from "react-router-dom";
import img from "../../assets/images/service5.jpg";

const ChoseUs = () => {
  return (
    <div className="max-w-7xl mx-auto xl:px-0 px-5  my-12 md:flex justify-start items-center gap-12 bg-white">
      <div className="">
        <img className="h-[700px] w-[550px] rounded-xl" src={img} alt="" />
      </div>
      <div className="flex-[1]">
        <h5 className="text-2xl text-green-600 font-bold">Why Choose Us</h5>
        <h1 className="text-5xl font-bold text-black py-6">
          Why choose our EcoSmart Bins services
        </h1>
        <p className="text-black">
          Choose our EcoSmart Bins services for a cutting-edge and sustainable
          approach to waste management. Our innovative solutions are designed to
          revolutionize the way you handle waste, providing efficiency,
          cost-effectiveness, and environmental responsibility.
          <br />
          <br />
          With EcoSmart Bins, you can benefit from state-of-the-art sensor
          technology that enables real-time monitoring of waste levels. This not
          only optimizes collection routes but also reduces operational costs by
          ensuring that bins are emptied only when necessary. Our smart waste
          management system is tailored to meet the unique needs of businesses
          and municipalities, promoting a cleaner and greener environment.
        </p>
        <div className="text-black">
          <div className="pt-4">
            <h5 className="font-bold text-xl">Optimized Collection Routes</h5>
            <p>
              Our sensor-equipped bins communicate real-time data, allowing for
              the creation of optimized collection routes. This leads to fuel
              and time savings, contributing to a more sustainable waste
              management process.
            </p>
          </div>
          <div className="pt-4">
            <h5 className="font-bold text-xl">Cost Savings</h5>
            <p>
              By efficiently managing waste collection schedules based on actual
              fill levels, you can significantly reduce operational costs
              associated with unnecessary pickups and transportation.
            </p>
          </div>
          <Link to="/contact">
            {" "}
            <button className="mt-8 border-0 btn lg:px-10 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color ">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChoseUs;
