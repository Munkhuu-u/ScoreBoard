// // import Update from "./Update";
// import { players } from "../utils/players";
// import { useState } from "react";

// export default function Score({ player, index }) {
//   const Update = (index, id) => {
//     const [scores, setScores] = useState(players);
//     const updatedScores = [...scores];
//     (id = "increase")
//       ? (updatedScores[index].playerScore += 1)
//       : (updatedScores[index].playerScore -= 1);
//     setScores(updatedScores);
//   };

//   return (
//     <div className="score" key={index}>
//       <p>{player.playerName}</p>
//       <div>
//         <button
//           onClick={(e) => {
//             Update(index, e.target.id);
//           }}
//           id="decrease"
//         >
//           -
//         </button>
//         <span>{player.playerScore}</span>
//         <button
//           onClick={(e) => {
//             Update(index, e.target.id);
//           }}
//           id="increase"
//         >
//           +
//         </button>
//       </div>
//     </div>
//   );
// }
