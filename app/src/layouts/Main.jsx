import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const Main = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Main;
