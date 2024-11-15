function checkOverlap(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < intervals[i - 1][1]) {
        return "Intervals are overlapping";
      }
    }
    return "No intervals overlap";
  }
  
  // Examples
  console.log(checkOverlap([[1, 5], [6, 10], [12, 15], [3, 7]])); // Intervals are overlapping
  console.log(checkOverlap([[1, 5], [6, 10], [12, 15]]));         // No intervals overlap
  