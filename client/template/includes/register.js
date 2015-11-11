Template.register.events({
   'submit #register-form':function(e, t){
       alert('ok');
       e.preventDefault();

       var email = t.find('#register-email').value;
       var password = t.find('#register-password').value;
       var password2 = t.find('#register-password-repeat').value;

       Accounts.createUser({
           email:email,
           password: password
       });
   }
});