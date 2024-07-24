import { AppBar, Button, Grid, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import React from "react";
import ITextFieldnput from "../controlers/TextFieldInput";
import kalibackground from "../images/Kali_academy_-_Logo-gris.png";
import Navbar from "../component/navbar";
import "./../../style/style.css";

function Scholarship() {
  const [seach, setSeach] = React.useState("");
  return (
    <div className="scholarship">
      <Navbar />
      <section className="how-it-work">
        <h3>How does it work?</h3>
        <div>
          <div>
            <h1 className="number_title">1</h1>
            <h2 className="title">Apply For The Program</h2>
            <p>
              Fill out the application form for the Business Analytics
              Nanodegree program and submit before the applications close on
              June 7, 2024.
            </p>
          </div>
          <div>
            <h1 className="number_title">2</h1>
            <h2 className="title">Scholarship Recipients Announced</h2>
            <p>
              Scholarship recipients notified by email. To learn more about
              Business Analytics, please visit the page for Business Analytics
            </p>
          </div>
        </div>
      </section>
      <section className="timeline">
        <h1>Scholarship Timeline</h1>
        <div>
          <div>
            <p> June 7, 2024.</p>
            <span>|</span>
            <p>Applications open on Udacity's website</p>
          </div>
          <div>
            <p> June 7, 2024.</p>
            <span>|</span>
            <p>
              Last day to submit applications to earn scholarship access on
              Udacity's website
            </p>
          </div>
          <div>
            <p> June 7, 2024.</p>
            <span>|</span>
            <p>
              Last day to submit applications to earn scholarship access on
              Udacity's website
            </p>
          </div>
          <div>
            <p> June 7, 2024.</p>
            <span>|</span>
            <p>Classroom start date</p>
          </div>
        </div>
      </section>
      <section className="about">
        <img src={kalibackground} alt="Kali Academy" />
        <div>
          <h1>About Kali Academy</h1>
          <p>
            Kali Academy is a non-profit organization dedicated to providing
            affordable and accessible education to underserved communities in
            Goma, Tanzania. Our mission is to empower individuals to develop the
            skills they need to succeed in today's complex and challenging
            world.
          </p>
        </div>
      </section>
    </div>
  );
}
export default Scholarship;
