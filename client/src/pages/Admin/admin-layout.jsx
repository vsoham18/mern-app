import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useState } from "react";
import { AdminLink } from "./AdminLink";

export const AdminLayout = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  if (!user || !user.isadmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">
          Access Denied
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow z-50 flex items-center justify-between px-4 py-3">
        <h2 className="text-xl font-bold text-indigo-600">
          Admin
        </h2>
        <button
          onClick={() => setOpen(true)}
          className="text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 w-64 bg-white shadow-lg z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-indigo-600">
            Admin Panel
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-2xl"
          >
            ✕
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <AdminLink to="/admin/users" label="Users" setOpen={setOpen} />
          <AdminLink to="/admin/contacts" label="Contacts" setOpen={setOpen} />
          <AdminLink to="/admin/services" label="Services" setOpen={setOpen} />
          <AdminLink to="/" label="Home" setOpen={setOpen} />
        </nav>
      </aside>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Content */}
      <main className="flex-1 p-6 mt-14 md:mt-0">
        <Outlet />
      </main>

    </div>
  );
};


