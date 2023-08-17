import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Toolbar from "../Toolbar/Toolbar";

const Layout = () => {
  return (
    <>
      <Header />
      <Toolbar />
      <Outlet />
    </>
  );
};

export default Layout;
