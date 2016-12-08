var numberOne = 23;
var numberTwo = 12;
var numberThree = 34;

if (numberOne > numberTwo) {
    if (numberOne > numberThree) {
        console.log("The Greatest number is : ", numberOne);
    } else {
        console.log("The Greatest number is : ", numberThree);
    }
}
else {
    if (numberTwo > numberThree) {
            console.log("The Greatest number is : ", numberTwo);
    } 
    else {
        console.log("The Greatest number is : ", numberThree);
    }
}