import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/about");
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>12345678910</p>
    </div>
  );
};

export default Contact;
