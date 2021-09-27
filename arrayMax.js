let marks = [45, 65, 56, 77, 87, 68, 90, 23, 45];
let max = marks[0];

for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log("Highest value is:", max);