Template.step1.events({
   'submit form':function(e){
       e.preventDefault();

       var order = new Order();

       order.set({
           'quantity':$(e.target).find('[name=quantity]').val()
       });

       if(order.validate()){
           order.save();
           Session.set("order",order);
           Session.set("step","step1");
       }
   }
});