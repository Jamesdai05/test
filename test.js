//check count of vowels
// const checkVowels = (str)=>{
//   const vowels ="aeiouAEIUO";
//   let  count =0;

//   for(let i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//       count ++;
//     }
//   }
//   return count;
// }

// //test case
// const str1 = "Hello world"
// console.log(checkVowels(str1));
// console.log(checkVowels("I am a donkey"));

//below is another method
const checkCountVowels = (str) => {
  str = str.toLowerCase();
  const vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      count++;
    } else if (str[i] === "i") {
      count++;
    } else if (str[i] === "o") {
      count++;
    } else if (str[i] === "e") {
      count++;
    } else if (str[i] === "u") {
      count++;
    }
  }
  return count;
};

//test case
const str2 = "Hello world";
console.log(checkCountVowels(str2));
console.log(checkCountVowels("I am a donkey"));
