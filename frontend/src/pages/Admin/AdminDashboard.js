import React from "react";
import AdminLayout from "../../components/Layout/AdminLayout"; // Import AdminLayout

import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <AdminLayout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
        
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> Admin Name : {auth?.user?.name}</h3>
              
              
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
