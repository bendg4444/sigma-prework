//This years date
const currentDate = new Date();
//Preset birthdate's
const bday1 = new Date("01 Sep 1970");
const bday2 = new Date("30 Nov 1970");
// 00:00:00 GMT
const getAge = (current, bday) => {
  //differences between the year, month and day of month
  let yearDiff = current.getFullYear() - bday.getFullYear();
  const monthDiff = current.getMonth() - bday.getMonth();
  const dayDiff = current.getDay() - bday.getDay();

  //current month is behind birth month (less than a whole year)
  if (monthDiff < 0) {
    yearDiff--;
    //months are the same but current day is behind birthday (less than a whole year)
  } else if (monthDiff === 0 && dayDiff < 0) {
    yearDiff--;
  }
  return yearDiff;
};

//current at date of testing 06/10/22

//Test case 1: current date is later than birthdate
console.log(
  `The Age between ${bday1} and todays date ${currentDate} is ${getAge(
    currentDate,
    bday1
  )} years`
);

//Test case 2: current date is before the birthdate
console.log(
  `The Age between ${bday2} and todays date ${currentDate} is ${getAge(
    currentDate,
    bday2
  )} years`
);
