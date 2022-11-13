// Script

document.querySelector("form").addEventListener("submit", mYsubmit);

let arr = JSON.parse(localStorage.getItem("arr")) || []

function mYsubmit(e) {
    e.preventDefault();

    let con_email = document.querySelector("#email_1").value;

    let con_pass = document.querySelector("#password_1").value;

    if(con_email=="" || con_pass==""){
        alert("Fill all Details");
    }else{
        alert("Sign Up Successful");
    }

    let obj = {
        con_email,
        con_pass,
    }

    arr.push(obj);

    localStorage.setItem("datas",JSON.stringify(arr));

    getData(arr);
}

let email;
let password;
function getData(arr){
    for(let i=0; i<arr.length; i++){
        email=arr[i].con_email;
        password=arr[i].con_pass;
    }
}
