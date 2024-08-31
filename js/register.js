let firstName = document.querySelector(".first-name");
let lastName = document.querySelector(".last-name");
let email = document.querySelector(".form-email");
let password = document.querySelector(".form-password") ;
let registerBtn =  document.querySelector("#submit-btn");
let username = firstName.value+lastName.value
console.log(username)

registerBtn.addEventListener("click",function(e){
    e.preventDefault();
    if(firstName.value === "" || lastName.value  ==="" || email.value  === "" || password.value  === ""){
        alert("please fill all fields");
    }else{
        localStorage.setItem("firstName",firstName.value);
        localStorage.setItem("lastName",lastName.value)
        localStorage.setItem("username" ,firstName.value+" "+lastName.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password", password.value);
        setTimeout(()=>{
            window.location="login.html"

        },1000)
    }
})