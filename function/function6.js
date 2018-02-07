function drawlines(num1, num2, num3) {
i1 = ""
i2 = ""
i3 = ""

for (var a = 0; a < num1; a++) {
    i1 += "*"
}

for (var b = 0; b < num1; b++) {
    i2 += "*"
}

for (var c = 0; c < num1; c++) {
    i3 += "*"
}

console.log(i1)
console.log(i2)
console.log(i3)

return ""
}

first = 4
second = 1
fifth = 5

console.log(drawlines(first,second,fifth))

