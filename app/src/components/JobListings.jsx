import PropTypes from "prop-types";
import JobListing from "./JobListing";
import { CgSpinner } from "react-icons/cg";
import { useState, useEffect } from "react";

const JobListings = ({ jobLimit }) => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch(`/api/jobs?limit=${jobLimit}`);
        const result = await response.json();
        setJobs(result);
      } catch (error) {
        console.warn(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">Browse Jobs</h2>
          {loading ? (
            <div className="flex items-center justify-center">
              <CgSpinner className="text-6xl animate-spin" />
            </div>
          ) : (
            <>
              {error ? (
                <p className="text-center">Something went wrong, please try again!</p>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {jobs.map((job) => (
                      <JobListing key={job.id} job={job} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

JobListings.propTypes = {
  jobLimit: PropTypes.number,
};

export default JobListings;
