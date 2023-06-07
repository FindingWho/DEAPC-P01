function validate_form(){
    document.getElementsByClassName( "errorMessageEmail" )[0].style.visibility = "hidden";
    document.getElementsByClassName( "errorMessagePass" )[0].style.visibility = "hidden";
    document.getElementById("Email").style.borderColor = "#DADCE0";
    document.getElementById("Pass").style.borderColor = "#DADCE0";

    let email = document.getElementById("Email").value;
    let pass = document.getElementById("Pass").value;

    if(email==""){
        document.getElementsByClassName( "errorMessageEmail" )[0].style.visibility = "visible";
        document.getElementsByClassName( "errorMessageEmail" )[0].innerHTML = "Please fill out this field.";
        document.getElementById("Email").style.borderColor = "red";
    }

    if (pass==""){
        document.getElementsByClassName( "errorMessagePass" )[0].style.visibility = "visible";
        document.getElementsByClassName( "errorMessagePass" )[0].innerHTML = "Please fill out this field.";
        document.getElementById("Pass").style.borderColor = "red";
        
    } else if (email != "" && pass != "") { 
        if (email == "admin" && pass == "1234"){
            window.location.replace("index.php");
        }else{
            document.getElementsByClassName( "errorMessagePass" )[0].style.visibility = "visible";
            document.getElementsByClassName( "errorMessagePass" )[0].innerHTML = "Email or Password incorrect.";
            document.getElementById("Email").style.borderColor = "red";
            document.getElementById("Pass").style.borderColor = "red";
    }
    }
}