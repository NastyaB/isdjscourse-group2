function printNumbers () {
   for (let i = 1; i <= 100; i++) {
      const remOfDevision1 = i % 3;
      const remOfDevision2 = i % 5;
      let resultString = '';

      if (remOfDevision1 === 0) {
         resultString = 'Fizz';
      }
      if (remOfDevision2 === 0) {
         resultString = resultString + 'Bazz';
      }
      if (remOfDevision1 !== 0 && remOfDevision2 !== 0) {
         resultString = i;
      }
      console.log(resultString);
   }
}

function isPolindrom (word) {
   word = word.toUpperCase().replace(/\s/g, '');
   const len = word.length;
   for (let i = 1; i <= len / 2; i++) {
      if (word[i - 1] !== word[len - i]) {
         return false;
      }
   }
   return true;
}

printNumbers();
console.log('absba: ' + isPolindrom('absba'));
console.log('Я иду с мечем судия: ' + isPolindrom('Я иду с мечем судия'));
console.log('abSsBa: ' + isPolindrom('abSsBa'));
console.log('abS7Ba: ' + isPolindrom('abS7Ba'));
