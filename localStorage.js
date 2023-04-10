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

}