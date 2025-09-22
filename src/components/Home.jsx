import React from "react";
import gymVideo from "../assets/images/gym-video.mp4";

import { AppContext } from "../App";

export default function Home() {
  const { homeRef, setHomeVisibility, sectionRefs } =
    React.useContext(AppContext);
  React.useEffect(() => {
    const options = {
      rootMargin: "-80px",
    };
    const navObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHomeVisibility(entry.isIntersecting);
    }, options);
    navObserver.observe(homeRef.current);
  }, []);

  function homeRefsMerged(element) {
    homeRef.current = element;
    sectionRefs.current[0] = element;
  }

  return (
    <section ref={homeRefsMerged} id="home" className="home">
      <video autoPlay loop muted src={gymVideo} className="home--video"></video>
      <div className="container">
        <div className="home--caption">
          
          <h2>
            YOUR WORLDWIDE <span className="orange--word">CAREER PARTNER</span>
          </h2>

          <h6>Navigate Your Career, Accelerate Your Business.

</h6>
        </div>
        
      </div>
    </section>
  );
}
