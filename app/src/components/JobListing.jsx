import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = `${description.substring(0, 90)}...`;
  }

  return (
    <>
      <div className="flex flex-col flex-1  bg-white rounded-xl shadow-md relative">
        <div className="flex flex-col flex-1 items-start p-4">
          <div className="mb-3">
            <h3 className="text-xl font-bold">{job.title}</h3>
            <div className="flex gap-2 items-center my-2">
              <div className="text-orange-700">
                <FaMapMarker className="inline mr-1" />
                {job.location}
              </div>
              <span>|</span>
              <p className="text-gray-600">{job.type}</p>
            </div>
            <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>
          </div>

          <div className="mb-2">{description}</div>

          <button
            onClick={() => setShowFullDescription((prevState) => !prevState)}
            className="text-indigo-500 mb-5 hover:text-indigo-600"
          >
            {showFullDescription ? "View Less" : "View More"}
          </button>

          <div className="flex flex-col lg:flex-row justify-between mb-4 mt-auto">
            <Link
              to={`/jobs/${job.id}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

JobListing.propTypes = {
  job: PropTypes.object,
};

export default JobListing;
