const student = { id: 1, name: "Rahul", marks: 82, course: "B.Tech" }; 
const user = { id: 201, name: "Aju", role: "student", isLoggedIn: true }; const updatedStudent = { ...student, marks: student.marks + 5 };
const updatedRole = { ...user, role: "admin" };