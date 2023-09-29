import React from "react";
import { Outlet } from "react-router-dom";

function PostLayout() {
  return (
    <>
      <div>
        <Outlet />
      </div>
      <div style={{ background: "green", width: "100%" }}>
        <h1>Post</h1>
      </div>

      <div style={{ background: "green", width: "100%" }}>
        <h1>Post</h1>
      </div>
    </>
  );
}

export default PostLayout;
