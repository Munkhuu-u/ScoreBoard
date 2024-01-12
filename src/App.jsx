import { players } from "./utils/players";
import Player from "../src/components/Player";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="title">
          <p></p>
          <p></p>
        </div>
        <div className="logo">
          <img src="" alt="" />
        </div>
      </div>
      <div className="Players">
        {players.map((player, index) => {
          return <Player player={player} index={index} />;
        })}
      </div>
    </div>
  );
}
