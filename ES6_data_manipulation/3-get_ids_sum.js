export default function getStudentIdsSum(students) {
    return students.reduce((acc, students) => {
        return acc + students.id;
    }, 0);
}