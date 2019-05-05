const MIN_PASS_LENGTH = 11;
function validation(form) {
    let error = false;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmation = document.getElementById("confirmation").value;
    let email_inv = document.getElementById("email_inv");
    let password_inv = document.getElementById("password_inv");
    let confirmation_inv = document.getElementById("confirmation_inv");
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == "" || email == " ") {
        error = "You didn't enter email";
        email_inv.innerHTML = `<span>${error}</span>`;
    }
    if (!pattern.test(email)) {
        error = "Your email isn't valid";
        email_inv.innerHTML = `<span>${error}</span>`;
    }
    if (password === "" || password === " ") {
        error = "You didn't enter password";
        password_inv.innerHTML = `<span>${error}</span>`;
        document.getElementById("password").style.border = "1px solid red";
    }
    if (password.length < MIN_PASS_LENGTH) {
        error = `Password is too short. You should use ${MIN_PASS_LENGTH} symbols`;
        password_inv.innerHTML = `<span>${error}</span>`;
        document.getElementById("password").style.border = "1px solid red";
    }
    if (password !== confirmation) {
        error = "Passwords don't match";
        confirmation_inv.innerHTML = `<span>${error}</span>`;
        document.getElementById("confirmation").style.border = "1px solid red";
    }
    
    if(!error) 
        document.location.reload(true);
}

// 12345678912
// ВАЛИДАЦИЯ НА ЛЕТУ
// onchange
function checkName1 (myEmail1){
    let email1_inv = document.getElementById("email1_inv");
    if (myEmail1.indexOf("@")=='-1'){
        email1_inv.innerHTML = `<span>Email must contain a character "@"</span>`;
    }
    else {
        while (email1_inv.firstChild){
            email1_inv.removeChild(email1_inv.firstChild);
        };
    }
}

// blur
const myEmail2 = document.getElementById('email2');
let email2_inv = document.getElementById("email2_inv");
myEmail2.onblur = function(){
    if (this.value.indexOf("@")=='-1'){
        email2_inv.innerHTML = `<span>Email must contain a character "@"</span>`;
        myEmail2.focus();
    }
    else {
        while (email2_inv.firstChild){
            email2_inv.removeChild(email2_inv.firstChild);
        };
    }
}

// keypress
const myEmail3 = document.getElementById('email3');

function Init () {
    myEmail3.addEventListener( 'keypress', checkName3, false );
};

Init ();

function checkName3(e) {
    let charCode = e.charCode;
    if (charCode != 0) {
        if (charCode != 64) {
            // e.preventDefault();
            email3_inv.innerHTML = `<span>Email must contain a character "@" (charCode: ${charCode})</span>`;
        }
        else { 
            while (email3_inv.firstChild){
                email3_inv.removeChild(email3_inv.firstChild)
            };
            myEmail3.removeEventListener( 'keypress', checkName3, false );
        };
    }; 
}