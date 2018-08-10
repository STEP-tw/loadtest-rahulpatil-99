/*
  isEven
  This function takes a number and returns true or false
  based on whether the number is even or not
*/
const isEven = function(number){
  return number%2==0;
}

/*
  isOdd
  This function takes a number and returns true or false
  based on whether the number is odd or not
*/
const isOdd = function(number){
  return number%2!=0;
}

/*
  square
  This function takes a number and returns the mathematical square
  of that number
*/
const square = function(number){
  return number*number;
}

/*
  cube
  This function takes a number and returns the mathematical cube
  of that number
*/
const cube = function(number){
  return number*number*number;
}

/*
  gcd
  This function returns the greatest common divisor of any two numbers
*/


/*
  lcm
  This function returns the least common multiple of any two numbers
*/



/*
  simpleInterest
  This function returns the simple interest calculated when given
  principle, period and rate of interest(in that order)
*/


/*
  compoundInterest
  This function returns the simple interest calculated when given
  principle, period and rate of interest annually(in that order)
*/


/*
  greatestOf
  This function returns the greatest of three numbers
*/
const greater = function(num1,num2){
  if(num1>=num2) return num1;
  return num2;
}


const greatestOf = function(num1,num2,num3){
  let greaterOfTwo = greater(num1,num2);
  return greater(greaterOfTwo,num3);
}


/*
  averageOf
  This function returns the average of three numbers
*/


exports.isEven=isEven;
exports.isOdd=isOdd;
exports.square=square;
exports.cube=cube;
exports.gcd=gcd;
exports.lcm=lcm;
exports.simpleInterest=simpleInterest;
exports.compoundInterest=compoundInterest;
exports.greatestOf=greatestOf;
exports.averageOf=averageOf;
