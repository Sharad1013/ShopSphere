import React, { useState } from "react";
import AdminSidebar from "./Sidebar";
import AdminHeader from "./Header";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      <div
        className={`fixed top-0 left-0 h-full ${
          openSidebar ? "block" : "hidden"
        } lg:block`}
      >
        <AdminSidebar open={openSidebar} setOpen={setOpenSidebar} />
      </div>
      {/* admin sidebar */}
      {/* <div className="flex flex-1 flex-col ml-[250px]"> */}
      <div
        className={`flex flex-1 flex-col transition-all duration-300 ${
          openSidebar ? "ml-0" : "ml-0 lg:ml-[250px]"
        }`}
      >
        {/* admin Header  */}
        <AdminHeader setOpen={setOpenSidebar} />
        <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
