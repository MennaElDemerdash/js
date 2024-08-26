const examScore = parseInt(prompt("Enter your exam score:"));
let grade;
if (isNaN(examScore)) {
    grade = "Not a Number";
} else if (examScore > 100 || examScore < 0) {
    grade = "Invalid Score";
} else if (examScore === 100) {
    grade = "Perfect Score";
} else if (examScore < 100 && examScore >= 85) {
    grade = "You got a A ";
} else if (examScore < 85 && examScore >= 75) {
    grade = "You got a B ";
} else if (examScore < 75 && examScore >= 65) {
    grade = "You got a C ";
} else if (examScore < 65 && examScore >= 50) {
    grade = "You got a D ";
} else if (examScore < 50 && examScore >= 0) {
    grade = "You got a F ";
}
console.log(`You got a ${grade}.`);
