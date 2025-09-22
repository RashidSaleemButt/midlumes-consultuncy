
import React from "react";
import { AppContext } from "../App";
import SectionHeader from "./SectionHeader/index";
import data from "../services/services.json";

export default function About() {
  const { sectionRefs } = React.useContext(AppContext);

  // Filter out chest and back training entries
  const filteredAboutData = data.trainingClasses.filter(
    (item) =>
      !item.name.toLowerCase().includes("chest") &&
      !item.name.toLowerCase().includes("back")
  );

  const [aboutData, setAbout] = React.useState(filteredAboutData);
  const [activeAboutId, setActiveAboutId] = React.useState(aboutData[0]?.id || "");

  function chooseAbout(id) {
    setActiveAboutId(id);
  }

  const aboutCards = aboutData.map((aboutItem) => {
    const activeClassStyle = activeAboutId === aboutItem.id ? "active" : "";
    return (
      <div
        key={aboutItem.id}
        className={`about--card ${activeClassStyle}`}
        onClick={() => chooseAbout(aboutItem.id)}
      >
        {aboutItem.name}
      </div>
    );
  });

  const displayAboutCards = aboutCards.slice(0, 4);

  const aboutPreview = aboutData.map((aboutItem) => {
    return (
      <div key={aboutItem.id} id={aboutItem.id} className="services--preview">
        {/* You can add preview content here if needed */}
      </div>
    );
  });

  const displayAboutPreview = aboutPreview.filter(
    (aboutItem) => aboutItem.props.id === activeAboutId
  );

  return (
    <section
      ref={(element) => (sectionRefs.current[2] = element)}
      id="about"
      className="about"
    >
      <div className="container">
        <SectionHeader>
          <SectionHeader.Title>
            ABOUT <span className="orange--word">US</span>
          </SectionHeader.Title>
          <SectionHeader.Desc>
            At <strong>Midlumes Consultancy Services Limited</strong>, we guide individuals, families, and professionals through the complex world of immigration and visa processes. With years of hands on experience and deep knowledge of international regulations, our mission is simple:  
            <em>To make your transition smooth, secure, and successful.</em>

            <br /><br />
            We offer personalized consultancy for:
            <ul className="about--services-list">
              <li><strong>Student Visas</strong>  Helping aspiring scholars access world-class education abroad</li>
              <li><strong>Work Permits</strong>  Connecting skilled professionals with global opportunities</li>
              <li><strong>Business & Investor Visas</strong>  Supporting entrepreneurs in expanding their ventures internationally</li>
              <li><strong>Family & Spouse Visas</strong>  Reuniting loved ones across borders</li>
              <li><strong>Tourist Visas</strong>  Making travel dreams a reality with hassle free documentation</li>
            </ul>

            <br />
            Our team blends legal insight, strategic planning, and empathetic support to ensure every client feels confident and informed. Whether you're planning a short visit or a permanent move, we’re here to guide you from eligibility checks to final approvals.

            <br /><br />
            <strong>Your journey begins with trust. Let us be your guide.</strong>
          </SectionHeader.Desc>
        </SectionHeader>
        <div className="about--main">
          <div className="about--list">`
            {displayAboutCards}
          </div>
          {displayAboutPreview}
        </div>
      </div>
    </section>
  );
}
