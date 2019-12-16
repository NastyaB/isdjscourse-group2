function printNumbers () {
   for (let i = 1; i <= 100; i++) {
      const remOfDivision1 = i % 3;
      const remOfDivision2 = i % 5;
      let resultString = '';

      if (remOfDivision1 === 0) {
         resultString = 'Fizz';
      }
      if (remOfDivision2 === 0) {
         resultString = resultString + 'Bazz';
      }
      if (remOfDivision1 !== 0 && remOfDivision2 !== 0) {
         resultString = i;
      }
      console.log(resultString);
   }
}

function isPalindrom (data) {
   if (data) {
      data = data.toString();
      data = data.toUpperCase().replace(/\s/g, '');
      const len = data.length;

      for (let i = 1; i <= len / 2; i++) {
         if (data[i - 1] !== data[len - i]) {
            return false;
         }
      }
      return true;
   }
   return false;
}

printNumbers();
console.log('absba: ' + isPalindrom('absba'));
console.log('Я иду с мечем судия: ' + isPalindrom('Я иду с мечем судия'));
console.log('abSsBa: ' + isPalindrom('abSsBa'));
console.log('abS7Ba: ' + isPalindrom('abS7Ba'));
console.log('[1, 2, 3, 3, 2, 1]: ' + isPalindrom([1, 2, 3, 3, 2, 1]));
console.log('null: ' + isPalindrom(null));
console.log('undefined: ' + isPalindrom(undefined));
console.log(': ' + isPalindrom());
console.log('Aa : ' + isPalindrom('Aa '));
console.log('{}:' + isPalindrom({}));
