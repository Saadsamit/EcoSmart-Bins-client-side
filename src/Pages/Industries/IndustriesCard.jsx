import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const IndustriesCard = ({ data, isTrue, DeleteFun }) => {
  return (
    <div className="card mb-72">
      <figure className="relative">
        <div className="group w-96 h-80 rounded-lg overflow-hidden relative">
          <img
            src={data?.img}
            className="w-full h-full object-cover"
            alt="Shoes"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#257830] opacity-0 group-hover:opacity-95 transition-opacity duration-300"></div>
        </div>
      </figure>
      <div className="card-body absolute text-start w-[350px] h-72 rounded-xl shadow-xl bg-white top-0 mt-64 right-0">
        <Link
          to={`/services/${data?._id}`}
          className="text-xl font-bold pt-3 hover:text-green-800 justify-center pb-4"
        >
          {data?.category}
        </Link>
        <p className="pb-4">{data?.shortDescription}...</p>
		<hr />

        {isTrue ? (
          <div className="space-y-4">
            <Link
              to={`/dashboard/updateServices/${data?._id}`}
              className="btn lg:px-10 bg-gradient-to-r from-brand-color to-green-500 lg:text-xl capitalize text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color w-full"
            >
              update
            </Link>
            <button
              onClick={() => DeleteFun(data?._id)}
              className="btn lg:px-10 bg-red-500 hover:bg-red-600 lg:text-xl capitalize text-white w-full"
            >
              Delete
            </button>
          </div>
        ) : (
          <div className="mb-6">
            <Link
              to={`/services/${data?._id}`}
              className="text-lg font-bold hover:border-b-2 hover:border-black flex justify-start items-center hover:text-green-800 h-14 gap-4 w-44"
            >
              Explore More
              <span className="text-xl">
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
IndustriesCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndustriesCard;
