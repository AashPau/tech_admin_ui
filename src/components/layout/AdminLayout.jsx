import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";

export const AdminLayout = () => {
  return (
    <div className="d-flex vh-100">
      <div className="left bg-dark" style={{ width: "200px" }}>
        <div className="py-3">Admin CMS</div>
        <SideBar />
      </div>
      <div className="right flex-grow-1">
        <Header />
        <main className="main p-2" style={{ minHeight: "90vh" }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
