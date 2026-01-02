import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { Link } from "react-router-dom";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { token, url } = useAuth();

  const getAllUsers = async () => {
    try {
      const response = await fetch(`${url}/api/admin/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.log("error while fetching users", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`${url}/api/admin/users/delete/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        getAllUsers();
      }
    } catch (error) {
      console.log("error while deleting user", error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Admin Users
      </h2>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">

      <thead className="bg-linear-to-r from-indigo-50 to-blue-50 border-b border-indigo-200">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-800 uppercase">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-800 uppercase">
                Email
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-800 uppercase">
                Phone
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-indigo-800 uppercase">
                Update
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-indigo-800 uppercase">
                Delete
              </th>
           </tr>
      </thead>


          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 text-sm text-gray-800">
                  {user.userName}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {user.email}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {user.phone}
                </td>
                <td className="px-4 py-3 text-center">
                  <Link
                    to={`/admin/users/edit/${user._id}`}
                    className="inline-block px-3 py-1 rounded-md 
                    bg-indigo-600 text-white text-sm 
                    hover:bg-indigo-700 transition"
                  >
                    Edit
                  </Link>
                </td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="inline-block px-3 py-1 rounded-md 
                    bg-red-600 text-white text-sm 
                    hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};
