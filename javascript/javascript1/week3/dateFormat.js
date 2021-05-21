//to print date on mm-dd-yy format
let date = new Date(2010, 7, 5);
let date1 = 
let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
console.log(`${day}-${month}-${year}`);