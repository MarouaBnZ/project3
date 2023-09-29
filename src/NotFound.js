import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <h1> 404 (NOT FOUND) </h1>
      <h3> The url you visisted is not defnied</h3>

      <Link to="/home">
        <button> Return Back to the home page</button>
      </Link>
    </>
  );
}

export default NotFound;
