
// import React from "react";
// import { AppContext } from "../App";
// import SectionHeader from "./SectionHeader/index";


// export default function Services() {
//   const { sectionRefs } = React.useContext(AppContext);

//   return (
//     <section
//       ref={(element) => (sectionRefs.current[1] = element)}
//       id="services"
//       className="services"
//     >
//       <div className="container">
//         <SectionHeader>
//           <SectionHeader.Title>
//             SERVICES <span className="orange--word">WE PROVIDE</span>
//           </SectionHeader.Title>
//           <SectionHeader.Desc>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
//             incidunt blanditiis autem at alias earum nobis ad eos doloremque
//             quod totam, culpa sapiente quam harum provident dolores aliquid
//             voluptatum dolor.
//           </SectionHeader.Desc>
//         </SectionHeader>
//         <div className="services--card-container">
          
//           <div className="services--card">
           
//             <div className="services--card-content">
//               <div className="card--title">Technology Solutions</div>
//               <div className="card--desc">
//                 Web Development (Business, E-commerce, Personal), Mobile App Development (Android, iOS, Cross-platform) — empowering brands with sleek design, smart tech, and global reach.
//               </div>
//             </div>
//           </div>
          
          
           
      
    
//     </section>
//   );
// }

import React from "react";
import { AppContext } from "../App";
import SectionHeader from "./SectionHeader/index";

export default function Services() {
  const { sectionRefs } = React.useContext(AppContext);

  return (
    <section
      ref={el => (sectionRefs.current[1] = el)}
      id="services"
      className="services"
    >
      <div className="container">
        {/* Header Section (Intro) */}
        <div className="section--header">
          <h2>Our Services</h2>
          <p>
            We provide consultancy, technology, and professional solutions to help individuals and businesses succeed in the UK and beyond.
          </p>
          <div className="services--main-btn" style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: 24}}>
            <a href="#bookings" className="main--button">Book a Consultation</a>
            <a href="#packages" className="main--button" style={{background: 'var(--lightTheme-secondary-Color)', color: 'var(--lightTheme-white)'}}>View Packages</a>
          </div>
        </div>

        {/* Section 1: Education Consultancy & Career Services */}
        <div className="services--main" id="education">
          <div className="services--list">
            <div className="services--name">Education Consultancy & Career Services</div>
            <ul className="services--focus-list">
              <li className="services--focus-item"><b>Visa Guidance</b> (UK/Europe/Canada pathways)<br /><span style={{fontWeight: 400}}>Support with understanding options (not legal advice).</span></li>
              <li className="services--focus-item"><b>Course Shortlisting</b><br /><span style={{fontWeight: 400}}>University programs & professional training guidance.</span></li>
              <li className="services--focus-item"><b>Market-Ready Training</b><br /><span style={{fontWeight: 400}}>Soft skills & industry-focused sessions for UK job market.</span></li>
              <li className="services--focus-item"><b>Specialist Training</b>
                <ul style={{marginTop: 6, marginBottom: 0, paddingLeft: 18}}>
                  <li className="services--focus-item">Business Analysis</li>
                  <li className="services--focus-item">Scrum Master & Agile Implementation</li>
                  <li className="services--focus-item">Project Management</li>
                </ul>
              </li>
            </ul>
            <div className="services--preview-btn" style={{marginTop: 18}}>
              <a href="#bookings" className="main--button">Get UK Job Ready &rarr; Book a Session</a>
            </div>
          </div>
          {/* You can add a visual/illustration or keep this side empty for now */}
        </div>
      </div>
    </section>
  );
}