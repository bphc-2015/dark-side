function loginFun() {
    if (document.getElementById("user").value == "") {
        alert("Please enter a valid username");
        return false;
    } else if (document.getElementById("pass").value == "") {
        alert("Please enter a valid password:");
        return false;
    } else {
        confirm("Login Successful!");
        return true;
    }
}