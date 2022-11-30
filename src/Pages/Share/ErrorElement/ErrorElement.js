import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  let error = useRouteError();
  console.error(error);

  return <div>{error.status}</div>;
};

export default ErrorElement;
