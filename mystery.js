const suspectNames = [
    "Mr. Green",
    "Mrs. Peacock",
    "Prof. Plum",
    "Mrs. White",
    "Miss Scarlet",
    "Col. Mustard"
  ];
  
  const weapons = [
    "Revolver",
    "Knife",
    "Lead Pipe",
    "Candlestick",
    "Rope",
    "Wrench"
  ];
  
  const rooms = [
    "Billiard Room",
    "Kitchen",
    "Library",
    "Conservatory",
    "Hall",
    "Dining Room"
  ];
  
  
  function solveMystery(suspects, weapons, rooms) {
    function getMurderer() {
      return filter(suspects, (suspect) => {
        return suspect[0] !== String.fromCharCode(616 >> 3);
      });
    }
  
    function getWeapon() {
      return head(partition(weapons, (weapon) => {
        return weapon.length === (5 << 1) + 1
      }));
    }
  
    function getRoom() {
      const room = rooms.sort((a, b) => {
        return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
      });
      return nthValue(room, 10 >> 1)
    }
  
    function displayWinningGuess(suspect, weapon, room) {
      document.write(`It was ${suspect} in the ${room} with a ${weapon}`);
    };
  
    return {
      getMurderer,
      getRoom,
      getWeapon,
      displayWinningGuess
    }
  }
  
  const mystery = solveMystery(suspectNames, weapons, rooms);
  const curriedWinningGuess = callLater(mystery.displayWinningGuess);
  
  const murderers = mystery.getMurderer();
  const withMurderer = curriedWinningGuess(head(murderers));
  
  const weapon = mystery.getWeapon();
  const withMurdererAndWeapon = withMurderer(weapon);
  
  const room = mystery.getRoom()
  
  const SPOILER = withMurdererAndWeapon(room)