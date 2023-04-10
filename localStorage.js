function userSignUp() {

    let userName = document.getElementById('userName');
    let password = document.getElementById('password');
    // let upperCase = /[A-Z]/g;
    // let lowerCase = /[a-z]/g;
    // let numbers = /[0-9]/g;

    if (userName.value.length == 0) {
        alert('Please enter UserName or E-Mail Address');
    } else if (password.value.length == 0) {
        alert('Please enter in Password');
    } else if (userName.value.length == 0 && password.value.length == 0) {
        alert('Please enter UserName and Password');
    } else {
        localStorage.setItem('password', userName.value);
        localStorage.setItem('password', password.value);
        alert('Your account has been created');
    }
}

function userLogin() {
    let locallyStoresUserName = localStorage.getItem('userName');
    let locallyStoresPassword = localStorage.getItem('password');

    let loginUserName = document.getElementById('userName');
    let loginPassword = document.getElementById('password');

    if (locallyStoresUserName.value == loginUserName && locallyStoresPassword == loginPassword) {
        alert('User Login Successfully');
    } else {
        alert('User Login Un-Successfully');
    }

}