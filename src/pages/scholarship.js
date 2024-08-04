import { AppBar, Grid, Typography } from "@mui/material";
import { Google, ExpandMore } from "@mui/icons-material";
import React from "react";
import ITextFieldInput from "../controlers/TextFieldInput";
import kalibackground from "../images/Kali_academy_-_Logo-gris.png";
import Navbar from "../component/navbar";
import "./../../style/style.css";
import { datafaq } from "./../data/Data.js";

function Scholarship() {
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState(datafaq);

  return (
    <div className="scholarship">
      <Navbar />
      <section className="presentation">
        <div>
          <img src={kalibackground} alt="Kali Academy" />
          <h1>WMA STEM Scholarship Program</h1>
          <p>
            Wikimedia Igbo under Wiki Mentor Africa Program and
            KALI Academy are teaming up to offer a fully-funded Programming 101 course for Africans to empower them with technical skills to contribute technically in Wikimedia Technical Projects.
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
              August 4, 2024.
            </p>
          </div>
          <div>
            <h1 className="number_title">2</h1>
            <h2 className="title">Scholarship Recipients Announced</h2>
            <p>
              Scholarship recipients will be notified by email.
            </p>
          </div>
        </div>
      </section>
      <section className="timeline">
        <h1>Scholarship Timeline</h1>
        <div>
          <div>
            <p> Jully 23, 2024.</p>
            <p>Applications open </p>
          </div>
          <div>
            <p> August 4, 2024.</p>
            <p>
              Last day to submit applications to earn a scholarship 
            </p>
          </div>
          <div>
            <p> August 20, 2024.</p>
            <p>
              Scholarship recipients are notified of their admission to the course
            </p>
          </div>
          <div>
            <p> August 29, 2024.</p>
            <p>Classroom start date</p>
          </div>
        </div>
      </section>
      <section className="about">
        <img src={kalibackground} alt="Kali Academy" />
        <div>
          <h1>About Kali Academy</h1>
          <p>
            Kali Academy is a non-profit organization whose mission is to train the next generation of open-source developers within Africa.
          </p>
        </div>
      </section>
      <section className="faq">
        <h1>General & Application FAQs</h1>
        <div>
          {data?.map((quiz) => (
            <div>
              <div>
                <p>{quiz.question}</p>
                <ExpandMore />
              </div>
              <p>{quiz.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Scholarship;
