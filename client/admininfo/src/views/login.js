import React from "react";
import Login from "../services/login";
import Footer from "../components/footer";


const ViewLogin = () => {
  return (
    <>
      <h3>Vista de Login </h3>
      <Login />
      <Footer/>
    </>
  );
};

export default ViewLogin;
