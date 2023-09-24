/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const arrays = [];
    let subArr = [];
    for (var i = 0; i < arr.length; i++) {
        subArr.push(arr[i]);
        if (subArr.length == size) {
            arrays.push(subArr);
            subArr = [];
        }
    }

    if (subArr.length > 0) {
        arrays.push(subArr);
    }

    return arrays;
};
