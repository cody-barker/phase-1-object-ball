function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },

    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turqouise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brednan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

// console.log(gameObject());

function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}

// function numPointsScored(playerName) {
//   let game = gameObject();
//   let allPlayers = [];
//   for (let key in game) {
//     let teamObj = game[key];

//     for (let player in teamObj.players) {
//       allPlayers.push({
//         name: player,
//         ...teamObj.players[player],
//       });
//     }
//   }
//   const search = allPlayers.find((player) => player.name === playerName);
//   debugger;
//   return search ? search.points : null;
// }

function numPointsScored(playerName) {
  const game = gameObject();

  for (const teamKey in game) {
    const teamObj = game[teamKey];
    const players = teamObj.players;

    if (players[playerName]) {
      return players[playerName].points;
    }
  }

  return null;
}

function shoeSize(playerName) {
  const game = gameObject();

  for (const teamKey in game) {
    const teamObj = game[teamKey];
    const players = teamObj.players;

    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }
  return null;
}

// function teamColors(teamName) {
//   const game = gameObject();

//   for (const teamKey in game) {
//     if (game[teamKey].teamName === teamName) {
//       return game[teamKey].colors;
//     }
//   }

//   return null;
// }

function teamColors(teamName) {
  const game = gameObject();
  const team = Object.values(game).find((team) => team.teamName === teamName);
  return team ? team.colors : null;
}

// function teamNames() {
//   const game = gameObject();
//   let teamNames = [];

//   for (const teamKey in game) {
//     teamNames.push(game[teamKey].teamName);
//   }

//   return teamNames;
// }

function teamNames() {
  const game = gameObject();
  return Object.values(game).map((team) => team.teamName);
}

function playerNumbers(team) {
  const game = gameObject();
  const numbers = [];
  for (const teamKey in game) {
    if (game[teamKey].teamName === team) {
      const playersArray = Object.values(game[teamKey].players);
      playersArray.forEach((player) => numbers.push(player.number));
    }
  }
  return numbers;
}

function playerStats(playerName) {
  const game = gameObject();
  for (const gameKey in game) {
    let players = game[gameKey].players;
    if (players[playerName]) {
      return players[playerName];
    }
  }
  return null;
}

// function bigShoeRebounds() {
//   const game = gameObject();
//   const players = [];
//   for (const gameKey in game) {
//     const team = game[gameKey].players;
//     debugger;
//     for (const player in team) {
//       players.push({ name: player, ...team[player] });
//     }
//   }
//   const shoeSizes = players.map((player) => player.shoe);
//   const biggestShoeSize = Math.max(...shoeSizes);
//   const playerWithBiggestShoe = players.find(
//     (player) => player.shoe === biggestShoeSize
//   );
//   const rebounds = playerWithBiggestShoe.rebounds;
//   debugger;
//   return rebounds;
// }

function bigShoeRebounds() {
  const game = gameObject();
  let playerWithBiggestShoe = null;

  for (const team of Object.values(game)) {
    for (const player of Object.values(team.players)) {
      if (!playerWithBiggestShoe || player.shoe > playerWithBiggestShoe.shoe) {
        playerWithBiggestShoe = player;
      }
    }
  }

  return playerWithBiggestShoe ? playerWithBiggestShoe.rebounds : null;
}

// console.log(homeTeamName());
// console.log(shoeSize("Mason Plumlee"));
// console.log(teamColors("Brooklyn Nets"));
// // console.log(teamNames());
// console.log(playerNumbers("Brooklyn Nets"));
// console.log(playerStats("Mason Plumlee"));
console.log(bigShoeRebounds());
