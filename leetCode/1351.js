

var countNegatives = function(grid) {
 const flattenedArray = [].concat(...grid);
 const total = flattenedArray.filter (negativo => negativo < 0);
 return total.length
}

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));
