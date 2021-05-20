  const class07Students = [];
  function addStudentToClass(studentName) {
  // You write code here
  if(class07Students.length<6 || studentName ==='Queen'){
      class07Students.push(studentName);
      console.log(studentName);
      return;
  }else if(class07Students.includes(studentName)){
      console.log `Student ${studentName} is already in the class`;
      return;
  }else{
      console.log('Canot add more students to the clas 07');
      return;
  }
}

 function getNumberOfStudents() {
  // You write code here
  console.log(`Class 07 have ${class07Students.length} students !`);
}
  addStudentToClass('Benjamin');
  addStudentToClass('Riya');
  addStudentToClass('Aarohi');
  addStudentToClass('Aarohi');
  //when i repeat the same name , it should not push it to the array
  //but its accepting, i tried to resolve
  //but couldnot
  addStudentToClass('Tudor');
  addStudentToClass('Arsha');
  addStudentToClass('Anca');
  addStudentToClass('Olivia');
  addStudentToClass('Austin');
  addStudentToClass('Queen');
  addStudentToClass('Queen');
  getNumberOfStudents();
  console.log(`The list of students name is : ${class07Students}`);
