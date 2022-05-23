/**
 *  var = Serve Escopo Local
 *  let = Serve Escopo Local
 *  const = Serve Escopo,
 *  mas, não muda o valor.
 */

let username = document.getElementById("username")
let email = document.getElementById("email")
let subject = document.getElementById("subject")
let message = document.getElementById("message")
let map = document.querySelector("#map")

let usernameOk = false
let emailOk = false
let subjectOk = false
let messageOk = false



username.style.width = "100%"
email.style.width = "100%"
subject.style.width = "100%"
message.style.width = "100%"


function nameValidation(){
    let txtName = document.querySelector("#txtName")
    if(username.value.length < 3){
        txtName.innerHTML = "Username is invalid"
        txtName.style.color = "red"
    }else{
        txtName.innerHTML = "Username is valid"
        txtName.style.color = "green"
        usernameOk = true
    } 
}

function emailValidation(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "Email is invalid"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "Email is valid"
        txtEmail.style.color = "green"
        emailOk = true
    }
}


function subjectValidation(){
    let txtSubject = document.querySelector("#txtSubject")
    if(subject.value.length < 3){
        txtSubject.innerHTML = "Subject is invalid"
        txtSubject.style.color = "red"
    }else{
        txtSubject.innerHTML = "Subject is valid"
        txtSubject.style.color = "green"
        subjectOk = true
    }
}

function messageValidation(){
    let txtMessage = document.querySelector("#txtMessage")
    if(message.value.length >= 100){
        txtMessage.innerHTML = "Message is too long"
        txtMessage.style.color = "red"
    }else if (message.value.length < 10){
        txtMessage.innerHTML = "Message is too short"
        txtMessage.style.color = "red"
    }else{
        txtMessage.innerHTML = "Message is valid"
        txtMessage.style.color = "green"
        messageOk = true
    }
}

function send(){
    if(usernameOk == true && emailOk == true && subjectOk == true && messageOk == true){
        alert("Form was sent")
    }else{
        alert("Please fill all the fields correctly!")
    }
}
