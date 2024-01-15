
// SIDEBAR START
let menuBtn = document.querySelector('nav .menuBtn');
let sidebar = document.querySelector('.sidebar');
function showSidebar () {}
    sidebar.classList.add('active');

menuBtn.addEventListener('click',showSidebar);

let cancelBtn = document.querySelector('.cancel');

function hideSidebar (event) {
     sidebar.classList.remove('active');

    
    

}

cancelBtn.addEventListener("click", hideSidebar);
sidebar.addEventListener("click",hideSidebar);



// SIDEBAR END

let passwordBtn = document.querySelector(".passwordBtn");

let passowrdInput = document.querySelector(".inputWrapper input");


function showHidePassword( ) {

    if (passowrdInput.type == "password"){
        passowrdInput.type = "text";
        passwordBtn.innerHTML = `<i class="bi bi-eye"></i>`;
    } else{
        passowrdInput.type = "password";
        passwordBtn.innerHTML = `<i class="bi bi-eye-slash"></i>`;
    }
}

passwordBtn.addEventListener ("click", showHidePassword);


let submitBtn = document.querySelector ("form button");
let wrapper = document.querySelector(".wrapper")

function submitForm() {
    if (passowrdInput.Value.length > 0) {
        submitBtn.innerHTML = `succes<i class="bi bi-check-all"></i>`;
    } else{
        submitBtn.innerHTML = `Error<i class="bi bi-exclamation-triangle"></i>`;
    }
}

submitBtn.addEventListener("click", submitForm);