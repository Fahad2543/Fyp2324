import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import axios from "axios";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";

const CreateCategory = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const tableHeaders = ["Name", "Email", "Phone", "Address", "Update", "Delete"];

  useEffect(() => {
    // Fetch users from your backend
    axios.get('/api/v1/auth/users')
      .then(response => {
        // Filter users with role 1 and exclude user with email "admin@medlocate.com"
        const filteredUsers = response.data.users.filter(user => user.role === 1 && user.email !== "admin@medlocate.com");
        setUsers(filteredUsers);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []); // Empty dependency array means this effect runs once after initial render

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setIsUpdateModalOpen(true);
  };

  const handleDelete = (user) => {
    axios.delete(`/api/v1/auth/users/${user._id}`)
      .then(response => {
        // Remove the deleted user from the state
        setUsers(users.filter(u => u._id !== user._id));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const handleUpdateSubmit = (updatedUser) => {
    // Implement the update functionality
    console.log('Updated user:', updatedUser);
    setIsUpdateModalOpen(false);
  };

  const filteredUsers = users.filter(user => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <AdminLayout title={"Dashboard - Create Category"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-6">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><FaSearch /></span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <h1>pharmacy  User</h1>
          <div className="table-responsive">
            <table className="table table-hover table-borderless">
              <thead>
                <tr>
                  {tableHeaders.map(header => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {filteredUsers.map(user => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => handleUpdate(user)}>
                        <FaEdit /> Update
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={() => handleDelete(user)}>
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreateCategory;
