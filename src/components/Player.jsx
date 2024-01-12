import Update from "./Update";

export default function Score({ player, index }) {
  return (
    <div className="score" key={index}>
      <p>{player.playerName}</p>
      <div>
        <button
          onClick={() => {
            Update(index);
          }}
        >
          -
        </button>
        <span>{player.playerScore}</span>
        <button
          onClick={() => {
            Update(index);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
