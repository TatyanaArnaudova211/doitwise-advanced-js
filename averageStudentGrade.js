var scores =
'443 445 442 444\n\
6.00 6.00 3.20 5.20\n\
6.00 5.00 5.50 6.00\n\
5.50 3.60 4.00 5.70\n\
4.20 5.50 4.50 4.30';

var students = 
'442 Petko Petkov\n\
443 Alex Alexandrov\n\
444 Todor Todorov\n\
445 Petar Petrov';


function averageScore(){
    var arrGrades = [];
    var studentSplit = students.split('\n');
    var scoreSplit = scores.split('\n');
    var myMap = new Map();

    for(var k = 0; k < studentSplit.length; k++){
        var fullStudentSplit = studentSplit[k].split(' ');
        myMap.set(fullStudentSplit[0], {name: fullStudentSplit[1] + " " + fullStudentSplit[2], average: 0} );

    }
   
    for (var i = 0; i < scoreSplit.length; i++){
        //console.log(scoreSplit[i] + ',');
    
        var fullGradeSplit = scoreSplit[i].split(' ');
        //console.log(fullGradeSplit);
            arrGrades.push(fullGradeSplit);
    }

    for (var j=0; j < arrGrades[0].length; j++){
        var fID = arrGrades[0][j];
      //  console.log('Student grade id ' + fID);
        var studentTotalGrade = 0;
        for(var i = 1; i < arrGrades.length; i++){
            var grade = arrGrades[i][j];
            studentTotalGrade += (Number(grade) / (arrGrades.length-1));
        }
        myMap.get(fID).average = studentTotalGrade.toFixed(2);
    }

    console.log (myMap);
}

averageScore();
