function validate_email(email) {  
    let atposition=email.indexOf("@");  
    let dotposition=email.lastIndexOf(".");  
    if (email==""){
        document.getElementsByClassName( "errorMessageEmail" )[0].innerHTML = "Please fill out this field.";
        return false;
    } else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
        document.getElementsByClassName( "errorMessageEmail" )[0].innerHTML = "Please enter a valid e-mail address";  
        return false;  
    } 
    return true;
}  

function validate_form(){
    
    document.getElementsByClassName( "errorMessageEmail" )[0].style.visibility = "hidden";
    document.getElementsByClassName( "errorMessagePass" )[0].style.visibility = "hidden";
    document.getElementById("Email").style.borderColor = "#DADCE0";
    document.getElementById("Pass").style.borderColor = "#DADCE0";

    let email = document.getElementById("Email").value;
    let pass = document.getElementById("Pass").value;

    if (!validate_email(email)){
        document.getElementsByClassName( "errorMessageEmail" )[0].style.visibility = "visible";
        document.getElementById("Email").style.borderColor = "red";
    }

    if (pass==""){
        document.getElementsByClassName( "errorMessagePass" )[0].style.visibility = "visible";
        document.getElementsByClassName( "errorMessagePass" )[0].innerHTML = "Please fill out this field.";
        document.getElementById("Pass").style.borderColor = "red";
        return false;
    }
    
    return true;
}

function no_user(){
    document.getElementsByClassName( "errorMessagePass" )[0].style.visibility = "visible";
    document.getElementsByClassName( "errorMessagePass" )[0].innerHTML = "Email or Password incorrect.";
    document.getElementById("Email").style.borderColor = "red";
    document.getElementById("Pass").style.borderColor = "red";
}
