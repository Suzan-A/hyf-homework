function getEventWeekDay (eventDay) {
    var weekDays= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date (); 
    var currentDay = today.getDay();
    return "The event is held on:" + weekDays[(currentDay + eventDay) % 7];
}
console.log(getEventWeekDay(4));