
let email = document.querySelector(".form-email");
let password = document.querySelector(".form-password") ;
let signIn =  document.querySelector("#submit-btn");

let getEmail = localStorage.getItem("email")
let getPassword=localStorage.getItem("password")

signIn.addEventListener("click", function(e){
    e.preventDefault();
    if(email.value === "" || password.value ==="" ){
        alert("please fill all fields")
    }else{
        if(getEmail &&getEmail.trim()===email.value && getPassword && getPassword.trim() ===password.value){
           setTimeout(()=>{
                 window.location="index.html"
           },1000)
        }else{
            alert("email or password is wrong")
        }

    }

})

