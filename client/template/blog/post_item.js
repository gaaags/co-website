Template.postItem.helpers({
   createdAt:function(){
       var date = this.createdAt;
       return date.toLocaleString();
   }
});