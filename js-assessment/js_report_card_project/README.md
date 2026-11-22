## Class Report Card 

**Author:** [BRUCE MUSAU
]

## What It Does
This program prints a report card for each student in a class and then shows a summary for the whole class[cite: 1, 3]. It is made for teachers and school staff to calculate marks, averages, grades, remarks, top subjects, and pass/fail results automatically[cite: 1, 3].

## How to Run
Open your terminal in the project folder and run:

node index.js

## Functions
- `calculateTotal(marks)`: Adds up all the marks for a student[cite: 3].
- `calculateAverage(total, subjectCount)`: Divides the total by the number of subjects to get the average[cite: 3].
- `getGrade(average)`: Returns `"A"`, `"B"`, `"C"`, `"D"`, or `"E"` based on the average[cite: 3].
- `getRemark(grade)`: Returns the remark for a grade using a `switch` statement[cite: 3].
- `findBestSubject(marks)`: Finds the subject with the highest mark[cite: 3].
- `printReportCard(student)`: Prints one student's report card[cite: 3].
- `generateClassSummary(list)`: Calculates and returns the class summary details[cite: 3].

## Output
Paste the output from `node index.js` here[cite: 6].

## What Was Tricky and How I Solved It
Write one or two short lines about anything you found tricky (such as getting `NaN` or making sure `subjectCount` works for any number of subjects) and how you fixed it.
