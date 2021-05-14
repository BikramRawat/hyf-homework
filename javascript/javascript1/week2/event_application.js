function getEventWeekday(futureEventdayNumber){
    const today= new Date();
    const daysOfWeek=['MOnday','Tuesday','Wednsday','Thursday','Friday','Saturday','Sunday'];
    const dayOfEvent=((today.getDay() + futureEventdayNumber)%7)-1; //since array index starts from 0 
    console.log(`Today is : ${today}\n \nThe number for the day is: ${today.getDay()}`);
    console.log(`The number for the event day in future is: ${futureEventdayNumber}`);
    console.log(`Therefore:the event will be held on : ${daysOfWeek[dayOfEvent]} `);
}
getEventWeekday(13);
getEventWeekday(7);
getEventWeekday(15);
