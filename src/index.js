exports.min = function min (array) {
 if (Array.isArray(array) && array.length>0) {
   return Math.min.apply(null, array);
 } else {
   return 0;
 }
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length>0) {
    return Math.max.apply(null, array);
  } else {
    return 0;
  }
 }

exports.avg = function avg (array) {
  var sum = 0;
  if (Array.isArray(array) && array.length>0) {
 var avgValue = array[0];
 for (var i=0;i<array.length;i++) {
   sum +=array[i];
   avgValue = sum/array.length;
  }
  return avgValue;
 } else {
   return 0;
 }
}