let business = 450;
let minister = 350;
let sochib = 550;

if (business > minister) {
    if (business > sochib) {
        console.log("businessman is bigger");
    }
    else {
        console.log("sochib is bigger");
    }
}
else {
    if (minister > sochib) {
        console.log("misinter is bigger");
    }
    else {
        console.log("sochib is bigger");
    }
}


//.......................

var max = Math.max(business, minister, sochib);
console.log(max);