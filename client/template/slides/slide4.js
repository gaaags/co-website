Template.slide4.helpers({
    'bottles':function(){

        var bottles = [];

        for (var i = 0; i < 10; i++){
            if(i === 8){
                bottles.push('slide4/belgium-bottle.png');
            } else {
                bottles.push('slide4/green-bottle.png');
            }
        }
        return bottles;
    }
});