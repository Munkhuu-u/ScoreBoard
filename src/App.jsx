import { players } from "./utils/players";
import { playersSorted } from "./utils/players";
import { useState } from "react";
import "./styles/global.css";
import trophy from "./utils/trophy.svg";

export default function App() {
  const [scores, setScores] = useState(players);

  const Update = (index, id) => {
    const updatedScores = [...scores];
    console.log(id);
    id == "increase"
      ? (updatedScores[index].playerScore += 1)
      : (updatedScores[index].playerScore -= 1);
    setScores(updatedScores);

    const playersSorted = players.sort((a, b) => {
      return b.playerScore - a.playerScore;
    });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="title">
          <h2>Play score</h2>
          <p>Hidden in middle of text</p>
        </div>
        <div className="logo">
          <img src={trophy} alt="" />
        </div>
      </div>
      <div className="Players">
        {playersSorted.map((player, index) => {
          console.log(playersSorted);
          return (
            <div className="player" key={index}>
              <p>{player.playerName}</p>
              <div>
                <button
                  onClick={(e) => {
                    Update(index, e.target.id);
                  }}
                  id="decrease"
                >
                  -
                </button>
                <span>{player.playerScore}</span>
                <button
                  onClick={(e) => {
                    Update(index, e.target.id);
                  }}
                  id="increase"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
