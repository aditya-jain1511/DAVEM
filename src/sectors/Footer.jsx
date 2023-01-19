import React from "react";
import "../css/footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";

function Footer() {
  return (
    <div className="footer">

    <div className="container">
      <div className="row align-items-start" style={{ textAlign: "left" }}>
        <div className="col-12 col-lg-3">
        <img src="/assets/images/daviet-logo.png" alt="Daviet Logo" className="footer-img"/>
        <span className="footer-logo">DAVEM</span>
          <div style={{ marginBottom: "20px" }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
          </div>
          <div>
            <span>
              <FaFacebookF className="faicons" />
            </span>
            <span>
              <FaInstagram className="faicons" />
            </span>
            <span>
              <FaTwitter className="faicons" />
            </span>
            <span>
              <FaLinkedin className="faicons" />
            </span>
            <span>
              <FaGithub className="faicons" />
            </span>
          </div>
        </div>
        <div className="col-12 col-lg-2 offset-lg-3">
          <div className="footerhead">Corner</div>
          <div className="d-none d-lg-block">
            <div className="footercont">Academics</div>
            <div className="footercont">Students</div>
            <div className="footercont">Admission</div>
          </div>
        </div>
        <div className="col-12 col-lg-2">
          <div className="footerhead">Links</div>
          <div className="d-none d-lg-block">
            <div className="footercont" ><Link className="footercont" to="/home"> Home</Link></div>
            <div className="footercont"><Link className="footercont" to="/events"> Events</Link></div>
            <div className="footercont"><Link className="footercont" to="/contacts"> Contact Us</Link></div>
            <NavLink className="footercont" href="https://davietjal.org" target="_blank" rel="noopener noreferrer">
                DAVIET
            </NavLink>
          </div>
        </div>
        <div className="col-12 col-lg-2">
          <div className="footerhead">Contact us</div>
          <div className="d-none d-lg-block">
            <div className="footercont">
              <FaEnvelope /> daviet@davietjal.org
            </div>
            <div className="footercont">
              <FaPhoneAlt /> +91-1812343400/01
            </div>
            <div className="footercont">
              <FaPhoneAlt /> TollFree- 18601800126
            </div>
            <div className="footercont">
              <GoLocation /> Kabir Nagar, Opposite Bulton Park, Jalandhar -144008
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="row align-items-center bottomfoot">
        <div
          className="col-12"
          style={{ textAlign: "center", marginBottom: "50px" }}
          >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.{" "}
        </div>
        <div className="col-12 col-lg-6">
          Copyright © 2022 DAV Institute of Engineering and Technology
        </div>
        <div className="col-12 col-lg-6 ms-auto" style={{ textAlign: "right" }}>
          All Rights Reserved | Terms and Conditions | Privacy Policy
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
