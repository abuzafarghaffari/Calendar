
const monthName = document.getElementById("monthName");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dates = document.querySelector(".grid-date");

var NumberOfDate = document.querySelectorAll(".grid-date > div");
const Months = [
    one = {
        month: "January",
        days: 31,
    },
    two = {
        month: "February",
        days: 28,
    },
    three = {
        month: "March",
        days: 31,
    },
    four = {
        month: "April",
        days: 30,
    },
    five = {
        month: "May",
        days: 31,
    },
    six = {
        month: "June",
        days: 30,
    },
    seven = {
        month: "July",
        days: 31,
    },
    eight = {
        month: "August",
        days: 31,
    },
    nine = {
        month: "September",
        days: 30,
    },
    ten = {
        month: "October",
        days: 31,
    },
    eleven = {
        month: "November",
        days: 30,
    },
    twelve = {
        month: "December",
        days: 31,
    },
];
let i = 0;
const daysContainer = document.getElementById("days");
const days = ["sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//const months = ["January", "February", "March", "April ", "May", "June", "July", "August", "September", "October", "November", "December"];

//const numberOfDateInMonths = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

days.forEach((day) => {
    const Day = document.createElement("div");
    Day.innerHTML = day;
    daysContainer.appendChild(Day);
})

MonthDaysContoller(i);
DateCreater(i);

function MonthDaysContoller(i){

   
    monthName.innerHTML= Months[i].month;
  //  i ++;
  //  console.log(i);

    if(i >12) return;
}
var date = Months[i].days;

function DateCreater(i){
  //  var date = Months[i].days;

for(let f =1 ; f < date; f++){
    var NumberOfDate = document.createElement("div");
    NumberOfDate.innerHTML = f;
    dates.appendChild(NumberOfDate);
} 

    
    console.log(date);
};

function  DeleteDate(date){
    for(let f =1 ; f < date; f++){
        NumberOfDate.remove(); 
    } 

}

next.addEventListener("click",()=>{
    i ++;
    MonthDaysContoller(i);
    DateCreater(i)
    DeleteDate(date);
});
prev.addEventListener("click",()=>{
    
    i --;
    MonthDaysContoller(i);
    DateCreater(i)
});
