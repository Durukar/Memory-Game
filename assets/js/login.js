const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login_form');
const deletar = document.querySelector('.delete_button')

const validateInput = ( { target}) => {
    let validation = target.value.length;
    // console.log(validation);
    if ( validation > 2) {
        button.removeAttribute('disabled');
        //console.log('Passou pelo if da validaçao.');
        return;
    }
    button.setAttribute('disabled', ''); // Simple validation for button
    //console.log('Saiu da validaçao e adicionou o "Disable"');
}

const handleSubmit = (event) => {
    event.preventDefault();
    let playerInput = input.value;
    localStorage.setItem('player', playerInput);
    // console.log(localStorage.player);
    window.location = './assets/pages/game.html';
}

const handleDelete = (event) => {
    event.preventDefault ();
    localStorage.removeItem('player', '*');
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
deletar.addEventListener('click', handleDelete);