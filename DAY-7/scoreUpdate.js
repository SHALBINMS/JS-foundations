const students = [ { id: 1, name: "Aju", marks: 45 }, { id: 2, name: "Rahul", marks: 82 }, { id: 3, name: "Neha", marks: 67 } ];

const newStudents = students.map(student =>
  student.marks >= 60
    ? { ...student, marks: student.marks+5}
    : student
)

