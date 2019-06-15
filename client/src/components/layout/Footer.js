import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white mt-5 p-4 text-center foot">
        Copyright &copy; {new Date().getFullYear()} Dev Space
      </footer>
    </div>
  );
};

export default Footer;
