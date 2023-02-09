const team = {
  _players: [
    {
      firstname: "sean",
      lastname: "paul",
      age: 23,
    },
  ],
  _games: [{ opponent: "beko", teamPoints: 99, opponentPoints: 102 }],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      OpponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);
team.addGame("Titans", 100, 98);
console.log(team.games);
