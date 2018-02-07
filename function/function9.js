function sumofodds(arr) {
    var sum = 0

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i]
        }
    }

    return sum

    }
    testArr = [ 3, 4, 77, ]

    console.log(sumofodds(testArr))
    