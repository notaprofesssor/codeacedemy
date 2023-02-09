const input = "antebin hemamlariiii";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];
for (let i = 0; i < input.length; i++) {
  //console.log('input index is'+ i)
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    {
      //console.log("vowel index is " + j);
      if (input[i] === vowels[j]) {
        //console.log(input[i])
        resultArray.push(input[i]);
      }
    }
  }
}
//console.log(resultArray)
const resultString= resultArray.join(' ').toUpperCase();
console.log(resultString)
