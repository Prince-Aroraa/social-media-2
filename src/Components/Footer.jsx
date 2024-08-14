import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


function Footer() {
  return (
    <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a
        href="/"
        className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
      >
        <svg className="bi" width={30} height={24}>
          <use xlinkHref="#bootstrap" />
        </svg>
      </a>
      <span className="mb-3 mb-md-0 text-body-secondary">
        © 2024 Company, Inc
      </span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3">
        <a className="text-body-secondary" href="https://www.google.com">
          <svg className="bi" width={24} height={24}>
          <FaTwitter href="https://www.google.com" />
          </svg>
        </a>
      </li>
      <li className="ms-3">
        <a className="text-body-secondary" href="#">
          <svg className="bi" width={24} height={24}>
          <FaSquareInstagram />
          </svg>
        </a>
      </li>
      <li className="ms-3">
        <a className="text-body-secondary" href="#">
          <svg className="bi" width={24} height={24}>
          <FaFacebookSquare />
          </svg>
        </a>
      </li>
    </ul>
  </footer>
</div>


  );
}

export default Footer;
