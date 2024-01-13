export const players = [
  {
    id: 1,
    playerName: "John jjig",
    playerScore: 4,
  },
  {
    id: 2,
    playerName: "John tom",
    playerScore: 8,
  },
  {
    id: 3,
    playerName: "John dund",
    playerScore: 5,
  },
];

export const playersSorted = players.sort((b, a) => {
  return a.playerScore - b.playerScore;
});
