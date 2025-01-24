alert("This Is Grade Calculator App")

let studentname = prompt("Enter Your Name");
console.log(studentname);

let grandtotalmarks = 400
console.log(grandtotalmarks)

let subject1 = parseInt(prompt("Marks in English"))
if (subject1 > 0 && subject1 < 101) {
    console.log("English", subject1)
}
else {
    console.error("Marks are Between 0 to 100 for each subject");
    
}

let subject2 = parseInt(prompt("Marks in Maths"))
if (subject2 > 0 && subject2 < 101) {
    console.log("Maths", subject2)
}
else {
    alert("Invalid")
}

let subject3 = parseInt(prompt("Marks In Computer"))
if (subject3 > 0 && subject3 < 101) {
    console.log("Computer", subject3)
}
else {
    alert("Invalid")
}

let subject4 = parseInt(prompt("Marks in Islamiyat"))
if (subject4 > 0 && subject4 < 101) {
    console.log("Islamiyat", subject4)
}
else {
    alert("Invalid")
}


let totalmarks = subject1 + subject2 + subject3 + subject4;
console.log("Total marks", totalmarks)

let percentage = (totalmarks / 400) * 100;
console.log("Percentage", percentage)

// let grade;
// if (percentage >= 90) {
//     console.log("Grade", "A+");
//     alert(" Congratulations " + studentname + " you are pass in exams ")
// }
// else if (percentage >= 80 && percentage < 90) {
//     console.log("Grade", "A");
//     alert(" Congratulations " + studentname + " you are pass in exams ")

// }
// else if (percentage >= 70 && percentage < 80) {
//     console.log("Grade", "B")
//     alert(" Congratulations " + studentname + " you are pass in exams ")
// }
// else if (percentage >= 60 && percentage < 70) {
//     console.log("Grade", "C")
//     alert(" Congratulations " + studentname + " you are pass in exams ")

// }
// else if (percentage >= 50 && percentage < 60) {
//     console.log("Grade", "D")
//     alert(" Congratulations " + studentname + " you are pass in exams ")
// }
// else if (percentage < 50) {
//     console.log("F")
//     alert("Sorry You can't pass exams")
// }

let grade;
if (percentage >= 90) {
    grade = "A+";
    console.log("Grade", grade);
    alert(`Congratulations ${studentname}, you passed the exams`);
} else if (percentage >= 80 && percentage < 90) {
    grade = "A";
    console.log("Grade", grade);
    alert(`Congratulations ${studentname}, you passed the exams`);
} else if (percentage >= 70 && percentage < 80) {
    grade = "B";
    console.log("Grade", grade);
    alert(`Congratulations ${studentname}, you passed the exams`);
} else if (percentage >= 60 && percentage < 70) {
    grade = "C";
    console.log("Grade", grade);
    alert(`Congratulations ${studentname}, you passed the exams`);
} else if (percentage >= 50 && percentage < 60) {
    grade = "D";
    console.log("Grade", grade);
    alert(`Congratulations ${studentname}, you passed the exams`);
} else if (percentage < 50) {
    grade = "F";
    console.log("Grade", grade);
    alert("Sorry, you didn't pass the exams");
}

const finalresult = `Student Name: ${studentname}<br>Grand Total Marks: ${grandtotalmarks}<br>Total Marks: ${totalmarks}<br>Percentage: ${percentage}%<br>Grade: ${grade}`;
document.getElementById("result").innerHTML = finalresult;