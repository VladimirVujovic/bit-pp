function numofAppearances(arr, x) {
    var num = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === x ) {
            num++
        }
    }
    return num
}

console.log(numofAppearances([1, 1, 1, 3, 4, 5, 7, 7, 8, 8, 8], 8))