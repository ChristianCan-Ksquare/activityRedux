import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthentication } from "../features/authentication/authenticationSelectors";

export const ProtectedRoute = ({ children, ...props }) => {
  const isAuthenticated = useSelector(selectAuthentication);
  return (
    <Route
      {...props}
      render={() =>
        isAuthenticated === 1 ? children : <Redirect to="/login" />
      }
    />
  );
};
