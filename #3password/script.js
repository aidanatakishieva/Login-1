function Function() {
    let oldpasswprd = document.getElementById('oldPassword').value;
    let newpassword = document.getElementById('newPassword').value;
    let confirmpassword = document.getElementById('confirmPassword').value;
    if (oldPassword == "" || newpassword == "" || confirmpassword == "") {
        alert('Please fill all the details');
    }
    else if (oldpassword == newpassword) {
        alert("Old password and New Password cannot be same");
    
    }
    else if (newpassword != confirmpassword) {
        alert("password mismatch");
    }
}
