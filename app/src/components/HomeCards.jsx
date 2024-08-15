import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="p-4 rounded-lg">
            <Card>
              <div className="flex items-center flex-col">
                <h2 className="text-2xl font-bold">For Developers</h2>
                <p className="mt-2 mb-4">Browse our React jobs and start your career today</p>
                <Link
                  to="/jobs"
                  className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                >
                  Browse Jobs
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCards;
