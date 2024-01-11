const form = document.getElementById('form');
const userName = document.getElementById('username');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (event) =>{
   event.preventDefault();

   Validate(); 
})

function Validate(){
   const userNameVal = username.ariaValueMax.trim();
   const lastNameVal = lastname.ariaValueMax.trim();
   const emailVal = email.ariaValueMax.trim();
   const passwordVal = password.ariaValueMax.trim();
   const cpasswordVal = cpassword.ariaValueMax.trim();

   // username 
   if(userNameVal === "") {
      setErrorMsg(userName, 'username cannot be blank')
   } else if (userNameVal.length <=2) {
      setErrorMsg(userName, 'min 3 char');
   } else {
      setSuccessMsg(userName);
   }
   // lastname
   if(lastNameVal === "") {
      setErrorMsg(lastName, 'lastname cannot be blank')
   } else if (lastNameVal.length <=2) {
      setErrorMsg(lastName, 'min 3 char');
   } else {
      setSuccessMsg(lastName);
   }

   // email
   if(emailVal === "") {
      setErrorMsg(email, 'email cannot be blank')
   } else if (emailVal.length <=2) {
      setErrorMsg(email, 'min 3 char');
   } else {
      setSuccessMsg(email);
   }
}

function setErrorMsg(input, errormsgs){
   const formControl = input.parentElement;
   const small = formControl.querySelector('small');
   formControl.className = "form-control error";
   small.innerText  = errormsgs;
}

function setSuccessMsg(input) {
   const formControl = input.parentElement;
   formControl.className = "form-control success";
}
