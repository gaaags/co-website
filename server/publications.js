Meteor.publish('posts',function(){
   return Posts.find();
});

Meteor.publish('questions',function(){
    return Questions.find();
});