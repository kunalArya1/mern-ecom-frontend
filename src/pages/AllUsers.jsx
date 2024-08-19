import moment from "moment";
import { useOutletContext } from "react-router-dom";

const AllUsers = () => {
  const {
    allUser,
    editHandler,
    saveHandler,
    editingUserId,
    selectedRole,
    setSelectedRole,
  } = useOutletContext();

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white table-fixed">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left w-12">Sr.</th>
              <th className="py-3 px-6 text-left w-32">Username</th>
              <th className="py-3 px-6 text-left w-48">Email</th>
              <th className="py-3 px-6 text-left w-24">Role</th>
              <th className="py-3 px-6 text-left w-40">Created Date</th>
              <th className="py-3 px-6 text-left w-20">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {allUser.map((user, index) => (
              <tr
                key={user._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{index + 1}</td>
                <td className="py-3 px-6 text-left">{user?.name}</td>
                <td className="py-3 px-6 text-left">{user?.email}</td>
                <td className="py-3 px-6 text-left">
                  {editingUserId === user._id ? (
                    <select
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="bg-gray-200 border border-gray-300 p-2 rounded w-full"
                    >
                      <option value="GENERAL">GENERAL</option>
                      <option value="ADMIN">ADMIN</option>
                    </select>
                  ) : (
                    user?.role
                  )}
                </td>
                <td className="py-3 px-6 text-left">
                  {moment(user?.createdAt).format("LL")}
                </td>
                <td className="py-3 px-6 text-left">
                  {editingUserId === user._id ? (
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 uppercase w-full"
                      onClick={() => saveHandler(user._id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 uppercase w-full"
                      onClick={() => editHandler(user._id, user.role)}
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
