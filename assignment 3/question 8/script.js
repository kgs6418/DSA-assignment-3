function meeting(interval) {

   

    for (let i = 1; i < interval.length; i++) {
      if (interval[i][0] < interval[i - 1][1]) {
       
        return false;
      }
    }
  

    return true;
}
const interval = [[0,30],[5,10],[15,20]];
console.log(meeting(interval));