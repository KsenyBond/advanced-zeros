module.exports = function getZerosCount(number, base) {

  var i = 2;
  var simpleNumbersFromBase = [],
      summArr = [],
      delimetr = 1;

  while (i < base) {
    if (base % i == 0) {
      simpleNumbersFromBase.push(i);
      base = base / i;
    } else {
      i++;
    }
  }
  simpleNumbersFromBase.push(i);

  simpleNumbersFromBase.forEach(function(value, index, arr){
      var valueDegree = 1,
        summ = 0;

    if (simpleNumbersFromBase.length >= (index+1) && arr[index +1] != value) {
      while((number/Math.pow(value, valueDegree)) > 1) {
        summ = summ + Math.floor(number/Math.pow(value, valueDegree))/delimetr;
        valueDegree++;

      }
      delimetr = 1;
    } else {
      delimetr++;
    }

    if (summ > 0) {
      summArr.push(Math.floor(summ));
    }
  });

  return Math.min.apply(null, summArr);
};