let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly=false;
const age = 15;

if(age > 18 && registeredEarly){
  raceNumber += 1000;
  console.log(`race will be start 9.30, your race number is: ${raceNumber}.`);
}else if (!registeredEarly && age>18){
  console.log(`race will be start 11.00, your  race number is ${raceNumber}.`);
  }else if(age < 18 ){
    console.log(`race will be start 12.30, yor race number is ${raceNumber}`);
  } else {console.log(`please go to registration desk.`)}
