let students = [
  { id: 1, name: "Aju", marks: 45 },
  { id: 2, name: "Rahul", marks: 82 },
  { id: 3, name: "Neha", marks: 67 }
];

// 1. Display names
const studentNames = students.map(s => s.name);
console.log(studentNames);

// 2. Add new student
students = [...students, { id: 4, name: "Kiran", marks: 74 }];
console.log(students);

// 3. Remove failed students
students = students.filter(s => s.marks >= 50);
console.log(students);

// 4. Find student to edit
const rahul = students.find(s => s.id === 2);
console.log(rahul);

// 5. Update marks (IMPORTANT)
students = students.map(s =>
  s.id === 2 ? { ...s, marks: s.marks + 5 } : s
);
console.log(students);
