import React from "react";

function ListOfPlayers() {
  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 82 },
    { name: "Shubman Gill", score: 68 },
    { name: "KL Rahul", score: 72 },
    { name: "Hardik Pandya", score: 64 },
    { name: "Ravindra Jadeja", score: 88 },
    { name: "Ravichandran Ashwin", score: 61 },
    { name: "Jasprit Bumrah", score: 76 },
    { name: "Mohammed Shami", score: 59 },
    { name: "Mohammed Siraj", score: 67 },
    { name: "Kuldeep Yadav", score: 81 },
  ];

  const lowScorers = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: "30px" }}>
        List of Players having Scores Less than 70
      </h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {lowScorers.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListOfPlayers;