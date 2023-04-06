
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

 function superbowlWin(array) {
       if (array.result === "W"){
            return array
       } else {
          console.log(undefined)
       }
   }

console.log(record.find(superbowlWin))


