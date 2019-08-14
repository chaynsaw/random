function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b);
  var buffer = [];
  var result = [];
  search(0, target);
  return result;

  function search(startIdx, target) {
    if (target === 0) return result.push(buffer.slice()); // if zero, you hit a valid result, push.
    if (target < 0) return; // if less than zero, you fucked up, go back. 
    if (startIdx === candidates.length) return; // if === candidates.length, you fucked up, go back. 
    buffer.push(candidates[startIdx]); // number goes into the buffer
    search(startIdx, target - candidates[startIdx]); // initiate search with number subtracted
    buffer.pop(); // if you reach here, you have too many numbers, go back. 
    search(startIdx + 1, target); // search with the next number. 
  }
}
var candidates = [2,3,6,7] 
var target = 7;
combinationSum2(candidates, target);
