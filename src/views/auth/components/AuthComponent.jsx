import React from "react";
import AuthFooter from "./AuthUserFooter";
import Authheader from "./Authheader";

const AuthComponent = ({ text, children }) => {
  return (
    <div className="auth-container">
      <div className="flex flex-col items-center h-[90vh] lg:h-[65vh] w-11/12 lg:w-2/5 m-auto my-10 relative">
        <Authheader text={text} />
        {children}
        <AuthFooter />
      </div>
    </div>
  );
};

export default AuthComponent;
