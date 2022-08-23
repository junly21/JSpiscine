const month = {key:5};
let day = 13;

const timeWarp = (newMonth, newDay) => {
    month.key = newMonth;
    day = newDay;
    console.log (month.key, day);
}

timeWarp(5,10);
timeWarp(11,20);
