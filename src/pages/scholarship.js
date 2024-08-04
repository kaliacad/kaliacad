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
  const [expandedIndex, setExpandedIndex] = React.useState(null);
  const [showAnswers, setShowAnswers] = React.useState(
    Array(data?.length).fill(false)
  );

  const handleClick = (index) => {
    setShowAnswers((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
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
        <h6 className="title">Scholarship Timeline</h6>
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
          {data?.map((quiz, index) => (
            <div
              className={`${
                expandedIndex === index ? "expanded" : "notexpanded"
              }`}
              key={index}
              onClick={() => handleClick(index)}
            >
              <div>
                <h5>{quiz.question}</h5>
                <ExpandMore />
              </div>
              {showAnswers[index] && <p>{quiz.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Scholarship;
