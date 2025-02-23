/* exported getStudentNames */
function getStudentNames(students: Record<string, string>[]): string[] {
  return students.map((student) => student.name);
}
