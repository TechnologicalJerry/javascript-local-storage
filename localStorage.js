function userSignUp() {

    let userName = document.getElementById('SignUpUserName');
    let password = document.getElementById('SignUpPassword');

    if (userName.value.length == 0) {
        alert('Please enter UserName or E-Mail Address');
    } else if (password.value.length == 0) {
        alert('Please enter in Password');
    } else if (userName.value.length == 0 && password.value.length == 0) {
        alert('Please enter UserName and Password');
    } else if (password.value.length > 12) {
        alert('Max 12 please');
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