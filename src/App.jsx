// import React from "react";
// import Nav from "./components/Nav";
// import Home from "./components/Home";
// import About from "./components/About";
// import CallToAction from "./components/CallToAction";
// import Services from "./components/Services";
// // import Packages from "./components/Packages";
// import Bookings from "./components/Bookings";
// import Contact from "./components/Contact";

// const AppContext = React.createContext();
// export { AppContext };

// export default function App() {
//   const sectionRefs = React.useRef([]);
//   const homeRef = React.useRef();
//   const [homeVisibility, setHomeVisibility] = React.useState(true);

//   if (!localStorage.getItem("theme")) {
//     localStorage.setItem("theme", "light-theme");
//   }
//   const [theme, setTheme] = React.useState(
//     localStorage.getItem("theme") || "light-theme"
//   );
//   function toggleTheme() {
//     setTheme((prevTheme) => {
//       if (prevTheme === "light-theme") {
//         document.body.classList.add("dark-mode");
//         localStorage.setItem("theme", "dark-theme");
//         return "dark-theme";
//       } else {
//         document.body.classList.remove("dark-mode");
//         localStorage.setItem("theme", "light-theme");
//         return "light-theme";
//       }
//     });
//   }

//   const windowWidth = window.innerWidth;
//   const isBigWindow = windowWidth >= 1200 ? true : false;

//   return (
//     <AppContext.Provider
//       value={{
//         homeRef,
//         homeVisibility,
//         setHomeVisibility,
//         theme,
//         toggleTheme,
//         sectionRefs,
//         isBigWindow,
//       }}
//     >
//       <div className={`${theme}`}>
//         <Nav />
//         <Home />
//         <About />
//         <CallToAction />
//         <Services />
//         <Bookings />
//         {/* <Packages /> */}
//         <Contact />
//       </div>
//     </AppContext.Provider>
//   );
// }



import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Services from "./components/Services";
import Bookings from "./components/Bookings";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const AppContext = React.createContext();
export { AppContext };

export default function App() {
  const sectionRefs = React.useRef([]);
  const homeRef = React.useRef();
  const [homeVisibility, setHomeVisibility] = React.useState(true);

  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light-theme");
  }
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light-theme"
  );

  function toggleTheme() {
    setTheme((prevTheme) => {
      if (prevTheme === "light-theme") {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-theme");
        return "dark-theme";
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light-theme");
        return "light-theme";
      }
    });
  }

  const windowWidth = window.innerWidth;
  const isBigWindow = windowWidth >= 1200 ? true : false;

  return (
    <AppContext.Provider
      value={{
        homeRef,
        homeVisibility,
        setHomeVisibility,
        theme,
        toggleTheme,
        sectionRefs,
        isBigWindow,
      }}
    >
      <div className={`${theme}`}>
        <Nav />
        <Home />
        <About />
        <CallToAction />
        <Services />
        <Bookings />
        <Contact ref={(element) => { if (element && !sectionRefs.current.includes(element)) sectionRefs.current.push(element); }} />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}