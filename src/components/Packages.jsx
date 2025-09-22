// import React from "react";
// import { AppContext } from "../App";
// import SectionHeader from "./SectionHeader/index";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// export default function Packages() {
//   const { sectionRefs, isBigWindow } = React.useContext(AppContext);

//   const [open, setOpen] = React.useState(false);
//   function handleDropdown() {
//     setOpen((prevOpen) => !prevOpen);
//   }

//   const dropdownStyles = {
//     display: open || isBigWindow ? "flex" : "none",
//   };
//   const dropdownArrow = open ? <IoIosArrowUp /> : <IoIosArrowDown />;

//   const [selectedDay, setSelectedDay] = React.useState({
//     day: "monday",
//     no: 0,
//   });

//   function handleSelectedDay(event, id) {
//     const { name, value } = event.target;
//     setSelectedDay({
//       [name]: value,
//       no: id,
//     });
//     setOpen(false);
//   }

//   const dayWiseMuscleGroups = {
//   monday: [
//     { muscle: "CHEST", reps: "4 sets (10 reps)", angle: "Incline/Flat", target: "Upper & mid chest" },
//     { muscle: "TRICEPS", reps: "3 sets (12 reps)", angle: "Close grip", target: "Long head" },
//   ],
//   tuesday: [
//     { muscle: "BACK", reps: "4 sets (8 reps)", angle: "Wide grip", target: "Lats & traps" },
//     { muscle: "BICEPS", reps: "3 sets (15 reps)", angle: "Supinated curl", target: "Peak contraction" },
//   ],
//   wednesday: [
//     { muscle: "SHOULDERS", reps: "4 sets (12 reps)", angle: "Overhead/Side raise", target: "Deltoids" },
//     { muscle: "FOUR ARMS", reps: "3 sets (20 reps)", angle: "Reverse curl", target: "Forearm flexors" },
//   ],
//   thursday: [
//     { muscle: "CHEST", reps: "3 sets (12 reps)", angle: "Decline", target: "Lower chest" },
//     { muscle: "TRICEPS", reps: "4 sets (10 reps)", angle: "Skull crushers", target: "Medial head" },
//   ],
//   friday: [
//     { muscle: "BACK", reps: "5 sets (6 reps)", angle: "Deadlift stance", target: "Spinal erectors" },
//     { muscle: "BICEPS", reps: "3 sets (12 reps)", angle: "Hammer curl", target: "Brachialis" },
//   ],
//   saturday: [
//     { muscle: "LEGS", reps: "5 sets (15 reps)", angle: "Squat/Leg press", target: "Quads, hamstrings, glutes" },
//   ],
// };
   
//   const timetable = Object.entries(dayWiseMuscleGroups).map(([day, exercises]) => (
//   <table key={day} className="timetable--table">
//     <thead>
//       <tr>
//         <th>Training</th>
//         <th>Reps</th>
//         <th>Angle</th>
//         <th>Target Area</th>
//       </tr>
//     </thead>
//     <tbody>
//       {exercises.map(({ muscle, reps, angle, target }) => (
//         <tr key={`${day}-${muscle}`}>
//           <td>{muscle}</td>
//           <td>{reps}</td>
//           <td>{angle}</td>
//           <td>{target}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// ));


//   return (
//     <section
//       className="packages"
//       ref={(element) => (sectionRefs.current[3] = element)}
//       id="packages"
//     >
//       <div className="container">
//         <SectionHeader>
//           <SectionHeader.Title>
//             <span className="dark-bg--normal-word">GYM</span>{" "}
//             <span className="orange--word">PACKAGES</span>
//           </SectionHeader.Title>
//           <SectionHeader.Desc>
//             JUST STICK TO IT AND YOU WILL SEE THE CHANGES
//           </SectionHeader.Desc>
//         </SectionHeader>
//         <div className="packages--main">
//           <div className="packages--days-filter">
//             {!isBigWindow && (
//               <button
//                 className="packages--select-button main--button"
//                 onClick={handleDropdown}
//               >
//                 <span className="packages--select-value">{selectedDay.day}</span>
//                 <span className="packages--select-arrow">{dropdownArrow}</span>
//               </button>
//             )}
//             <ul
//               style={dropdownStyles}
//               className="packages--days-list packages--dropdown-menu"
//             >
//               {Object.keys(dayWiseMuscleGroups).map((day, index) => (
//                 <React.Fragment key={day}>
//                   <li className="packages--day-item">
//                     <input
//                       type="radio"
//                       id={day}
//                       name="day"
//                       value={day}
//                       onChange={(event) => handleSelectedDay(event, index)}
//                       checked={selectedDay.day === day}
//                     />
//                     <label htmlFor={day}>{day}</label>
//                   </li>
//                   {index < Object.keys(dayWiseMuscleGroups).length - 1 && (
//                     <div className="packages--day-separator">/</div>
//                   )}
//                 </React.Fragment>
//               ))}
//             </ul>
//           </div>
//           <div className="packages--timetable">
//             {timetable[selectedDay.no]}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
