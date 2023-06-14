function validate_email(email) {  
    let atposition=email.indexOf("@");  
    let dotposition=email.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        document.getElementsByClassName( "errorMessageEmail" )[0].innerHTML = "Please enter a valid e-mail address";  
    return false;  
    }  
}  

function validate_form(){
    document.getElementsByClassName( "errorMessageName" )[0].style.visibility = "hidden";
    document.getElementsByClassName( "errorMessageEmail" )[0].style.visibility = "hidden";
    document.getElementsByClassName( "errorMessagePass" )[0].style.visibility = "hidden";
    
    document.getElementById("Email").style.borderColor = "#DADCE0";
    document.getElementById("Name").style.borderColor = "#DADCE0";
    document.getElementById("Pass").style.borderColor = "#DADCE0";

    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let pass = document.getElementById("Pass").value;

    let numericPattern = /\d/;
    let specialCharPattern = /["!@#£$§%^&*(),.?;:{}€'=»«+\\\-|<>]/;


    if(name==""){
        document.getElementsByClassName( "errorMessageName" )[0].style.visibility = "visible";
        document.getElementsByClassName( "errorMessageName" )[0].innerHTML = "Please fill out this field.";
        document.getElementById("Name").style.borderColor = "red";
    } else if (numericPattern.test(name) || specialCharPattern.test(name)) {
        document.getElementsByClassName( "errorMessageName" )[0].style.visibility = "visible";
        document.getElementsByClassName( "errorMessageName" )[0].innerHTML = "The name can't contain numbers nether special characters.";
        document.getElementById("Name").style.borderColor = "red";
    }

    if(email==""){
        document.getElementsByClassName( "errorMessageEmail" )[0].style.visibility = "visible";
        document.getElementsByClassName( "errorMessageEmail" )[0].innerHTML = "Please fill out this field.";
        document.getElementById("Email").style.borderColor = "red";
    } else if (!validate_email(email)){
        document.getElementsByClassName( "errorMessageEmail" )[0].style.visibility = "visible";
        document.getElementById("Email").style.borderColor = "red";
    }

    if (pass==""){
        document.getElementsByClassName( "errorMessagePass" )[0].style.visibility = "visible";
        document.getElementsByClassName( "errorMessagePass" )[0].innerHTML = "Please fill out this field.";
        document.getElementById("Pass").style.borderColor = "red";
    } else if(email != "admin" || pass !="1234"){
        document.getElementsByClassName( "errorMessagePass" )[0].style.visibility = "visible";
        document.getElementsByClassName( "errorMessagePass" )[0].innerHTML = "Email or Password incorrect!";
        document.getElementById("Pass").style.borderColor = "red";
    } else{
        window.location.replace("index.php");
    }
}