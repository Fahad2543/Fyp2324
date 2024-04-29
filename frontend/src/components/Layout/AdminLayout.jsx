import React from 'react';
import AdminMenu from'./AdminMenu'
import Header from "./Header";
import './AdminMenu.css'

function AdminLayout({ children }) {
  return (
    <>
    <Header/>
    <div className="container-fluid">
   
      <div className="row">
        {/* Sidebar */}
        <div className="col-sm-3 bg-light">
         <AdminMenu/>
        </div>
        {/* Main Content Area */}
        <div className="col-sm-9 px-4 mt-4">
          {children}
        </div>
      </div>
    </div>
    </>
  );
}

export default AdminLayout;
