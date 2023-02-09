const getSleepHours = (day) => {
  if (day === "monday") {
    return 5;
  } else if (day === "tuesday") {
    return 4;
  } else if (day === "wednesday") {
    return 4;
  } else if (day === "thursday") {
    return 4;
  } else if (day === "friday") {
    return 10;
  } else if (day === "saturday") {
    return 8;
  } else if (day === "sunday") {
    return 8;
  }
};
const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

console.log(getSleepHours("monday"));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return (idealHours * 7);
};
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("you have got the perfect ammonut of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "you have got " +
        (actualSleepHours-idealSleepHours) +
        " more hours sleep this week."
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "you should get  some rest because you have slept " +
        (idealSleepHours - actualSleepHours) +
        " hours less than you should have this week"
    );
  } else {
    console.log("error smthg went wrong");
  }
};

calculateSleepDebt();
