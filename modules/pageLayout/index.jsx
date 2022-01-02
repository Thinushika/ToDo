import React from "react";

function Layout() {
  return (
    <div className="App">
      {/* header */}
      <div className="header">Header</div>

      {/* content */}
      <div className="container">
        <div className="drawer">Drawer</div>
        <div className="main"></div>
      </div>

      {/* footer */}
      <div className="footer">Footer</div>
    </div>
  );
}

export default Layout;
