// let somethingYouWannaKnow="the wrong answer";
// function excitedLog(value){
//   somethingYouWannaKnow="the answer to life";
//     return `${value} has ${somethingYouWannaKnow}`;
// }
// console.log(excitedLog('Marc'))
// console.log(somethingYouWannaKnow);
function map(collection, callback) {
 for(let i=0;i<collection.length;i++){
     console.log(collection[i])
 }
  };
  
  const suspects = [
    "Mr. Green",
    "Mrs. Peacock",
    "Prof. Plum",
    "Mrs. White",
    "Miss Scarlet",
    "Col. Mustard"
  ];
  const result = map(suspects, suspect => {
    return `Was it ${suspect}!?`;
  });
  console.log(result);