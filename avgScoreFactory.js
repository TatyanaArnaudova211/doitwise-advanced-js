var path = require('path');  //library for reading files

var studentsFilePath = path.join(__dirname, 'students.txt');
var scoresFilePath = path.join(__dirname, 'scores.txt');

var modify = require('./modify');

// use this function in order to read the necessary files
// e.g var students = readFileSync(studentsFilePath);
var readFileSync = require('./read-file-sync');
// use this function in order to calculate the avg scores 
// e.g calculateAvgScore(students, scores)
var calculateAvgScore = require('./calculate-avg-score');

function avgScoreFactory(studentsFilePath, scoresFilePath) {

};

var avgScores = avgScoreFactory(studentsFilePath, scoresFilePath);

console.log(avgScores.currentValue);
/*
This should be exactly the same output as the one from week-1.1
{
  '441': { avgScore: '0.00', name: 'Ivan Ivanov' },
  '442': { avgScore: '4.30', name: 'Petko Petkov' },
  '443': { avgScore: '5.42', name: 'Alex Alexandrov' },
  '444': { avgScore: '5.30', name: 'Todor Todorov' },
  '445': { avgScore: '5.03', name: 'Petar Petrov' }
}
*/

console.log(avgScores['442'].avgScore) // > 4.30;
console.log(avgScores['441'].avgScore) // > 0.00;

// update the scores file with new values for student 441
modify.updateScoresSync();

console.log(avgScores.currentValue);
/*
{
  '441': { avgScore: '5.03', name: 'Ivan Ivanov' },
  '442': { avgScore: '4.30', name: 'Petko Petkov' },
  '443': { avgScore: '5.42', name: 'Alex Alexandrov' },
  '444': { avgScore: '5.30', name: 'Todor Todorov' },
  '445': { avgScore: '5.03', name: 'Petar Petrov' }
}
*/
console.log(avgScores['442'].avgScore) // > 4.30;
console.log(avgScores['441'].avgScore) // > 5.03;

// revert the old scores (removes the scores fro student 441)
modify.revertScoresSync();

console.log(avgScores.currentValue);
/*
This should be exactly the same output as the one from week-1.1
{
  '441': { avgScore: '0.00', name: 'Ivan Ivanov' },
  '442': { avgScore: '4.30', name: 'Petko Petkov' },
  '443': { avgScore: '5.42', name: 'Alex Alexandrov' },
  '444': { avgScore: '5.30', name: 'Todor Todorov' },
  '445': { avgScore: '5.03', name: 'Petar Petrov' }
}
*/

for (var propName in avgScores) {
  console.log(propName);
}
/*
The output of the code above should be (without the currentValue property):
'441'
'442'
'443'
'444'
'445'
*/

avgScores.currentValue = 100; // make sure that this throws an error without