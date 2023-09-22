import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import{AdminStyle} from "../../styles/AdminStyle.css"
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
          <div className="admin">
<div className="admin_content">
  <h3>Admin Details</h3>
               <h5> Name {auth?.user?.name}</h5>
              <h5>Email : {auth?.user?.email}</h5>
              <h5>Contact : {auth?.user?.phone}</h5>
            </div>
          </div>
          </div>
          </div> 
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
