function findHighScoringStudents(students) {
    let arr = []

    for(let mark in students){
        console.log(mark);
        
        if(students[mark] >= 60 ){
            arr.push(mark)
        }
    }

    return arr
}

console.log(findHighScoringStudents({
  "Alice": 85,
  "Bob": 55,
  "Charlie": 92
}));
