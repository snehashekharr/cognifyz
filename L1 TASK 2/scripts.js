//creating a function to change color of the button when clicked//
function changeColor(){
    const button=document.getElementById('colorButton');
    const colors=['red','green','blue','yellow','purple'];
    const currentColor=button.style.backgroundColor;
    let newColor=colors[Math.floor(Math.random()*colors.length)];

    while(newColor==currentColor){
        newColor=colors[Math.floor(Math.random()*colors.length)]

}
button.style.backgroundColor=newColor;

}
function showAlert(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way
    const userInput = document.getElementById('input-field').value; // Gets the value of the input field
    alert('GREETINGS!!!: ' + userInput); // Displays an alert with the entered text
}
function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = num1 + num2;
    document.getElementById('result').innerText = `The sum is: ${sum}`;
  }