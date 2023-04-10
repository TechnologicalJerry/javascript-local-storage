function store() {

    let userName = document.getElementById('userName');
    let password = document.getElementById('password');
    let upperCase = /[A-Z]/g;
    let lowerCase = /[a-z]/g;
    let numbers = /[0-9]/g;

    if (userName.value.length == 0) {
        alert('Please enter UserName or E-Mail Address');
    } else if (password.value.length == 0) {
        alert('Please enter in Password');
    }
}