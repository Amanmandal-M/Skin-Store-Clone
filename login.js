// login page

let checker = JSON.parse(localStorage.getItem("datas"));
console.log(checker);

document.querySelector("form").addEventListener("submit", mYsubmit);


let mail;
let pass;
function mYsubmit(e) {
    e.preventDefault();

     mail = document.querySelector("#email").value;

     pass = document.querySelector("#password").value;

    display(checker)
}

function display(checker){
    for(let  i=0; i<checker.length; i++){
       if(checker[i].con_email == mail && checker[i].con_pass == pass){
               alert("Login successful");
                alert(window.open("index.html"));
                window.close("login.html");
       }else{
             alert("Login failed");
       }
     }
}
