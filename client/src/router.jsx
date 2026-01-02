import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Service from "./pages/Service.jsx";

import Logout from "./pages/Logout.jsx";
import Error from "./pages/Error.jsx";
 

import { AdminLayout } from "./pages/Admin/admin-layout.jsx";
import { AdminUsers } from "./pages/Admin/Admin-users.jsx";
import { AdminContacts } from "./pages/Admin/admin-contacts.jsx";
import { AdminServices } from "./pages/Admin/admin-services.jsx";
import { EditAdminUsers } from "./pages/Admin/editAdminUsers.jsx";

const router = createBrowserRouter([
  //  Public pages (Header + Footer)
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "service", element: <Service /> },
      { path: "logout", element: <Logout /> },
    ],
  },

  //  Admin pages
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "users", element: <AdminUsers /> },
      { path: "users/edit/:Id", element: <EditAdminUsers /> },
      { path: "contacts", element: <AdminContacts /> },
      { path: "services", element: <AdminServices /> },
    ],
  },

  //  Error
  { path: "*", element: <Error /> },
]);

export default router;
