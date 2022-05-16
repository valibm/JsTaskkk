let addButton = document.querySelector('.addButton')
let resetButton = document.querySelector('.resetButton')
let myInput = document.querySelector('.myInput')
let myUl = document.querySelector('.myUl')
let myForm = document.querySelector('.myForm')

myForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    let values = document.createElement('li');
    values.innerText = myInput.value;
    myUl.appendChild(values);
})