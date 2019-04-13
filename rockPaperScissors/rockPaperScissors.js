/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/
// I none
// O array f strings
// C 27 items total, 3 x 3 x 3 
// E None
var rockPaperScissors = function (
) {
    var outputArr = [];
    var firstRound = ['R', 'P', 'S'];
    var secondRound = ['R', 'P', 'S'];
    var thirdRound = ['R', 'P', 'S'];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                outputArr.push([firstRound[i] + secondRound[j] + thirdRound[k]]);
            }
        }
    }
    return outputArr;
  // TODO: your solution here
  // for any number of rounds
    // set round array to ['R', 'P', 'S']
    // Set helper function to add a round. 
    // run AddRound on a counter, until n is reached. 
    // var outputArr = [];
    // var roundResults = ['R', 'P', 'S']
    // // need to add increasing size strings
    // // need to add increasing size arrays
    // var round = [];
    // function makeStrings(n) {
    //     for (let i = 0; i < n; i++) {
    //         round.push(roundResults[i]);
    //     }
    // }
    // return outputArr; 
};


