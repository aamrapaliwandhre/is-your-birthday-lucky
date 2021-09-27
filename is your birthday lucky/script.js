const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");
const displayMessage = document.querySelector("#output-container")

function calculateSum(dob) {
    let sum = 0;
    dob = dob.replaceAll("-","");
    for(let digit of dob){
        sum = sum + Number(digit);
    }
    return sum;
};
const compareValues = (sum,luckyNumber)=>{
    console.log(sum,luckyNumber)
    if(sum%luckyNumber===0){
        return showMessage('Yeah your birthday is lucky!!🥳 ');
    }
    showMessage('ohh not that lucky 😢 ');
    };

    const showMessage = (message) =>{
        displayMessage.innerText = message;
    };



    checkNumberButton.addEventListener('click', ()=> {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && dob){
    compareValues(sum,luckyNumber.value)}
    else{
    showMessage("Please enter both the fields 😤");
    }}
    );
