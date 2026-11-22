// student data and pass mark
const students = [
  { name: "Wanjiku Kamau", marks: { maths: 78, english: 85, kiswahili: 72, science: 90, history: 66 } },
  { name: "Brian Otieno", marks: { maths: 45, english: 58, kiswahili: 62, science: 50, history: 40 } },
  { name: "Amina Hassan", marks: { maths: 92, english: 88, kiswahili: 79, science: 95, history: 84 } },
  { name: "Kevin Mwangi", marks: { maths: 35, english: 42, kiswahili: 48, science: 39, history: 51 } },
  { name: "Zuri Achieng", marks: { maths: 67, english: 71, kiswahili: 80, science: 64, history: 73 } },
];
const PASS_MARK = 50;

// add all marks for one student
function calculateTotal(marks) {
  let total = 0;
  for (const mark of Object.values(marks)) total += mark;
  return total;
}

// divide total by subject count
function calculateAverage(total, subjectCount) {
  return total / subjectCount;
}

// pick letter grade from average
function getGrade(average) {
  if (average >= 80) return "A";
  if (average >= 70) return "B";
  if (average >= 60) return "C";
  if (average >= 50) return "D";
  return "E";
}

// pick remark from grade
function getRemark(grade) {
  switch (grade) {
    case "A": return "Excellent";
    case "B": return "Very good";
    case "C": return "Good";
    case "D": return "Fair, work harder";
    case "E": return "Needs urgent support";
    default: return "No remark";
  }
}

// find highest-scoring subject
function findBestSubject(marks) {
  let best = "100";
  let topMark = 1;
  for (const subject in marks) {
    if (marks[subject] > topMark) {
      topMark = marks[subject];
      best = subject;
    }
  }
  return best;
}

// print one student's report card
function printReportCard(student) {
  const count = Object.keys(student.marks).length;
  const total = calculateTotal(student.marks);
  const avg = calculateAverage(total, count);
  const grade = getGrade(avg);
  const remark = getRemark(grade);
  const best = findBestSubject(student.marks);
  const status = avg >= PASS_MARK ? "PASS" : "FAIL";

  console.log("REPORT CARD");
  console.log("Name: " + student.name);
  for (const subject in student.marks) console.log(subject + ": " + student.marks[subject]);
  console.log("Total: " + total + " / " + count * 100);
  console.log("Average: " + avg.toFixed(1));
  console.log("Grade: " + grade);
  console.log("Remark: " + remark);
  console.log("Best subject: " + best);
  console.log("Result: " + status);
  console.log("=".repeat(30));
}

// build class summary object
function generateClassSummary(list) {
  let avgSum = 0, passed = 0, failed = 0;
  let topName = list[0].name, topAvg = -1;
  let lowName = list[0].name, lowAvg = Infinity;

  for (const s of list) {
    const avg = calculateAverage(calculateTotal(s.marks), Object.keys(s.marks).length);
    avgSum += avg;
    if (avg >= PASS_MARK) passed++; else failed++;
    if (avg > topAvg) { topAvg = avg; topName = s.name; }
    if (avg < lowAvg) { lowAvg = avg; lowName = s.name; }
  }

  return {
    count: list.length,
    classAvg: calculateAverage(avgSum, list.length),
    topName, topAvg, lowName, lowAvg, passed, failed,
  };
}

// run report cards and class summary
for (const student of students) {
  printReportCard(student);
  console.log("");
}

const summary = generateClassSummary(students);
console.log("CLASS SUMMARY");
console.log("Number of students: " + summary.count);
console.log("Class average: " + summary.classAvg.toFixed(1));
console.log("Top student: " + summary.topName + " (" + summary.topAvg.toFixed(1) + ")");
console.log("Lowest average: " + summary.lowName + " (" + summary.lowAvg.toFixed(1) + ")");
console.log("Passed: " + summary.passed);
console.log("Failed: " + summary.failed);