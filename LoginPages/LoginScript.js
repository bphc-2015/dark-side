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
var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
} else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}