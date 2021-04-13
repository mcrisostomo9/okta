import React from "react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";

const Layout = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Layout;
