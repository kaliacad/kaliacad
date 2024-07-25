import { AppBar, Button, Grid, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import React from "react";
import ITextFieldnput from "../controlers/TextFieldInput";
import kalibackground from "../images/Kali_academy_-_Logo-gris.png";
import Navbar from "../component/navbar";
import "./../../style/style.css";
import { datafaq } from "./../data/Data.js";
function Scholarship() {
  const [seach, setSeach] = React.useState("");
  const [data, setData] = React.useState(datafaq);

  return (
    <div className="scholarship">
      <Navbar />
      <section className="presentation">
        <div>
          <img src={kalibackground} alt="Kali Academy" />
          <h1>Vodacom Mozambique Foundation STEM Scholarship Program</h1>
          <p>
            Vodacom Mozambique Foundation Vodacom Mozambique Foundation and
            Udacity are teaming up to offer fully-funded Nanodegree programs to
            female citizens of Mozambique as an effort to empower women in the
            tech industry.
          </p>
        </div>
        <div>
          <img src={kalibackground} alt="Kali Academy" />
        </div>
      </section>
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
            <p>Applications open on Udacity's website</p>
          </div>
          <div>
            <p> June 7, 2024.</p>

            <p>
              Last day to submit applications to earn scholarship access on
              Udacity's website
            </p>
          </div>
          <div>
            <p> June 7, 2024.</p>

            <p>
              Last day to submit applications to earn scholarship access on
              Udacity's website
            </p>
          </div>
          <div>
            <p> June 7, 2024.</p>

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
      <section className="faq">
        <h1>General & Application FAQs</h1>
        <div>
          <div>
            <div>
              <p>first question </p>
              <button>derouler</button>
            </div>
            <p>
              As a student in the Vodacom Mozambique Foundation STEM Scholarship
              Program, your learning journey will be 3 months and self-guided.
              Throughout your entire learning journey, you will have access to
              an online community platform, where you will get to ask other
              students and mentors for support to help you through any learning
              difficulties or even to network!
            </p>
          </div>
          <div>
            <div>
              <p>first question </p>
              <button>derouler</button>
            </div>
            <p>
              As a student in the Vodacom Mozambique Foundation STEM Scholarship
              Program, your learning journey will be 3 months and self-guided.
              Throughout your entire learning journey, you will have access to
              an online community platform, where you will get to ask other
              students and mentors for support to help you through any learning
              difficulties or even to network!
            </p>
          </div>
          <div>
            <div>
              <p>first question </p>
              <button>derouler</button>
            </div>
            <p>
              As a student in the Vodacom Mozambique Foundation STEM Scholarship
              Program, your learning journey will be 3 months and self-guided.
              Throughout your entire learning journey, you will have access to
              an online community platform, where you will get to ask other
              students and mentors for support to help you through any learning
              difficulties or even to network!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Scholarship;
