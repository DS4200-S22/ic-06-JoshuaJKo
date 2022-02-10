/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

let numClicked = 0;

//Starter code for Button 1 click
// You will need to call this function when Button 1 is clicked
// You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked() {
    document.getElementById("random_num").innerHTML = Math.floor(Math.random() * (10000 - 1 + 1) + 1);
    console.log('button1Clicked runs')
}

function changeColor(){

    let shape = document.getElementById("shape");

    if (numClicked%2==0){
        shape.style.backgroundColor = "green"
    }
    else{
        shape.style.backgroundColor = "blue"
    }
    numClicked += 1;
    console.log(numClicked)
}
