const students = [ { id: 1, name: "Aju", marks: 45 }, { id: 2, name: "Rahul", marks: 82 }, { id: 3, name: "Neha", marks: 67 } ]; 
const findStudents = students.find(s => s.id == 3); 
console.log(findStudents);