export function convertToRomanNumerals(num) {
 //console.log(`${num}` + "V");

 // the main roman numerals 
 const romanConstants = {1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M"};

 if (num in romanConstants){
  console.log(`${num} is in object and the numeral is ${romanConstants[num]}`);
  return romanConstants[num];
 }



  //return "V";
   
}

