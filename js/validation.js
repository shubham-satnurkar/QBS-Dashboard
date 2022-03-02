// Registration Form Validation
let fnameNode = document.getElementById("fname");
let lnameNode = document.getElementById("lname");
let emailNode = document.getElementById("email");
let passNode = document.getElementById("password");
let cpassNode = document.getElementById("cpass");
let mobileNode = document.getElementById("mobile");

let border1 = "1px solid #f00";
let border2 = "1px solid #0f0";

let errorNode1 = document.getElementById("error1");
let errorNode2 = document.getElementById("error2");
let errorNode3 = document.getElementById("error3");
let errorNode4 = document.getElementById("error4");
let errorNode5 = document.getElementById("error5");
let errorNode6 = document.getElementById("error6");

// First Name Input Field
function validate1(){
    errorNode1.textContent = "";
    let fname = fnameNode.value;
    let regExp = new RegExp("^[A-Za-z]*$");
    console.log(regExp.test(fname));
    if (fname== '') {
        errorNode1.textContent= "This field  is required";
        fnameNode.style.border=border1;
        return false;
    } else if(regExp.test(fname)== false){
        errorNode1.textContent ="Name sholud have only alphabates";
        fnameNode.style.border=border1;
        return false;
    }
    else{
        fnameNode.style.border=border2;
        return true;
    }
}

// Last Name Input Field
function validate2(){
    errorNode2.textContent = "";
    let lname = lnameNode.value;
    let regExp = new RegExp("^[A-Za-z]*$");
    console.log(regExp.test(lname));
    if (lname== '') {
        errorNode2.textContent= "This field  is required";
        lnameNode.style.border=border1;
        return false;
    }
    else if(regExp.test(lname)== false){
        errorNode2.textContent ="Name sholud have only alphabates";
        lnameNode.style.border=border1;
        return false;
    }
    else{
        lnameNode.style.border=border2;
        return true;
    }
}

// Email Id Input Field
function validate3(){
    errorNode3.textContent = "";
    let emailId = emailNode.value;
    let substr = emailId.substring(emailId.indexOf('@')+1);
    console.log(substr);
    if (emailId == "") {
        errorNode3.textContent = "This field is required";
        emailNode.style.border=border1;
        return false;
    } 
    else if (!emailId.includes('@') || substr == "") {
        errorNode3.textContent = "Please put a valid email id";
        emailNode.style.border=border1;
        return false;
    }
    else {
        emailNode.style.border= border2;
        return true;
    }
}

// Password Input Field
function validate4(){
    errorNode4.textContent = "";
    let password = passNode.value;
    let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    console.log(regExp.test(password));
    if(password == ""){
        errorNode4.textContent = "This field is required";
        passNode.style.border=border1;
        return false;
    }
    else if (regExp.test(password) == false) {
        errorNode4.textContent = "password contain atleast one capital, small letters, digit, symbols";
        passNode.style.border=border1;
        return false;
    }
    else if(password.length< 6 || password.length > 12){
        errorNode4.textContent= "Password should be atleast 6 and atmost 12 charachter long";
        passNode.style.border=border1;
        return false;
    }
    else{
        passNode.style.border=border2;
        return true;
    }
}

// Confirm Password Input Field
function validate5(){
    errorNode5.textContent = "";
    let cpassword = cpassNode.value;
    let password =  passNode.value;
    if (cpassword ==  "") {
        errorNode5.textContent = " This Field is Required";
        cpassNode.style.border=border1;
        return false;
    }
    else if(cpassword !== password){
        errorNode5.textContent="Password Does not matching";
        cpassNode.style.border=border1;
        return false;
    }
    else{
        cpassNode.style.border= border2;
        return true;
    }
}

// Show Password onclick eye button
let checkNode = document.getElementById("showp");
function show(){
    if(checkNode.checked){
        passNode.type="text";
        cpassNode.type="text";
    }
    else{
        passNode.type="password";
        cpassNode.type="password";
    }
}

// Mobile No. Validation
function validate6(){
    errorNode6.textContent = "";
    let mobile = mobileNode.value;
    let regExp = new RegExp("^[0-9]*$");
    console.log(regExp.test(mobile));
    if (mobile == "") {
        errorNode6.textContent="This field is required";
        mobileNode.style.border=border1;
        return false;
    }
    else if(regExp.test(mobile)== false){
        errorNode6.textContent = "Mobile number sholud contain digit only";
        mobileNode.style.border=border1;
        return false;
    }
    else if(mobile.length!=10){
        errorNode6.textContent = "please put valid mobile number";
        mobileNode.style.border = border1;
        return false;
    }
    else{
        mobileNode.style.border= border2;
        return true;
    }
}

// On Submit Validation 
function validateForm(){
    let ip1 = validate1();
    let ip2 = validate2();
    let ip3 = validate3();
    let ip4 = validate4();
    let ip5 = validate5();
    let ip6 = validate6();
    return ip1 && ip2 && ip3 && ip4 && ip5 && ip6;
}


// Login Page Validation
let logEmailNode = $("#loginEmail");
let logPassNode = $("#loginpass");

let error7Node = $("#error7");
let error8Node = $("#error8");
let logForm = $("#loginForm");

$(document).ready(function(){
    logEmailNode.blur( () => validate7());
    logPassNode.blur( () => validate8());
    logForm.submit( ()=> logValidateForm());


    // Login Email validation
    function validate7(){
        error7Node.text('')
        let logEmail = logEmailNode.val();
        let subStr = logEmail.substring(logEmail.indexOf('@')+1);
        console.log(subStr);
        if (logEmail == "") {
            error7Node.text('This field is Required');
            logEmailNode.css('border', border1);
            return false;
        } 
        else if(!logEmail.includes('@') || subStr == ""){
            error7Node.text('Email Id incorrect');
            logEmailNode.css('border', border1);
            return false;
        }
        else{
            logEmailNode.css('border', border2);
            return true;
        }
    }

    // Login Password validation
    function validate8(){
        error8Node.text('')
        let logPass = logPassNode.val();
        let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
        console.log(regExp.test(logPass));
        if(logPass == ""){
            error8Node.text('This field is Required');
            logPassNode.css('border', border1);
            return false;
        }
        else if(regExp.test(logPass)== false){
            error8Node.text('password contain small, capital letters, digit, symbols');
            logPassNode.css('border', border1);
            return false;
        }
        else if (logPass.length<6 || logPass>15) {
            error8Node.text('password contain atleast 6 and atmost 15 charachters');
            logPassNode.css('border', border2);
            return false;
        }
        else{
            logPassNode.css('border', border2);
            return true;
        }
    }

    // Login Proceed Validation
    function logValidateForm(){
        let ip7 = validate7();
        let ip8 = validate8();
        return ip7 && ip8;
    }



});

