import { ExpandMore, ExpandLess } from "@mui/icons-material";
import React from "react";
import kalibackground from "../images/Kali_academy_-_Logo-gris.png";
import { StaticImage } from "gatsby-plugin-image";
import Navbar from "../components/navbar";
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
      <section className="presentation">
        <div>
          <StaticImage
            alt="WMA Logo"
            src="../images/WMA-Logo.png"
            layout="fixed"
            width={100}
            height={50}
            style={{ marginLeft: "-20px" }}
          />
          <h1>WMA STEM Scholarship Program</h1>
          <p>
            Wikimedia Igbo under Wiki Mentor Africa Program and KALI Academy are
            teaming up to offer a fully-funded Programming 101 course for
            Africans to empower them with technical skills to contribute
            technically in Wikimedia Technical Projects.
          </p>
        </div>

        <StaticImage
          alt="Students in the classrooms"
          src="../images/students.jpg"
        />
      </section>

      <section className="how-it-work">
        <h3 className="title">How does it work?</h3>
        <div>
          <div>
            <h1 className="number_title">1</h1>
            <div>
              <h2 className="title_box">Apply For The Program</h2>
              <p>
                Fill out the application form for the Business Analytics
                Nanodegree program and submit before the applications close on
                August 4, 2024.
              </p>
            </div>
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
        <h1 className="title">Scholarship Timeline</h1>
        <div>
          <div>
            <p> July 23, 2024.</p>
            <p>Applications open </p>
          </div>
          <div>
            <p> August 4, 2024.</p>
            <p>Last day to submit applications to earn a scholarship</p>
          </div>
          <div>
            <p> August 20, 2024.</p>
            <p>
              Scholarship recipients are notified of their admission to the
              course
            </p>
          </div>
          <div>
            <p> August 29, 2024.</p>
            <p>Classroom start date</p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-logo">
          <StaticImage alt="WMA Logo" src="../images/WMA-Logo.png" />
        </div>
        <div>
          <h1>About Kali Academy</h1>
          <p>
            Kali Academy is a non-profit organization whose mission is to train
            the next generation of open-source developers within Africa.
          </p>
        </div>
      </section>

      <section className="faq">
        <h1>General & Application FAQs</h1>
        <div>
          {data?.map((quiz, index) => (
            <div
              className={`${expandedIndex === index ? "expanded" : "notexpanded"
                }`}
              key={index}
              onClick={() => handleClick(index)}
            >
              <div>
                <h5>{quiz.question}</h5>
                {expandedIndex === index ? <ExpandLess /> : <ExpandMore />}
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

export const Head = () => <title>Scholarship - WMA </title>;
