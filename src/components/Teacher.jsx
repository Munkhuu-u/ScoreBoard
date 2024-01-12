import { useState } from "react";

const players = [
  {
    id: 1,
    playerName: "John Cena",
    playerScore: 10,
  },
  {
    id: 2,
    playerName: "John John",
    playerScore: 8,
  },
  {
    id: 3,
    playerName: "John Kena",
    playerScore: 5,
  },
];

export const PlayerScore = () => {
  const [scores, setScores] = useState(players);

  const increase = (index) => {
    const updatedScores = [...scores];
    updatedScores[index].playerScore += 1;
    setScores(updatedScores);
  };

  return (
    <div>
      {scores.map((player, index) => (
        <div key={index}>
          <button onClick={() => increase(index)}>+</button>
          <span>
            {player.playerName}: {player.playerScore}
          </span>
          <button onClick={() => decrease(index)}>-</button>
        </div>
      ))}
    </div>
  );
};
