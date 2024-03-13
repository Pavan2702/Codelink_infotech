function Formcheck() {
    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let add = document.getElementById("addr").value
    let bdate = document.getElementById("bdate").value
    let male = document.getElementById("male").value
    let female = document.getElementById("female").value
    let mno = document.getElementById("mobile").value;
    let mail = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let img = document.getElementById("img").value;
    if (fname == "" || fname == null) {
        document.getElementById("msg1").innerHTML = "Enter Your First Name";
        return false
    } else if (lname == "" || lname == null) {
        document.getElementById("msg3").innerHTML = "Enter Your Last Name";
        return false
    } else if (add == "" || add == null) {
        document.getElementById("msg4").innerHTML = "Enter Your Address";
        return false
    } else if (bdate == "" || bdate == null) {
        document.getElementById("msg5").innerHTML = "Enter Your Birth date";
        return false
    } else if (male == false && female == false) {
        document.getElementById("msg6").innerText = "Select Gender"
        return false
    } else if (mno == "" || mno == null) {
        document.getElementById("msg8").innerText = "Enter Mobile No"
        return false
    } else if (mail == "" || mail == null) {
        document.getElementById("msg9").innerText = "Enter Email id"
        return false
    } else if (pass == "" || pass == null) {
        document.getElementById("msg10").innerText = "Enter Password"
        return false
    } else if (img == "" || img == null) {
        document.getElementById("msg12").innerText = "Select image"
        return false
    }
    data()
    return false
}
function blurcheck(blank, msg) {
    if (blank.value == "" || blank.value == null) {
        document.getElementById(msg).innerHTML = "Please Fill this field";
        return false
    } else {
        document.getElementById(msg).innerHTML = "";
        return false
    }
}
function dropSelect(blnk, msg) {
    if (blnk.value == "-1") {
        document.getElementById(msg).innerText = "Select value"
        return false
    } else {
        document.getElementById(msg).innerText = ""
        return false
    }
}
function nameCheck(blnk, msg) {
    let regEx = /^[a-zA-Z]*$/
    if (!(regEx.test(blnk.value))) {
        document.getElementById(msg).innerText = "Invalid value";
        return false
    } else if (blnk.value.length < 2) {
        document.getElementById(msg).innerText = "Enter more then 2 characters";
        return false
    } else {
        document.getElementById(msg).innerText = "";
        return false
    }
}
// address length
function addressLength() {
    let adr = document.getElementById("addr").value;
    if (adr.length < 30) {
        document.getElementById("msg4").innerText = "enter minimum 30 character"
        return false;
    } else {
        document.getElementById("msg4").innerText = ""
        return false;
    }
}
function MobileValidation() {
    let mno = document.getElementById("mobile").value;
    let regex = /^[0-9]*$/
    let start = /^[6-9]/
    if (!(regex.test(mno)) || (!(start.test(mno)))) {
        document.getElementById("msg8").innerText = "Invalid Number";
        return false
    } else if (mno.length < 10) {
        document.getElementById("msg8").innerText = "Enter Proper number";
        return false
    }
    else {
        document.getElementById("msg8").innerText = "";
        return false
    }
}
// email validation
function emailEx() {
    let mail = document.getElementById("email").value;
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
    if (regEx.test(mail)) {
        document.getElementById("msg9").innerText = "";
        return false
    } else {
        document.getElementById("msg9").innerText = "Enter Proper Email";
        return false
    }
}

// password expression
function passwordEx() {
    let pass = document.getElementById("pass").value;
    let passex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    if (passex.test(pass)) {
        document.getElementById("msg10").innerText = "";
        return false
    } else {
        document.getElementById("msg10").innerText = "Enter Strong Password";
        return false
    }
}

// compare password
function passwordCompare() {
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    if (cpass != pass) {
        document.getElementById("msg11").innerText = "Password and Confirm password does not match";
        return false
    } else {
        document.getElementById("msg11").innerText = "";
        return false
    }
}

// show password
function showpass() {
    let pass = document.getElementById("pass");
    let icon = document.getElementById("icon1");
    if (pass.type == "password" && icon.classList.contains("fa-eye") == true) {
        pass.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash")
    } else {
        pass.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye")
    }
}
function showcpass() {
    let cpass = document.getElementById("cpass");
    let icon = document.getElementById("icon2");
    if (cpass.type == "password" && icon.classList.contains("fa-eye") == true) {
        cpass.type = "text"
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash")
    } else {
        cpass.type = "password"
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye")
    }
}
img.onchange = evt => {
    const [file] = img.files
    if (file) {
        pimg.src = URL.createObjectURL(file)
    }
}
function data() {
    let userData = {
        First_name: document.getElementById("fname").value,
        Last_name: document.getElementById("lname").value,
        Address: document.getElementById("addr").value,
        Birth_date: document.getElementById("bdate").value,
        Gender: document.getElementById("male").checked ? "Male" : document.getElementById("female").checked ? "Female" : "",
        Experince: document.getElementById("exp").value,
        Mobile_No: document.getElementById("code").value+" "+document.getElementById("mobile").value,
        Mail: document.getElementById("email").value,
        Pass: document.getElementById("pass").value,
        Image: document.getElementById("img").value,
        PrvImage: document.getElementById("pimg").src
    };
    // Loacal Implentation 
    localStorage.setItem('userData', JSON.stringify(userData));

    console.log(userData);

    document.getElementById("fname").value = ""
    document.getElementById("lname").value = ""
    document.getElementById("addr").value = ""
    document.getElementById("bdate").value = ""
    document.getElementById("male").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("exp").value = ""
    document.getElementById("mobile").value = ""
    document.getElementById("email").value = ""
    document.getElementById("pass").value = ""
    document.getElementById("cpass").value = ""
    document.getElementById("img").value = ""
    document.getElementById("pimg").src = ""
}