var scores = '443 445 442 444 441\n\
6.00 6.00 3.20 5.20\n\
6.00 5.00 5.50 6.00\n\
5.50 3.60 4.00 5.70\n\
4.20 5.50 4.50 4.30';

var students = '441 Ivan Ivanov\n\
442 Petko Petkov\n\
443 Alex Alexandrov\n\
444 Todor Todorov\n\
445 Petar Petrov';

function calculateAvgScore(students, scores) {
    var studentLines = students.split('\n');
    /*
      studentLines:
      0:'441 Ivan Ivanov'
      1:'442 Petko Petkov'
      2:'443 Alex Alexandrov'
      3:'444 Todor Todorov'
      4:'445 Petar Petrov'
     */
    students = {}; // create an empty object to hold the data
  
    // iterate over each line and construct an object containing the name of 
    // each student and and avgScore property
    for (var i = 0; i < studentLines.length; i++) {
      var currentStudentLine = studentLines[i];
  
      // split the line (e.g. for the first element we will have //> ['441', 'Ivan', 'Ivanov'])
      var studentDataArray = currentStudentLine.split(' ');
      // get the first elem of the array which is the one that we will use for collecting our scores > '441'
      var fnNumber = studentDataArray[0];
      // set the fn number as a key so we can later calculate the avg score based on it
      students[fnNumber] = {
        avgScore: 0,
        name: studentDataArray[1] + ' ' + studentDataArray[2]
      };
    }
  
    // split the score lines
    var scoreLines = scores.split('\n');
    // get the fist line because it holds all the fn numbers (e.g. ['443', '445', '442', '444', '441'])
    var fnNumberArray = scoreLines[0].split(' ');
  
    // iterate over each line after the first (the first is holding the fn numbers) 
    // and construct so we can calculate the avg score
    for (var j = 1; j < scoreLines.length; j++) {
      // get the current line (e.g 6.00 6.00 3.20 5.20)
      var currentScoreLine = scoreLines[j];
  
      // split it so we can get the individual scores (e.g. [6.00, 6.00, 3.20, 5.20])
      var currentScoreLineArray = currentScoreLine.split(' ');
      // iterate over the fnNumbers (e.g. ['443', '445', '442', '444', '441']) so we can sum the scores and 
      // set the score inside the container object (students)
      for (var k = 0; k < fnNumberArray.length; k++) {
  
  
        var fnNumber = fnNumberArray[k];
        var currentStudent = students[fnNumber];
  
        // each fn number index represents the student's score column
        // thats why here we use k 
        var currentScore = currentScoreLineArray[k];
  
        // if we don't have a score use a 0
        if (!currentScore) { currentScore = 0; }
  
        currentStudent.avgScore = Number(currentStudent.avgScore) + Number(currentScore);
  
        // if we are at the end of the score liens array then we need to divide the score
        // on order to get the avg or we can use the commented out code bellow in order to divide
        if (j === scoreLines.length - 1) {
          currentStudent.avgScore =
            (Number(currentStudent.avgScore) / (scoreLines.length - 1)).toFixed(2);
        }
      }
    }
  
    // if we don't want to do the division on 70-73 we can use this code instead:
    // 
    // for (var g = 0; g < fnNumberArray.length; g++) {
    //   var fnNumber = fnNumberArray[g];
    //   students[fnNumber].avgScore =
    //     students[fnNumber].avgScore / (scoreLines.length - 1);
    //   students[fnNumber].avgScore = students[fnNumber].avgScore.toFixed(2);
    // }
  
    return students;
  }
  
  
  const data = calculateAvgScore(students, scores);
  console.log(data);