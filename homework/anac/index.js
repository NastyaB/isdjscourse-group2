exports.createSeaBattle = function () {
   console.log('Welcome to buttleships game.\nAll the ships were arranged randomly.\nTake your shot.');

   // Create buttle field
   const ships = [];
   for (let i = 0; i < 10; i++) {
      ships[i] = [];
      for (let j = 0; j < 10; j++) {
         ships[i][j] = -1;
      }
   }

   // function checks if given field is free
   function isFieldFree (x1, x2, y1, y2) {
      x1 = x1 > 0 ? x1 - 1 : 0;
      x2 = (x2 === 9) ? 9 : x2 + 1;
      y1 = y1 > 0 ? y1 - 1 : 0;
      y2 = (y2 === 9) ? 9 : y2 + 1;

      for (let i = x1; i <= x2; i++) {
         for (let j = y1; j <= y2; j++) {
            if (ships[i][j] > 0) {
               return false;
            }
         }
      }
      return true;
   }

   // function randomly gets start coordinates abs build ships in row
   function buildShipInRow (deck) {
      let startX = getRandomInt(0, 9 - deck);
      let startY = getRandomInt(0, 9);
      while (!isFieldFree(startX, (startX + deck - 1), startY, startY)) {
         startX = getRandomInt(0, 9 - deck);
         startY = getRandomInt(0, 9);
      }

      for (let i = startX; i <= startX + deck - 1; i++) {
         ships[i][startY] = deck;
      }
      return true;
   }

   // function randomly gets start coordinates abs build ships in line
   function buildShipInLine (deck) {
      let startI = getRandomInt(0, 9);
      let startJ = getRandomInt(0, 9 - deck);
      while (!isFieldFree(startI, startI, startJ, startJ + deck - 1)) {
         startI = getRandomInt(0, 9);
         startJ = getRandomInt(0, 9 - deck);
      }

      for (let j = startJ; j <= startJ + deck - 1; j++) {
         ships[startI][j] = deck;
      }
      return true;
   }

   // function randomly determines if next ship is builded in row or line and calls appropriate function
   function buildShips (deck, count) {
      while (count > 0) {
         const isShipInLine = getRandomInt(0, 1);
         if (isShipInLine === 1 ? buildShipInLine(deck) : buildShipInRow(deck)) {
            count--;
         }
      }
   }

   // function gets random number
   function getRandomInt (min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
   }

   function printPlaingField (ships) {
      console.log('   0 1 2 3 4 5 6 7 8 9');
      let str = '';
      for (let i = 0; i < 10; i++) {
         str = i + '|';
         for (let j = 0; j < 10; j++) {
            str = str + (ships[i][j] >= 0 ? ' ' + ships[i][j] : ships[i][j]);
         }
         console.log(str + '|');
      }
   }

   buildShips(4, 1);
   buildShips(3, 2);
   buildShips(2, 3);
   buildShips(1, 4);
   let countOfShips = 10;
   printPlaingField(ships);

   return function seaBattle (y) {
      return function checkCoordinates (x) {
      // -1 мимо, 0 ранил, 1 убил
      // const x = prompt('Введите X: ');
         try {
            if (countOfShips === 0) {
               throw new Error('All ships are sunked');
            }

            if (typeof (x) !== 'number' || typeof (y) !== 'number' || x > 9 || x < 0 || y > 9 || y < 0) {
               throw new Error('Coordinated are incorrect');
            }

            if (ships[x][y] === -1) {
               ships[x][y] = -2;
               return -1;
            }
            if (ships[x][y] <= 0) {
               throw new Error('was already shot');
            }

            const ship = ships[x][y];
            ships[x][y] = 0;
            let lenOfShip = 1;
            let i = 1;
            if (lenOfShip < ship) {
               while ((x - i >= 0) && ships[x - i][y] === 0) {
                  lenOfShip++;
                  i++;
               }
            }

            i = 1;
            if (lenOfShip < ship) {
               while ((x + i <= 9) && ships[x + i][y] === 0) {
                  lenOfShip++;
                  i++;
               }
            }

            i = 1;
            if (lenOfShip < ship) {
               while ((y - i >= 0) && ships[x][y - i] === 0) {
                  lenOfShip++;
                  i++;
               }
            }

            i = 1;
            if (lenOfShip < ship) {
               while ((y + i <= 9) && ships[x][y + i] === 0) {
                  lenOfShip++;
                  i++;
               }
            }

            if (lenOfShip === ship) {
               countOfShips--;
               return 1;
            }

            return 0;
         } catch (err) {
            console.log(err);
         } finally {
            printPlaingField(ships);
         }
      };
   };
};
