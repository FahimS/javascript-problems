function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (meter < 0) {
        return "Negative value is not acceptable in meter or kilometer";
    }
    else{
        return meter;
    }
}
var result = kilometerToMeter(-5);
console.log(result);