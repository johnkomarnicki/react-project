import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgSpinner, CgArrowLeft } from "react-icons/cg";
import { FaMapMarker } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchJob() {
      try {
        const res = await fetch(`/api/job/${id}`);
        if (!res.ok) {
          const error = new Error();
          error.status = res.status;
          throw error;
        }
        const data = await res.json();
        setJob(data);
      } catch (error) {
        if (error.status === 404) navigate("/404");
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchJob();
  }, []);

  return loading ? (
    <div className="my-10 flex items-center justify-center">
      <CgSpinner className="text-6xl animate-spin" />
    </div>
  ) : (
    <>
      {error ? (
        <p className="text-center">Something went wrong, please try again!</p>
      ) : (
        <>
          <section>
            <div className="container m-auto py-6 px-6">
              <Link to="/jobs" className="text-indigo-500 hover:text-indigo-600 flex items-center">
                <CgArrowLeft className=" mr-2" /> Back to Job Listings
              </Link>
            </div>
          </section>

          <section className="bg-indigo-50">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <main>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                    <div className="text-gray-500 mb-4">{job.type}</div>
                    <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                    <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                      <FaMapMarker className="text-lg text-orange-700 mr-2" />
                      <p className="text-orange-700">{job.location}</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h3 className="text-indigo-800 text-lg font-bold mb-6">Job Description</h3>

                    <p className="mb-4">{job.description}</p>

                    <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                    <p className="mb-4">{job.salary} / Year</p>
                  </div>
                </main>

                <aside>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-6">Company Info</h3>

                    <h2 className="text-2xl">{job.company.name}</h2>

                    <p className="my-2">{job.company.description}</p>

                    <hr className="my-4" />

                    <h3 className="text-xl">Contact Email:</h3>

                    <p className="my-2 bg-indigo-100 p-2 font-bold">{job.company.contactEmail}</p>

                    <h3 className="text-xl">Contact Phone:</h3>

                    <p className="my-2 bg-indigo-100 p-2 font-bold">{job.company.contactPhone}5</p>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default JobPage;
