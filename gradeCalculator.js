//const grade = grade('enter student grade'); //prompts the user to enter grades
function studentGrade(grade) {
    if (grade >79 && grade <= 100) {
        return 'A'; //if it is true , Prints 'A'
    }
    else if (grade >= 60 && grade <= 79) {
        return ('B');//if it is true , Prints 'B'
    }
    else if (grade >= 49 && grade <=59) {
        return ('C'); //if it is true , Prints 'C'
    }
    else if (grade >= 40 && grade < 49) {
        return ('D');//if it is true it prints 'D'
    }
    else { //if all the if statements above are false  and grade does not range above 
        return ('E'); // prints this to the console
    }}

console.log(studentGrade(100));