//get values from ui
//entry or controller function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //We need to validate our inputs
    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)){
        //call generated numbers
        let numbers = generateNumbers(startValue, endValue);
        //call display numbers
        displayNumbers(numbers);
    }else{
        alert("You must enter integers!! Please try again!");
    }

}

//generate numbers from start to end values
//logic function(s)
function generateNumbers(startValue, endValue){
    let genNumsArray = [];

    for (let i = startValue; i <= endValue; i++){
        genNumsArray.push(i);
    }

    return genNumsArray;
}

//display the numbers and mark the even numbers bold.
//display of view functions
function displayNumbers(numbers){
    let templateRows = "";

    for (let i = 0; i < numbers.length; i++){
        let number = numbers[i];

        if (number % 2 == 0){
            templateRows += `<tr><td><strong>${number}</strong></td></tr>`;
        }else{
           templateRows += `<tr><td>${number}</td></tr>`;
        }
    }

    document.getElementById("results").innerHTML = templateRows;

}
