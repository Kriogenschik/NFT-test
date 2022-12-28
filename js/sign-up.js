//password symbol hide

const passIcon = document.getElementById('icon-pass');
const passInput = document.getElementById('formPass');

passIcon.addEventListener('click', () =>{
   if (passInput.getAttribute('type') == 'password') {
      passInput.setAttribute('type', 'text');
   } else {
      passInput.setAttribute('type', 'password');
   }
});


// Validation

document.addEventListener('DOMContentLoaded', function(){
   const form = document.getElementById('form');
   form.addEventListener('submit', formsend);
   
   async function formsend(e) {
      e.preventDefault();
      
      let error = formValidate(form);
      if (error==0){
         // отправка формы
      }else{
         alert('Неправильно заполненные поля!');
      }
   }

   function formValidate(form){
   let error = 0;
   let formReq = form.querySelectorAll('._req');
   for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
         if (emailTest(input)){
            formAddError(input);
            error++;
         }
         // проверка checkbox 
      }else if(input.getAttribute("type") === "checkbox" && input.checked === false){
         formAddError(input);
         error++;
         // проверка пароля
      } else if(input.classList.contains('_pass')){
         if (passTest(input)){
            formAddError(input);
            error++;
         }
      }
      } 
   return error;
}
function formAddError(input) {
   input.parentElement.classList.add('_error');
   input.classList.add('_error');
}
function formRemoveError(input) {
   input.parentElement.classList.remove('_error');
   input.classList.remove('_error');
}
// тест email
function emailTest(input){
   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
// тест pass
function passTest(input){
   return !/(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{9,}/g.test(input.value);
}
});