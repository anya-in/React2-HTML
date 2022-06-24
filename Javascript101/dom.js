//console.log(window);

//Single Element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('.container'));
//Multiple Element

//console.log(document.querySelectorAll('.item'));

//const items = document.querySelectorAll('.item');
//items.forEach((item) => console.log(item));

//const ul = document.querySelector('.items');
//ul.remove
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent='Hello';
//ul.children[1].innerText='Laly';
//ul.lastElementChild.innerHTML='<h1>HELLO<H1>';


//Events
// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        // Create new list item with user
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        //Clear Fields
        nameInput.value = '';
        emailInput.value = '';


    }
}