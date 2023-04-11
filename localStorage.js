function userSignUp() {

    let userName = document.getElementById('SignUpUserName');
    let password = document.getElementById('SignUpPassword');

    let upperCase = /[A-Z]/g;
    let lowerCase = /[a-z]/g;
    let numbers = /[0-9]/g;

    if (userName.value.length == 0) {
        alert('Please enter UserName or E-Mail Address');
    } else if (password.value.length == 0) {
        alert('Please enter in Password');
    } else if (userName.value.length == 0 && password.value.length == 0) {
        alert('Please enter UserName and Password');
    } else if (password.value.length > 12) {
        alert('Max values 12 please');
    } else if (!password.value.match(upperCase)) {
        alert('Please add 1 Uppercase letter');
    } else if (!password.value.match(lowerCase)) {
        alert('Please add 1 lovercase letter');

    } else {
        localStorage.setItem('password', userName.value);
        localStorage.setItem('password', password.value);
        alert('Your account has been created');
    }
}

function userLogin() {
    let locallyStoresUserName = localStorage.getItem('SignUpUserName');
    let locallyStoresPassword = localStorage.getItem('SignUpPassword');

    let loginUserName = document.getElementById('loginUserName');
    let loginPassword = document.getElementById('loginUserPassword');

    if (locallyStoresUserName.value == loginUserName && locallyStoresPassword == loginPassword) {
        alert('User Login Successfully');
    } else {
        alert('User Login Un-Successfully');
    }

}