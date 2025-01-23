alert("This Is Grade Calculator App")

let studentname = prompt("Enter Your Name");
console.log(studentname);

let subject1 = parseInt(prompt("Marks in English"))
if (subject1 > 0 && subject1 < 101) {
    console.log("English", subject1)
}
else {
    alert("Invalid")
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


if (percentage >= 90) {
    console.log("Grade", "A+");
    alert(" Congratulations " + studentname + " you are pass in exams ")
}
else if (percentage >= 80 && percentage < 90) {
    console.log("Grade", "A");
    alert(" Congratulations " + studentname + " you are pass in exams ")

}
else if (percentage >= 70 && percentage < 80) {
    console.log("Grade", "B")
    alert(" Congratulations " + studentname + " you are pass in exams ")
}
else if (percentage >= 60 && percentage < 70) {
    console.log("Grade", "C")
    alert(" Congratulations " + studentname + " you are pass in exams ")

}
else if (percentage >= 50 && percentage < 60) {
    console.log("Grade", "D")
    alert(" Congratulations " + studentname + " you are pass in exams ")
}
else if (percentage < 50) {
    console.log("F")
    alert("Sorry You can't pass exams")
}



let finalresult = [" your result: ", " Your Name " , studentname , " Marks Obtained " , totalmarks , " Percentage " ,  percentage,]
alert(finalresult)
